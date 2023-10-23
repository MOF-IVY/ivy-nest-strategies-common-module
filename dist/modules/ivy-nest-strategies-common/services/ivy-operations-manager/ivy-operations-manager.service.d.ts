import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";
import { IvyOperationsManagerBase } from "./base/ivy-operations-manager.base";
import { IvyScriptConfigService } from "../ivy-script-config/ivy-script-config.service";
export declare class IvyOperationsManagerService<OperationExtraProps = null> extends IvyOperationsManagerBase<OperationExtraProps> {
    protected readonly sdk: IvySDKService;
    protected readonly config: IvyScriptConfigService;
    constructor(sdk: IvySDKService, config: IvyScriptConfigService);
}
