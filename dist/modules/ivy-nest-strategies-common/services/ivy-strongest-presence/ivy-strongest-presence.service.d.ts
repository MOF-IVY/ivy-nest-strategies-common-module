import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../ivy-script-config/ivy-script-config.service";
export declare class IvyStrongestPresenceService {
    private readonly sdk;
    private readonly config;
    private longCandidates$;
    private shortCandidates$;
    private readonly ready$;
    private readonly logger;
    constructor(sdk: IvySDKService, config: IvyScriptConfigService);
    subscribeReady(): import("rxjs").Observable<boolean>;
    subscribeLongCandidatesChanges(): import("rxjs").Observable<string[]>;
    subscribeShortCandidatesChanges(): import("rxjs").Observable<string[]>;
    isInLongCandidates(sym: string): boolean;
    isInShortCandidates(sym: string): boolean;
    private onPumpEvent;
    private getRequiredTFsRankings;
    private allRequiredTFsArePresent;
    private onDumpEvent;
    private setupStreamsOrBlock;
}
