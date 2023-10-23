import { BehaviorSubject } from "rxjs";
import { IPumpDumpEvent } from "@mof-ivy/ivy-node-sdk";
import { IStandardWsError } from "@mof-ivy/ivy-node-sdk/dist/core/services/base/ws.service";
import { IvySDKService } from "../../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../../ivy-script-config/ivy-script-config.service";
export declare class IvyStrongestPresenceServiceBase {
    protected readonly sdk: IvySDKService;
    protected readonly config: IvyScriptConfigService;
    protected longCandidates$: BehaviorSubject<string[]>;
    protected shortCandidates$: BehaviorSubject<string[]>;
    protected readonly ready$: BehaviorSubject<boolean>;
    protected readonly logger: (message: object | string, logKey: string, persist?: boolean) => Promise<boolean | IStandardWsError>;
    constructor(sdk: IvySDKService, config: IvyScriptConfigService);
    subscribeReady(): import("rxjs").Observable<boolean>;
    subscribeLongCandidatesChanges(): import("rxjs").Observable<string[]>;
    subscribeShortCandidatesChanges(): import("rxjs").Observable<string[]>;
    isInLongCandidates(sym: string): boolean;
    isInShortCandidates(sym: string): boolean;
    protected onPumpEvent(event: IPumpDumpEvent): Promise<void>;
    protected getRequiredTFsRankings(requiredTFs: string[], event: IPumpDumpEvent, lookBackWindow: number): {
        tf: string;
        items: {
            k: string;
            v: number;
        }[];
    }[];
    protected allRequiredTFsArePresent(eventTFs: string[], requiredTFs: string[]): boolean;
    protected onDumpEvent(event: IPumpDumpEvent): Promise<void>;
    protected setupStreamsOrBlock(): void;
}
