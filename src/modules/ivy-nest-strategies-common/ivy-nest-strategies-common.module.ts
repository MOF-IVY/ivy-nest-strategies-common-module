import { DynamicModule, Module } from "@nestjs/common";
import { IvyScriptConfigService } from "./services/ivy-script-config/ivy-script-config.service";
import { ISDKConfigOpts } from "@mof-ivy/ivy-node-sdk";

@Module({})
export class IvyNestStrategiesCommonModule {
  static register<ScriptConfigType = Record<string, any>>(options: {
    scriptInitialScriptConfig: ScriptConfigType;
    SDKConfig?: ISDKConfigOpts;
  }): DynamicModule {
    return {
      module: IvyNestStrategiesCommonModule,
      exports: [IvyScriptConfigService],
      providers: [
        IvyScriptConfigService,
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
