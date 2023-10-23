import { Injectable } from "@nestjs/common";
import { IvyScriptConfigServiceBase } from "./base/ivy-script-config.base";

@Injectable()
export class IvyScriptConfigService<
  ScriptConfigType = Record<string, any>
> extends IvyScriptConfigServiceBase<ScriptConfigType> {}
