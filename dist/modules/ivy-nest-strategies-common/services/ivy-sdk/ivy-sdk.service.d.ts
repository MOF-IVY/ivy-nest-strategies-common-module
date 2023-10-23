import { ISDKConfigOpts } from "@mof-ivy/ivy-node-sdk";
import { IvySDKServiceBase } from "./base/ivy-sdk.base";
export declare class IvySDKService<ScriptConfigType = Record<string, any>> extends IvySDKServiceBase<ScriptConfigType> {
    protected SDKConfig?: ISDKConfigOpts;
    constructor(SDKConfig?: ISDKConfigOpts);
}
