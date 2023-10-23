import { Injectable } from "@nestjs/common";
import { IvyScriptConfigServiceBase } from "./base/ivy-script-config.base";
import { IIvyScriptInitialConfig } from "./models/initial-script-config.model";

@Injectable()
export class IvyScriptConfigService<
  ScriptConfigType = IIvyScriptInitialConfig
> extends IvyScriptConfigServiceBase<ScriptConfigType> {}
