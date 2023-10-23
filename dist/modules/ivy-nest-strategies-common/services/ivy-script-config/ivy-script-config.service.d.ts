import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";
export declare class IvyScriptConfigService<ScriptConfigType = Record<string, any>> {
    private initialConfig;
    private readonly sdk;
    private readonly logger;
    private config;
    private readonly ready$;
    constructor(initialConfig: ScriptConfigType, sdk: IvySDKService);
    /**
     * Returns the last config snapshot.
     *
     * At each config change received by Ivy's services, this
     * snapshot gets updated, giving you each time the latest
     * config version available
     */
    get snap(): ScriptConfigType;
    /**
     * Subscribe to the config service ready state.
     * A true value will be emitted once the service
     * has successfully initialized the script config.
     *
     * @returns Observable<boolean>
     */
    subscribeReady(): import("rxjs").Observable<boolean>;
    private initConfig;
    private subscribeConfigUpdates;
}
