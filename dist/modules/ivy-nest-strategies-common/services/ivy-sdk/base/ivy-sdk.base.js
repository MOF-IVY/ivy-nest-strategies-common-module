"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvySDKServiceBase = void 0;
const ivy_node_sdk_1 = require("@mof-ivy/ivy-node-sdk");
const rxjs_1 = require("rxjs");
class IvySDKServiceBase {
    SDKConfig;
    sdkInstance;
    constructor(SDKConfig) {
        this.SDKConfig = SDKConfig;
        this.sdkInstance = new ivy_node_sdk_1.IvySDK(this.SDKConfig ?? {});
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
        return this.sdkInstance.subscribeReady().pipe((0, rxjs_1.filter)((ready) => !!ready));
    }
}
exports.IvySDKServiceBase = IvySDKServiceBase;
