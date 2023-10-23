import { IvyStrongestPresenceServiceBase } from "./base/ivy-strongest-presence.base";
import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../ivy-script-config/ivy-script-config.service";
import { IIvyScriptInitialConfig } from "../ivy-script-config/models/initial-script-config.model";
export declare class IvyStrongestPresenceService extends IvyStrongestPresenceServiceBase {
    protected readonly sdk: IvySDKService;
    protected readonly config: IvyScriptConfigService<IIvyScriptInitialConfig>;
    constructor(sdk: IvySDKService, config: IvyScriptConfigService<IIvyScriptInitialConfig>);
}
