import { DynamicModule, Module } from "@nestjs/common";
import { IvyScriptConfigService } from "./services/ivy-script-config/ivy-script-config.service";
import { ISDKConfigOpts } from "@mof-ivy/ivy-node-sdk";
import { IvyOperationsManagerService } from "./services/ivy-operations-manager/ivy-operations-manager.service";
import { IvySDKService } from "./services/ivy-sdk/ivy-sdk.service";
import { IvyStrongestPresenceService } from "./services/ivy-strongest-presence/ivy-strongest-presence.service";

@Module({})
export class IvyNestStrategiesCommonModule {
  static register<ScriptConfigType = Record<string, any>>(options: {
    scriptInitialScriptConfig: ScriptConfigType;
    SDKConfig?: ISDKConfigOpts;
  }): DynamicModule {
    return {
      module: IvyNestStrategiesCommonModule,
      exports: [
        IvySDKService,
        IvyScriptConfigService,
        IvyOperationsManagerService,
        IvyStrongestPresenceService,
      ],
      providers: [
        IvySDKService,
        IvyScriptConfigService,
        IvyOperationsManagerService,
        IvyStrongestPresenceService,

        {
          provide: "IVY_SCRIPT_INITIAL_CONFIG",
          useValue: options.scriptInitialScriptConfig,
        },
        {
          provide: "IVY_SDK_CONFIG",
          useValue: options.SDKConfig,
        },
      ],
    };
  }
}
