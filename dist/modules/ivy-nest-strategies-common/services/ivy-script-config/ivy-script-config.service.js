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
exports.IvyScriptConfigService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const ivy_sdk_service_1 = require("../ivy-sdk/ivy-sdk.service");
const log_keys_const_1 = require("../../../../shared/constants/log-keys.const");
let IvyScriptConfigService = class IvyScriptConfigService {
    initialConfig;
    sdk;
    logger;
    config;
    ready$ = new rxjs_1.BehaviorSubject(false);
    constructor(initialConfig, sdk) {
        this.initialConfig = initialConfig;
        this.sdk = sdk;
        this.logger = this.sdk.instance.log.bind(this.sdk.instance);
        this.initConfig();
    }
    /**
     * Returns the last config snapshot.
     *
     * At each config change received by Ivy's services, this
     * snapshot gets updated, giving you each time the latest
     * config version available
     */
    get snap() {
        return this.config;
    }
    /**
     * Subscribe to the config service ready state.
     * A true value will be emitted once the service
     * has successfully initialized the script config.
     *
     * @returns Observable<boolean>
     */
    subscribeReady() {
        return this.ready$.asObservable();
    }
    initConfig() {
        this.subscribeConfigUpdates();
        this.sdk
            .subscribeReady()
            .pipe((0, rxjs_1.take)(1), (0, rxjs_1.switchMap)(() => this.sdk.instance.getConfig()), (0, rxjs_1.switchMap)((config) => {
            if (!config) {
                return this.sdk.instance.initConfig(this.initialConfig);
            }
            return (0, rxjs_1.of)(config);
        }), (0, rxjs_1.tap)((config) => {
            this.config = config;
            this.ready$.next(true);
        }), (0, rxjs_1.catchError)((e) => {
            this.logger(`Error initializing config: ${e.message || e.name}`, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptFatal, true);
            return rxjs_1.EMPTY;
        }))
            .subscribe();
    }
    subscribeConfigUpdates() {
        this.sdk.instance
            .subscribeScriptConfigChanges()
            .pipe((0, rxjs_1.map)((config) => {
            const prevConfig = structuredClone(this.config);
            let configDiff = {};
            if (!prevConfig) {
                configDiff = config;
                Object.keys(config).forEach((k) => (config[k] = `${k} (initial) -> ${config[k]}`));
            }
            else {
                Object.keys(prevConfig)
                    .filter((k) => JSON.stringify(prevConfig[k]) !== JSON.stringify(config[k]))
                    .forEach((k) => (configDiff[k] = `${prevConfig[k]} -> ${config[k]}`));
            }
            this.config = config;
            return configDiff;
        }), (0, rxjs_1.tap)((configDiff) => {
            this.logger(`Config change: ${JSON.stringify(configDiff, undefined, 2)}`, log_keys_const_1.IvyNestStrategiesCommonLogKeys.scriptInfo, true);
        }))
            .subscribe();
    }
};
IvyScriptConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("IVY_SCRIPT_INITIAL_CONFIG")),
    __metadata("design:paramtypes", [Object, ivy_sdk_service_1.IvySDKService])
], IvyScriptConfigService);
exports.IvyScriptConfigService = IvyScriptConfigService;
