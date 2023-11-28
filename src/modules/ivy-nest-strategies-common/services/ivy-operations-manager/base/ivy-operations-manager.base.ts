import { BehaviorSubject, combineLatest, filter, switchMap, tap } from "rxjs";

import { ExchangeOperationType, ITraderOperation } from "@mof-ivy/ivy-node-sdk";
import { IStandardWsError } from "@mof-ivy/ivy-node-sdk/dist/core/services/base/ws.service";
import { IActiveStatsUpdate } from "@mof-ivy/ivy-node-sdk/dist/core/services/instance/trader.service";

import { IActiveOperation } from "../models/active-operation.model";
import { IvyNestStrategiesCommonLogKeys } from "../../../../../shared/constants/log-keys.const";

import { IvySDKService } from "../../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../../ivy-script-config/ivy-script-config.service";

export abstract class IvyOperationsManagerBase<OperationExtraProps = null> {
  protected totalOps: number = 0;
  protected operations: {
    [sym: string]: IActiveOperation<OperationExtraProps>;
  } = {};

  protected ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  protected readonly logger: (
    message: object | string,
    logKey: string,
    persist?: boolean
  ) => Promise<boolean | IStandardWsError>;

  constructor(
    protected readonly sdk: IvySDKService,
    protected readonly config: IvyScriptConfigService
  ) {
    this.logger = this.sdk.instance.log.bind(this.sdk.instance);
    this.setupStreamsOrBlock();
  }

  get activeOperationsCount() {
    return Object.keys(this.operations).length;
  }

  get isOverMaxConcurrencyCap() {
    if (this.config.snap.maxConcurrentOps === null) return false;
    if (this.activeOperationsCount >= this.config.snap.maxConcurrentOps)
      return true;

    return false;
  }

  async cancelOpenOrder(operationId: string) {
    const op = this.getActiveOperationById(operationId);
    if (!op) return false;
    try {
      return await this.sdk.instance.cancelOrder(operationId, "open");
    } catch (e) {
      return false;
    }
  }

  async cancelCloseOrder(operationId: string) {
    const op = this.getActiveOperationById(operationId);
    if (!op) return false;
    try {
      return await this.sdk.instance.cancelOrder(operationId, "close");
    } catch (e) {
      return false;
    }
  }

  hasActiveOperation(sym: string): boolean {
    return !!this.operations[sym];
  }

  getActiveOperationById(id: string): IActiveOperation<OperationExtraProps> {
    const k = Object.keys(this.operations).find(
      (k) => this.operations[k].id === id
    );
    if (!!k) return this.operations[k];
  }

  getActiveOperationBySym(sym: string): IActiveOperation<OperationExtraProps> {
    return this.operations[sym];
  }

  operationIsPendingOpen(sym: string): boolean {
    return !!this.operations[sym]?.pendingOpen;
  }

  operationIsPendingClose(sym: string): boolean {
    return !!this.operations[sym]?.pendingClose;
  }

  async closeOperation(
    sym: string,
    orderType: "Market" | "Limit",
    limitPrice?: number,
    reason?: string
  ) {
    let intent: string;
    if (!this.hasActiveOperation(sym)) {
      intent = `[${sym}] Received close command but no open operation can be found`;
      this.logger(intent, IvyNestStrategiesCommonLogKeys.scriptErrors, true);
      return;
    }

    if (this.operationIsPendingClose(sym)) return;

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
        this.logger(intent, IvyNestStrategiesCommonLogKeys.scriptErrors, true);
        return;
      }

