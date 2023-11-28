"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyStrongestPresenceServiceBase = void 0;
const rxjs_1 = require("rxjs");
const log_keys_const_1 = require("../../../../../shared/constants/log-keys.const");
const log_modes_enum_1 = require("../../../../../shared/enums/log-modes.enum");
class IvyStrongestPresenceServiceBase {
    sdk;
    config;
    logMode = log_modes_enum_1.LogModes.verbose;
    longCandidates$ = new rxjs_1.BehaviorSubject([]);
    shortCandidates$ = new rxjs_1.BehaviorSubject([]);
    ready$ = new rxjs_1.BehaviorSubject(false);
    logger;
    constructor(sdk, config) {
        this.sdk = sdk;
        this.config = config;
        this.logger = this.sdk.instance.log.bind(this.sdk.instance);
        this.setupStreamsOrBlock();
    }
    set loggingMode(mode) {
        this.logMode = mode;
    }
    subscribeReady() {
        return this.ready$.asObservable();
    }
    subscribeLongCandidatesChanges() {
        return this.longCandidates$.asObservable();
    }
    subscribeShortCandidatesChanges() {
        return this.shortCandidates$.asObservable();
    }
    isInLongCandidates(sym) {
        return !!this.longCandidates$.getValue().includes(sym);
    }
    isInShortCandidates(sym) {
        return !!this.shortCandidates$.getValue().includes(sym);
    }
    async onPumpEvent(event) {
        const { exchangeMarket, result } = event;
        if (exchangeMarket !== this.config.snap.exchangeMarket)
            return;
        if (!this.allRequiredTFsArePresent(result.map((i) => i.tf), this.config.snap.pumpTFs))
            return;
        if (this.config.snap.pumpStrongestPresenceDisabled)
            this.checkSimpleLongCandidates(event);
        else
            this.checkStrongestPresenceLongCandidates(event);
    }
    async onDumpEvent(event) {
        const { exchangeMarket, result } = event;
        if (exchangeMarket !== this.config.snap.exchangeMarket)
            return;
        if (!this.allRequiredTFsArePresent(result.map((i) => i.tf), this.config.snap.dumpTFs))
            return;
        if (this.config.snap.dumpStrongestPresenceDisabled)
            this.checkSimpleShortCandidates(event);
        else
            this.checkStrongestPresenceShortCandidates(event);
    }
    checkStrongestPresenceLongCandidates(event) {
        const rankings = this.getRequiredTFsRankings(this.config.snap.pumpTFs, event, this.config.snap.pumpingSymbolsPerTF);
        const distinctSymsInRankings = this.TFsRankingsToDistinctSymbols(rankings);
        const newCandidates = this.getStrongestPresenceNewCandidates(distinctSymsInRankings, rankings);
        if (this.candidatesListHasChanged(this.longCandidates$.getValue(), newCandidates)) {
            this.logger(newCandidates.toString(), log_keys_const_1.IvyNestStrategiesCommonLogKeys.longCandidates, true, this.logMode === log_modes_enum_1.LogModes.verbose);
        }
        this.longCandidates$.next(newCandidates);
    }
    checkStrongestPresenceShortCandidates(event) {
        const rankings = this.getRequiredTFsRankings(this.config.snap.dumpTFs, event, this.config.snap.dumpingSymbolsPerTF);
        const distinctSymsInRankings = this.TFsRankingsToDistinctSymbols(rankings);
        const newCandidates = this.getStrongestPresenceNewCandidates(distinctSymsInRankings, rankings);
        if (this.candidatesListHasChanged(this.shortCandidates$.getValue(), newCandidates)) {
            this.logger(newCandidates.toString(), log_keys_const_1.IvyNestStrategiesCommonLogKeys.shortCandidates, true, this.logMode === log_modes_enum_1.LogModes.verbose);
        }
        this.shortCandidates$.next(newCandidates);
    }
    getStrongestPresenceNewCandidates(distinctSymbols, rankings) {
        let newCandidates = [];
        distinctSymbols.forEach((sym) => {
            if (rankings.every((tf) => !!tf.items.find((i) => i.k.startsWith(sym)))) {
                newCandidates.push(sym);
            }
        });
        newCandidates = newCandidates.sort();
        return newCandidates;
    }
    async checkSimpleLongCandidates(event) {
        const { exchangeMarket, result } = event;
        if (exchangeMarket !== this.config.snap.exchangeMarket)
            return;
        if (!this.allRequiredTFsArePresent(result.map((i) => i.tf), this.config.snap.pumpTFs))
            return;
        const oldCandidates = this.longCandidates$.getValue();
        const newCandidates = this.TFsRankingsToDistinctSymbols(this.getRequiredTFsRankings(this.config.snap.pumpTFs, event, this.config.snap.pumpingSymbolsPerTF));
        if (this.candidatesListHasChanged(oldCandidates, newCandidates)) {
            this.logger(newCandidates, log_keys_const_1.IvyNestStrategiesCommonLogKeys.longCandidates, true, this.logMode === log_modes_enum_1.LogModes.verbose);
        }
        this.longCandidates$.next(newCandidates);
    }
    async checkSimpleShortCandidates(event) {
        const { exchangeMarket, result } = event;
        if (exchangeMarket !== this.config.snap.exchangeMarket)
            return;
        if (!this.allRequiredTFsArePresent(result.map((i) => i.tf), this.config.snap.dumpTFs))
            return;
        const oldCandidates = this.shortCandidates$.getValue();
        const newCandidates = this.TFsRankingsToDistinctSymbols(this.getRequiredTFsRankings(this.config.snap.dumpTFs, event, this.config.snap.dumpingSymbolsPerTF));
        if (this.candidatesListHasChanged(oldCandidates, newCandidates)) {
            this.logger(newCandidates, log_keys_const_1.IvyNestStrategiesCommonLogKeys.shortCandidates, true, this.logMode === log_modes_enum_1.LogModes.verbose);
        }
        this.shortCandidates$.next(newCandidates);
    }
    TFsRankingsToDistinctSymbols(newCandidatesRankings) {
        return [
            ...new Set(newCandidatesRankings.flatMap((i) => i.items.map((_) => _.k.split("~")[0]))),
        ];
    }
    candidatesListHasChanged(oldCandidates, newCandidates) {
        return oldCandidates.toString() !== (newCandidates ?? []).toString();
    }
    getRequiredTFsRankings(requiredTFs, event, lookBackWindow) {
        return event.result
            .filter((i) => requiredTFs.includes(i.tf))
            .map((i) => {
            i.items = i.items.slice(0, lookBackWindow);
            return i;
        });
    }
    allRequiredTFsArePresent(eventTFs, requiredTFs) {
        if (!requiredTFs.every((tf) => eventTFs.includes(tf)))
            return false;
        return true;
    }
    setupStreamsOrBlock() {
        (0, rxjs_1.combineLatest)([this.sdk.subscribeReady(), this.config.subscribeReady()])
            .pipe((0, rxjs_1.filter)(([sdk, config]) => !!sdk && !!config), (0, rxjs_1.take)(1), (0, rxjs_1.switchMap)(() => this.config.snap.pumpTFs === null
            ? (0, rxjs_1.of)()
            : this.sdk.instance.enablePumpStream({
                xm: this.config.snap.exchangeMarket,
                tfs: this.config.snap.dumpTFs,
            })), (0, rxjs_1.filter)((error) => {
            if (!!error) {
                this.logger("Cannot enable PUMP stream", log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptFatal, true);
                return false;
            }
            return true;
        }), (0, rxjs_1.switchMap)(() => this.config.snap.dumpTFs === null
            ? (0, rxjs_1.of)()
            : this.sdk.instance.enableDumpStream({
                xm: this.config.snap.exchangeMarket,
                tfs: this.config.snap.dumpTFs,
            })), (0, rxjs_1.filter)((error) => {
            if (!!error) {
                this.logger("Cannot enable DUMP stream", log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptFatal, true);
                return false;
            }
            return true;
        }), (0, rxjs_1.tap)(() => this.config.snap.pumpTFs === null
            ? null
            : this.sdk.instance
                .subscribePumpStream()
                .pipe((0, rxjs_1.tap)((event) => this.onPumpEvent(event)))
                .subscribe()), (0, rxjs_1.tap)(() => this.config.snap.dumpTFs === null
            ? null
            : this.sdk.instance
                .subscribeDumpStream()
                .pipe((0, rxjs_1.tap)((event) => this.onDumpEvent(event)))
                .subscribe()), (0, rxjs_1.tap)(() => this.ready$.next(true)))
            .subscribe();
    }
}
exports.IvyStrongestPresenceServiceBase = IvyStrongestPresenceServiceBase;
