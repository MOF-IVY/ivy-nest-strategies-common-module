import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigServiceBase } from "./base/ivy-script-config.base";
import { IIvyScriptInitialConfig } from "./models/initial-script-config.model";
export declare class IvyScriptConfigService<ScriptConfigType = IIvyScriptInitialConfig> extends IvyScriptConfigServiceBase<ScriptConfigType> {
    protected readonly sdk: IvySDKService;
    protected readonly initialConfig: ScriptConfigType;
    constructor(sdk: IvySDKService, initialConfig: ScriptConfigType);
}
