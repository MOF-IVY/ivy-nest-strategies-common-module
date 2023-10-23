import { ExchangeOperationType, IOperationStats } from "@mof-ivy/ivy-node-sdk";

export interface IActiveOperation<AdditionalProps = null> {
  id: string;
  pendingOpen?: boolean;
  pendingClose?: boolean;
  stats: IOperationStats;
  type: ExchangeOperationType;

  /**
   * Extension properties that can be registered on the operation
   * during the opening phase.
   *
   * These properties are returned along with the operation
   */
  extras: AdditionalProps;
}
