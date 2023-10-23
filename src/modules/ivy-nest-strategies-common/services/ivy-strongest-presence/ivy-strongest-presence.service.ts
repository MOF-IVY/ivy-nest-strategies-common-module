import { Injectable } from "@nestjs/common";
import { IvyStrongestPresenceServiceBase } from "./base/ivy-strongest-presence.base";
import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../ivy-script-config/ivy-script-config.service";
import { IIvyScriptInitialConfig } from "../ivy-script-config/models/initial-script-config.model";

@Injectable()
export class IvyStrongestPresenceService extends IvyStrongestPresenceServiceBase {
  constructor(
    protected readonly sdk: IvySDKService,
    protected readonly config: IvyScriptConfigService<IIvyScriptInitialConfig>
  ) {
    super(sdk, config);
  }
}
