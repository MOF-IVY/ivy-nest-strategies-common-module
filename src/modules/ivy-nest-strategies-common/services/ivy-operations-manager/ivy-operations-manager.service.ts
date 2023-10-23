import { Injectable } from "@nestjs/common";

import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";
import { IvyOperationsManagerBase } from "./base/ivy-operations-manager.base";
import { IvyScriptConfigService } from "../ivy-script-config/ivy-script-config.service";

@Injectable()
export class IvyOperationsManagerService<
  OperationExtraProps = null
> extends IvyOperationsManagerBase<OperationExtraProps> {
  constructor(
    protected readonly sdk: IvySDKService,
    protected readonly config: IvyScriptConfigService
  ) {
    super(sdk, config);
  }
}
