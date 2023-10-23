"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvySDKService = void 0;
const common_1 = require("@nestjs/common");
const ivy_node_sdk_1 = require("@mof-ivy/ivy-node-sdk");
const rxjs_1 = require("rxjs");
let IvySDKService = class IvySDKService {
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
};
IvySDKService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("IVY_SCRIPT_INITIAL_CONFIG")),
    __metadata("design:paramtypes", [Object])
], IvySDKService);
exports.IvySDKService = IvySDKService;
