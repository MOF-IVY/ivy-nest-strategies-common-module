import { Inject } from "@nestjs/common";

import { ISDKConfigOpts, IvySDK } from "@mof-ivy/ivy-node-sdk";
import { filter } from "rxjs";

export abstract class IvySDKServiceBase<
  ScriptConfigType = Record<string, any>
> {
  protected readonly sdkInstance: IvySDK<ScriptConfigType>;

  constructor(protected SDKConfig?: ISDKConfigOpts) {
    this.sdkInstance = new IvySDK(this.SDKConfig ?? {});
  }

  /**
   * Returns the configured SDK instance ready for use
   *
   * Note: you must wait on the subscribeReady event in order
   * to use this getter safely
   */
  get instance() {
    return this.sdkInstance;
  }

  /**
   * Subscribe to the SDK ready state.
   * Once this observable emits true, you can safely
   * start using the SDK instance by calling the "instance" getter
   *
   * @returns Observable<true>
   */
  subscribeReady() {
    return this.sdkInstance.subscribeReady().pipe(filter((ready) => !!ready));
  }
}
