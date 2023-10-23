import { BehaviorSubject } from "rxjs";
import { IStandardWsError } from "@mof-ivy/ivy-node-sdk/dist/core/services/base/ws.service";
import { IvySDKService } from "../../ivy-sdk/ivy-sdk.service";
export declare abstract class IvyScriptConfigServiceBase<ScriptConfigType = Record<string, any>> {
    protected readonly sdk: IvySDKService;
    protected readonly initialConfig: ScriptConfigType;
    protected readonly logger: (message: object | string, logKey: string, persist?: boolean) => Promise<boolean | IStandardWsError>;
    protected config: ScriptConfigType;
    protected readonly ready$: BehaviorSubject<boolean>;
    constructor(sdk: IvySDKService, initialConfig: ScriptConfigType);
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
    protected initConfig(): void;
    protected subscribeConfigUpdates(): void;
}
