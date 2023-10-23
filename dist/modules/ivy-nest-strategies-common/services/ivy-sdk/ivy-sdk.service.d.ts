import { ISDKConfigOpts, IvySDK } from "@mof-ivy/ivy-node-sdk";
export declare class IvySDKService<ScriptConfigType = Record<string, any>> {
    private SDKConfig?;
    private readonly sdkInstance;
    constructor(SDKConfig?: ISDKConfigOpts);
    /**
     * Returns the configured SDK instance ready for use
     *
     * Note: you must wait on the subscribeReady event in order
     * to use this getter safely
     */
    get instance(): IvySDK<ScriptConfigType>;
    /**
     * Subscribe to the SDK ready state.
     * Once this observable emits true, you can safely
     * start using the SDK instance by calling the "instance" getter
     *
     * @returns Observable<true>
     */
    subscribeReady(): import("rxjs").Observable<boolean>;
}
