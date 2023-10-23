import { Inject, Injectable } from "@nestjs/common";
import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";

import { IvyScriptConfigServiceBase } from "./base/ivy-script-config.base";
import { IIvyScriptInitialConfig } from "./models/initial-script-config.model";

@Injectable()
export class IvyScriptConfigService<
  ScriptConfigType = IIvyScriptInitialConfig
> extends IvyScriptConfigServiceBase<ScriptConfigType> {
  constructor(
    protected readonly sdk: IvySDKService,

    @Inject("IVY_SCRIPT_INITIAL_CONFIG")
    protected readonly initialConfig: ScriptConfigType
  ) {
    super(sdk, initialConfig);
  }
}
