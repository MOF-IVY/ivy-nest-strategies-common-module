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
exports.IvyOperationsManagerService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const ivy_sdk_service_1 = require("../ivy-sdk/ivy-sdk.service");
const ivy_script_config_service_1 = require("../ivy-script-config/ivy-script-config.service");
const log_keys_const_1 = require("../../../../shared/constants/log-keys.const");
let IvyOperationsManagerService = class IvyOperationsManagerService {
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
    cancelOpenOrder(operationId) {
        const op = this.getActiveOperationById(operationId);
        if (!op)
            return false;
        this.sdk.instance.cancelOrder(operationId, "open");
    }
    cancelCloseOrder(operationId) {
        const op = this.getActiveOperationById(operationId);
        if (!op)
            return false;
        this.sdk.instance.cancelOrder(operationId, "close");
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
    async closeOperation(sym, orderType, reason) {
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
                operationType: operation.type,
                isMockOrder: this.config.snap.mockOrders,
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
    async openOperation(sym, opType, orderType, extraProps, reason) {
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
                stats: { absoluteProfit: 0, percentageProfit: 0 },
            };
            this.operations[sym] = operation;
        }
        try {
            const operationId = await this.sdk.instance.newOperation({
                orderType,
                symbol: sym,
                operationType: opType,
                leverage: this.config.snap.leverage,
                isMockOrder: this.config.snap.mockOrders,
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
        for (const sym of Object.keys(this.operations)) {
            if (this.operations[sym].id === op.operationId &&
                this.operations[sym].pendingOpen) {
                this.totalOps++;
                this.operations[sym].pendingOpen = false;
            }
        }
    }
    onClosedOperationConfirm(op) {
        Object.keys(this.operations).forEach((sym) => {
            if (this.operations[sym].id === op.operationId)
                delete this.operations[sym];
        });
    }
    onCloseOperationError(op) {
        Object.keys(this.operations).forEach((sym) => {
            if (this.operations[sym].id === op.operationId)
                this.operations[sym].pendingClose = false;
            this.logger(`[${sym}](${op.type}) Trader couldn't close operation. Will retry soon`, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
        });
    }
    onOpenOperationError(op) {
        Object.keys(this.operations).forEach((sym) => {
            if (this.operations[sym].id === op.operationId) {
                this.logger(`[${sym}](${op.type}) Trader couldn't open operation`, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptErrors, true);
                delete this.operations[sym];
            }
        });
    }
    setupStreamsOrBlock() {
        (0, rxjs_1.combineLatest)([this.sdk.subscribeReady(), this.config.subscribeReady()])
            .pipe((0, rxjs_1.filter)(([sdk, config]) => !!sdk && !!config), (0, rxjs_1.switchMap)(() => {
            return this.sdk.instance.enableActiveStatsUpdate();
        }), (0, rxjs_1.filter)((error) => {
            if (!!error) {
                this.logger("Cannot enable active stats update", log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptFatal, true);
                return false;
            }
            return true;
        }), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeActiveStatsUpdates()
            .pipe((0, rxjs_1.tap)((event) => this.onActiveStatsUpdate(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeClosedOperationsUpdates()
            .pipe((0, rxjs_1.tap)((event) => this.onClosedOperationConfirm(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeOpenedOperationsUpdates()
            .pipe((0, rxjs_1.tap)((event) => this.onOpenedOperationConfirm(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeOperationsOpenErrors()
            .pipe((0, rxjs_1.tap)((event) => this.onOpenOperationError(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.sdk.instance
            .subscribeOperationsCloseErrors()
            .pipe((0, rxjs_1.tap)((event) => this.onCloseOperationError(event)))
            .subscribe()), (0, rxjs_1.tap)(() => this.ready$.next(true)))
            .subscribe();
    }
};
IvyOperationsManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ivy_sdk_service_1.IvySDKService,
        ivy_script_config_service_1.IvyScriptConfigService])
], IvyOperationsManagerService);
exports.IvyOperationsManagerService = IvyOperationsManagerService;