      if (reason) {
        this.logger(
          `[${sym}](${orderType}) Order placed due to: ${reason}`,
          IvyNestStrategiesCommonLogKeys.scriptSymsLogs,
          true
        );
      }
    } catch (e) {
      e = e as Error;
      operation.pendingClose = false;
      intent = `[${sym}](${operation.type.toUpperCase()}) operation close error -> ${
        e.message
      }`;
      this.logger(intent, IvyNestStrategiesCommonLogKeys.scriptErrors, true);
    }
  }

  async openOperation(
    sym: string,
    opType: ExchangeOperationType,
    orderType: "Market" | "Limit",
    limitPrice?: number,
    extraProps?: OperationExtraProps,
    reason?: string
  ) {
    let intent: string;

    if (
      (this.config.snap.maxTotalOps !== null &&
        this.totalOps >= this.config.snap.maxTotalOps) ||
      this.isOverMaxConcurrencyCap
    )
      return;

    if (this.operationIsPendingOpen(sym)) return;
    let operation = this.operations[sym];
    if (!operation) {
      operation = {
        id: null!,
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
        this.logger(intent, IvyNestStrategiesCommonLogKeys.scriptErrors, true);
        return;
      }

      operation.id = operationId;

      if (reason)
        this.logger(
          `[${sym}](${orderType}) order placed due to: ${reason}`,
          IvyNestStrategiesCommonLogKeys.scriptSymsLogs,
          true
        );
    } catch (e) {
      e = e as Error;
      delete this.operations[sym];
      intent = `[${sym}](${opType.toUpperCase()}) operation open error -> ${
        e.message
      }`;
      this.logger(intent, IvyNestStrategiesCommonLogKeys.scriptErrors, true);
    }
  }

  protected async onActiveStatsUpdate(event: IActiveStatsUpdate) {
    const { xm, sym, stats } = event;
    if (xm !== this.config.snap.exchangeMarket) return;
    if (!this.hasActiveOperation(sym)) return;

    this.operations[sym].stats = stats;
  }

  protected async onOpenedOperationConfirm(op: ITraderOperation<unknown>) {
    console.log(`[${op.symbol}] OPEN CONFIRM`);
    for (const sym of Object.keys(this.operations)) {
      if (this.operations[sym].id === op.operationId) {
        this.totalOps++;
        this.operations[sym].pendingOpen = false;
      }
    }
  }

  protected onClosedOperationConfirm(op: ITraderOperation<unknown>): void {
    console.log(`[${op.symbol}] CLOSE CONFIRM`);
    Object.keys(this.operations).forEach((sym) => {
      if (this.operations[sym].id === op.operationId)
        delete this.operations[sym];
    });
  }

  protected onCloseOperationError(id: string): void {
    Object.keys(this.operations).forEach((sym) => {
      if (this.operations[sym].id === id)
        this.operations[sym].pendingClose = false;
      this.logger(
        `[${sym}](${this.operations[sym].type}) Trader couldn't close operation. Will retry soon`,
        IvyNestStrategiesCommonLogKeys.scriptErrors,
        true
      );
    });
  }

  protected onOpenOperationError(id: string): void {
    Object.keys(this.operations).forEach((sym) => {
      if (this.operations[sym].id === id) {
        this.logger(
          `[${sym}](${this.operations[sym].type}) Trader couldn't open operation`,
          IvyNestStrategiesCommonLogKeys.scriptErrors,
          true
        );
        delete this.operations[sym];
      }
    });
  }

  protected setupStreamsOrBlock() {
    combineLatest([this.sdk.subscribeReady(), this.config.subscribeReady()])
      .pipe(
        filter(([sdk, config]) => !!sdk && !!config),
        switchMap(() => {
          return this.sdk.instance.enableActiveOperationsStatsUpdates();
        }),
        filter((error) => {
          if (!!error) {
            this.logger(
              "Cannot enable active stats update",
              IvyNestStrategiesCommonLogKeys.scriptFatal,
              true
            );
            return false;
          }
          return true;
        }),
        tap(() =>
          this.sdk.instance
            .subscribeActiveOperationsStatsUpdates()
            .pipe(tap((event) => this.onActiveStatsUpdate(event)))
            .subscribe()
        ),
        tap(() =>
          this.sdk.instance
            .subscribeClosedOperationsEvents()
            .pipe(tap((event) => this.onClosedOperationConfirm(event)))
            .subscribe()
        ),
        tap(() =>
          this.sdk.instance
            .subscribeNewActiveOperationsEvents()
            .pipe(tap((event) => this.onOpenedOperationConfirm(event)))
            .subscribe()
        ),
        tap(() =>
          this.sdk.instance
            .subscribeOperationsOpenErrorsEvents()
            .pipe(tap((event) => this.onOpenOperationError(event)))
            .subscribe()
        ),
        tap(() =>
          this.sdk.instance
            .subscribeOperationsCloseErrorsEvents()
            .pipe(tap((event) => this.onCloseOperationError(event)))
            .subscribe()
        ),
        tap(() => this.ready$.next(true))
      )
      .subscribe();
  }
}
