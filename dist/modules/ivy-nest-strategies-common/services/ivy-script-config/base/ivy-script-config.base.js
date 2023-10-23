"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyScriptConfigServiceBase = void 0;
const rxjs_1 = require("rxjs");
const log_keys_const_1 = require("../../../../../shared/constants/log-keys.const");
class IvyScriptConfigServiceBase {
    sdk;
    initialConfig;
    logger;
    config;
    ready$ = new rxjs_1.BehaviorSubject(false);
    constructor(sdk, initialConfig) {
        this.sdk = sdk;
        this.initialConfig = initialConfig;
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
}
exports.IvyScriptConfigServiceBase = IvyScriptConfigServiceBase;
