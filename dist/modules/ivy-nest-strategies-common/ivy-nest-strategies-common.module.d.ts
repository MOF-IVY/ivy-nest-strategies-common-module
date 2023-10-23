import { DynamicModule } from "@nestjs/common";
import { ISDKConfigOpts } from "@mof-ivy/ivy-node-sdk";
export declare class IvyNestStrategiesCommonModule {
    static register<ScriptConfigType = Record<string, any>>(options: {
        scriptInitialScriptConfig: ScriptConfigType;
        SDKConfig?: ISDKConfigOpts;
    }): DynamicModule;
}
