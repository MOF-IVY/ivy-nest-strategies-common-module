"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyStrongestPresenceService = void 0;
const rxjs_1 = require("rxjs");
const common_1 = require("@nestjs/common");
const ivy_sdk_service_1 = require("../ivy-sdk/ivy-sdk.service");
const ivy_script_config_service_1 = require("../ivy-script-config/ivy-script-config.service");
const log_keys_const_1 = require("../../../../shared/constants/log-keys.const");
let IvyStrongestPresenceService = class IvyStrongestPresenceService {
    sdk;
    config;
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
        if (!this.allRequiredTFsArePresent(result.map((i) => i.tf), this.config.snap.pumpRankingTfs))
            return;
        const rankings = this.getRequiredTFsRankings(this.config.snap.pumpRankingTfs, event, this.config.snap.pumpLookBackWindow);
        const distinctSymsInRankings = [
            ...new Set(rankings.flatMap((i) => i.items.map((_) => _.k.split("~")[0]))),
        ];
        let newCandidates = [];
        distinctSymsInRankings.forEach((sym) => {
            if (rankings.every((tf) => !!tf.items.find((i) => i.k.startsWith(sym)))) {
                newCandidates.push(sym);
            }
        });
        newCandidates = newCandidates.sort();
        const stringCandidates = newCandidates.toString();
        if (!!stringCandidates &&
            this.longCandidates$.getValue().toString() !== stringCandidates) {
            this.logger(newCandidates.toString(), log_keys_const_1.IvyNestStrategiesCommonLogKeys.longCandidates, true);
        }
        this.longCandidates$.next(newCandidates);
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
    async onDumpEvent(event) {
        const { exchangeMarket, result } = event;
        if (exchangeMarket !== this.config.snap.exchangeMarket)
            return;
        if (!this.allRequiredTFsArePresent(result.map((i) => i.tf), this.config.snap.dumpRankingTfs))
            return;
        const rankings = this.getRequiredTFsRankings(this.config.snap.dumpRankingTfs, event, this.config.snap.dumpLookBackWindow);
        const distinctSymsInRankings = [
            ...new Set(rankings.flatMap((i) => i.items.map((_) => _.k.split("~")[0]))),
        ];
        let newCandidates = [];
        distinctSymsInRankings.forEach((sym) => {
            if (rankings.every((tf) => !!tf.items.find((i) => i.k.startsWith(sym)))) {
                newCandidates.push(sym);
            }
        });
        newCandidates = newCandidates.sort();
        const stringCandidates = newCandidates.toString();
        if (!!stringCandidates &&
            this.shortCandidates$.getValue().toString() !== stringCandidates) {
            this.logger(stringCandidates, log_keys_const_1.IvyNestStrategiesCommonLogKeys.shortCandidates, true);
        }
        this.shortCandidates$.next(newCandidates);
    }
    setupStreamsOrBlock() {
        (0, rxjs_1.combineLatest)([this.sdk.subscribeReady(), this.config.subscribeReady()])
            .pipe((0, rxjs_1.filter)(([sdk, config]) => !!sdk && !!config), (0, rxjs_1.take)(1), (0, rxjs_1.switchMap)(() => {
            return this.sdk.instance.enablePumpStream({
                xm: this.config.snap.exchangeMarket,
                tfs: this.config.snap.pumpRankingTfs,
            });
        }), (0, rxjs_1.filter)((error) => {
            if (!!error) {
                this.logger("Cannot enable PUMP stream", log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptFatal, true);
                return false;
            }
            return true;
        }), (0, rxjs_1.switchMap)(() => this.sdk.instance.enableDumpStream({
            xm: this.config.snap.exchangeMarket,
            tfs: this.config.snap.dumpRankingTfs,
        })), (0, rxjs_1.filter)((error) => {
            if (!!error) {
                this.logger("Cannot enable DUMP stream", log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptFatal, true);
                return false;
            }
            return true;
        }), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribePumpStream()
            .pipe((0, rxjs_1.tap)((event) => this.onPumpEvent(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeDumpStream()
            .pipe((0, rxjs_1.tap)((event) => this.onDumpEvent(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.ready$.next(true)))
            .subscribe();
    }
};
IvyStrongestPresenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ivy_sdk_service_1.IvySDKService,
        ivy_script_config_service_1.IvyScriptConfigService])
], IvyStrongestPresenceService);
exports.IvyStrongestPresenceService = IvyStrongestPresenceService;
