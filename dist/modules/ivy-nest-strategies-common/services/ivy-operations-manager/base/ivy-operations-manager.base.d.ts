import { BehaviorSubject } from "rxjs";
import { ExchangeOperationType, ITraderOperation } from "@mof-ivy/ivy-node-sdk";
import { IStandardWsError } from "@mof-ivy/ivy-node-sdk/dist/core/services/base/ws.service";
import { IActiveStatsUpdate } from "@mof-ivy/ivy-node-sdk/dist/core/services/instance/trader.service";
import { IActiveOperation } from "../models/active-operation.model";
import { IvySDKService } from "../../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../../ivy-script-config/ivy-script-config.service";
export declare abstract class IvyOperationsManagerBase<OperationExtraProps = null> {
    protected readonly sdk: IvySDKService;
    protected readonly config: IvyScriptConfigService;
    protected totalOps: number;
    protected operations: {
        [sym: string]: IActiveOperation<OperationExtraProps>;
    };
    protected ready$: BehaviorSubject<boolean>;
    protected readonly logger: (message: object | string, logKey: string, persist?: boolean) => Promise<boolean | IStandardWsError>;
    constructor(sdk: IvySDKService, config: IvyScriptConfigService);
    get activeOperationsCount(): number;
    get isOverMaxConcurrencyCap(): boolean;
    cancelOpenOrder(operationId: string): Promise<boolean>;
    cancelCloseOrder(operationId: string): Promise<boolean>;
    hasActiveOperation(sym: string): boolean;
    getActiveOperationById(id: string): IActiveOperation<OperationExtraProps>;
    getActiveOperationBySym(sym: string): IActiveOperation<OperationExtraProps>;
    operationIsPendingOpen(sym: string): boolean;
    operationIsPendingClose(sym: string): boolean;
    closeOperation(sym: string, orderType: "Market" | "Limit", limitPrice?: number, reason?: string): Promise<void>;
    openOperation(sym: string, opType: ExchangeOperationType, orderType: "Market" | "Limit", limitPrice?: number, extraProps?: OperationExtraProps, reason?: string): Promise<void>;
    protected onActiveStatsUpdate(event: IActiveStatsUpdate): Promise<void>;
    protected onOpenedOperationConfirm(op: ITraderOperation<unknown>): Promise<void>;
    protected onClosedOperationConfirm(op: ITraderOperation<unknown>): void;
    protected onCloseOrderCancelledConfirm(op: ITraderOperation<unknown>): void;
    protected onOpenOrderCancelledConfirm(op: ITraderOperation<unknown>): void;
    protected onCloseOperationError(id: string): void;
    protected onOpenOperationError(id: string): void;
    protected setupStreamsOrBlock(): void;
}
