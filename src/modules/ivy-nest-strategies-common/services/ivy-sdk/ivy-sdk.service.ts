import { Injectable } from "@nestjs/common";
import { IvySDKServiceBase } from "./base/ivy-sdk.base";

@Injectable()
export class IvySDKService<
  ScriptConfigType = Record<string, any>
> extends IvySDKServiceBase<ScriptConfigType> {}
