import { Injectable } from "@nestjs/common";
import { IvyOperationsManagerBase } from "./base/ivy-operations-manager.base";

@Injectable()
export class IvyOperationsManagerService<
  OperationExtraProps = null
> extends IvyOperationsManagerBase<OperationExtraProps> {}
