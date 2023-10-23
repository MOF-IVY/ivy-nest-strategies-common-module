import { Inject, Injectable } from "@nestjs/common";
import { ISDKConfigOpts } from "@mof-ivy/ivy-node-sdk";

import { IvySDKServiceBase } from "./base/ivy-sdk.base";

@Injectable()
export class IvySDKService<
  ScriptConfigType = Record<string, any>
> extends IvySDKServiceBase<ScriptConfigType> {
  constructor(
    @Inject("IVY_SDK_CONFIG")
    protected SDKConfig?: ISDKConfigOpts
  ) {
    super(SDKConfig);
  }
}
