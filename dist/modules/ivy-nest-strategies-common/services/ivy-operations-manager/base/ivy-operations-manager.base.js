"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyOperationsManagerBase = void 0;
const rxjs_1 = require("rxjs");
const log_keys_const_1 = require("../../../../../shared/constants/log-keys.const");
class IvyOperationsManagerBase {
    sdk;
    config;
    totalOps = 0;
    operations = {};
    ready$ = new rxjs_1.BehaviorSubject(false);
    logger;
    constructor(sdk, config) {
        this.sdk = sdk;
        this.config = config;
        this.logger = this.sdk.instance.log.bind(this.sdk.instance);
        this.setupStreamsOrBlock();
    }
    get activeOperationsCount() {
        return Object.keys(this.operations).length;
    }
    get isOverMaxConcurrencyCap() {
        if (this.config.snap.maxConcurrentOps === null)
            return false;
        if (this.activeOperationsCount >= this.config.snap.maxConcurrentOps)
            return true;
        return false;
    }
    async cancelOpenOrder(operationId) {
        const op = this.getActiveOperationById(operationId);
        if (!op)
            return false;
        try {
            return this.sdk.instance.cancelOrder(operationId, "open");
        }
        catch (e) {
            return false;
        }
    }
    async cancelCloseOrder(operationId) {
        const op = this.getActiveOperationById(operationId);
        if (!op)
            return false;
        try {
            return this.sdk.instance.cancelOrder(operationId, "close");
        }
        catch (e) {
            return false;
        }
    }
    hasActiveOperation(sym) {
        return !!this.operations[sym];
    }
    getActiveOperationById(id) {
        const k = Object.keys(this.operations).find((k) => this.operations[k].id === id);
        if (!!k)
            return this.operations[k];
    }
    getActiveOperationBySym(sym) {
        return this.operations[sym];
    }
    operationIsPendingOpen(sym) {
        return !!this.operations[sym]?.pendingOpen;
    }
    operationIsPendingClose(sym) {
        return !!this.operations[sym]?.pendingClose;
    }
    async closeOperation(sym, orderType, limitPrice, reason) {
        let intent;
        if (!this.hasActiveOperation(sym)) {
            intent = `[${sym}] Received close command but no open operation can be found`;
            this.logger(intent, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
            return;
        }
        if (this.operationIsPendingClose(sym))
            return;
        const operation = this.operations[sym];
        operation.pendingClose = true;
        try {
            const operationId = await this.sdk.instance.closeOperation({
                orderType,
                symbol: sym,
                price: limitPrice,
                operationType: operation.type,
                exchangeMarket: this.config.snap.exchangeMarket,
            });
            if (operationId === null) {
                operation.pendingClose = false;
                intent = `[${sym}](${operation.type.toUpperCase()}) operation close rejected by trader`;
                this.logger(intent, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
                return;
            }
            if (reason) {
                this.logger(`[${sym}](${orderType}) Order placed due to: ${reason}`, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptSymsLogs, true);
            }
        }
        catch (e) {
            e = e;
            operation.pendingClose = false;
            intent = `[${sym}](${operation.type.toUpperCase()}) operation close error -> ${e.message}`;
            this.logger(intent, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
        }
    }
    async openOperation(sym, opType, orderType, limitPrice, extraProps, reason) {
        let intent;
        if ((this.config.snap.maxTotalOps !== null &&
            this.totalOps >= this.config.snap.maxTotalOps) ||
            this.isOverMaxConcurrencyCap)
            return;
        if (this.operationIsPendingOpen(sym))
            return;
        let operation = this.operations[sym];
        if (!operation) {
            operation = {
                id: null,
                type: opType,
                extras: extraProps,
                pendingOpen: true,
                isPaperMode: this.config.snap.isPaperMode,
                stats: { absoluteProfit: 0, percentageProfit: 0 },
            };
            this.operations[sym] = operation;
        }
        try {
            const operationId = await this.sdk.instance.newOperation({
                orderType,
                symbol: sym,
                price: limitPrice,
                operationType: opType,
                isMockOrder: operation.isPaperMode,
                leverage: this.config.snap.leverage,
                minBuyBudget: this.config.snap.minBuyBudget,
                exchangeMarket: this.config.snap.exchangeMarket,
            });
            if (operationId === null) {
                delete this.operations[sym];
                intent = `[${sym}](${opType.toUpperCase()}) operation open rejected by trader`;
                this.logger(intent, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
                return;
            }
            operation.id = operationId;
            if (reason)
                this.logger(`[${sym}](${orderType}) order placed due to: ${reason}`, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptSymsLogs, true);
        }
        catch (e) {
            e = e;
            delete this.operations[sym];
            intent = `[${sym}](${opType.toUpperCase()}) operation open error -> ${e.message}`;
            this.logger(intent, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
        }
    }
    async onActiveStatsUpdate(event) {
        const { xm, sym, stats } = event;
        if (xm !== this.config.snap.exchangeMarket)
            return;
        if (!this.hasActiveOperation(sym))
            return;
        this.operations[sym].stats = stats;
    }
    async onOpenedOperationConfirm(op) {
        console.log(`[${op.symbol}] OPEN CONFIRM`);
        for (const sym of Object.keys(this.operations)) {
            if (this.operations[sym].id === op.operationId) {
                this.totalOps++;
                this.operations[sym].pendingOpen = false;
            }
        }
    }
    onClosedOperationConfirm(op) {
        console.log(`[${op.symbol}] CLOSE CONFIRM`);
        Object.keys(this.operations).forEach((sym) => {
            if (this.operations[sym].id === op.operationId)
                delete this.operations[sym];
        });
    }
    onCloseOperationError(id) {
        Object.keys(this.operations).forEach((sym) => {
            if (this.operations[sym].id === id)
                this.operations[sym].pendingClose = false;
            this.logger(`[${sym}](${this.operations[sym].type}) Trader couldn't close operation. Will retry soon`, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
        });
    }
    onOpenOperationError(id) {
        Object.keys(this.operations).forEach((sym) => {
            if (this.operations[sym].id === id) {
                this.logger(`[${sym}](${this.operations[sym].type}) Trader couldn't open operation`, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
                delete this.operations[sym];
            }
        });
    }
    setupStreamsOrBlock() {
        (0, rxjs_1.combineLatest)([this.sdk.subscribeReady(), this.config.subscribeReady()])
            .pipe((0, rxjs_1.filter)(([sdk, config]) => !!sdk && !!config), (0, rxjs_1.switchMap)(() => {
            return this.sdk.instance.enableActiveOperationsStatsUpdates();
        }), (0, rxjs_1.filter)((error) => {
            if (!!error) {
                this.logger("Cannot enable active stats update", log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptFatal, true);
                return false;
            }
            return true;
        }), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeActiveOperationsStatsUpdates()
            .pipe((0, rxjs_1.tap)((event) => this.onActiveStatsUpdate(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeClosedOperationsEvents()
            .pipe((0, rxjs_1.tap)((event) => this.onClosedOperationConfirm(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeNewActiveOperationsEvents()
            .pipe((0, rxjs_1.tap)((event) => this.onOpenedOperationConfirm(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeOperationsOpenErrorsEvents()
            .pipe((0, rxjs_1.tap)((event) => this.onOpenOperationError(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeOperationsCloseErrorsEvents()
            .pipe((0, rxjs_1.tap)((event) => this.onCloseOperationError(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.ready$.next(true)))
            .subscribe();
    }
}
exports.IvyOperationsManagerBase = IvyOperationsManagerBase;
