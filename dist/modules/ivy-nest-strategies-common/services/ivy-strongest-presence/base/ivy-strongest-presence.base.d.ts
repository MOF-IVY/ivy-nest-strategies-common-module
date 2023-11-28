import { BehaviorSubject } from "rxjs";
import { IPumpDumpEvent } from "@mof-ivy/ivy-node-sdk";
import { IStandardWsError } from "@mof-ivy/ivy-node-sdk/dist/core/services/base/ws.service";
import { IvySDKService } from "../../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../../ivy-script-config/ivy-script-config.service";
import { IIvyScriptInitialConfig } from "../../ivy-script-config/models/initial-script-config.model";
import { LogModes } from "../../../../../shared/enums/log-modes.enum";
export declare class IvyStrongestPresenceServiceBase {
    protected readonly sdk: IvySDKService;
    protected readonly config: IvyScriptConfigService<IIvyScriptInitialConfig>;
    protected logMode: LogModes;
    protected longCandidates$: BehaviorSubject<string[]>;
    protected shortCandidates$: BehaviorSubject<string[]>;
    protected readonly ready$: BehaviorSubject<boolean>;
    protected readonly logger: (message: object | string, logKey: string, persist?: boolean, logToConsole?: boolean) => Promise<boolean | IStandardWsError>;
    constructor(sdk: IvySDKService, config: IvyScriptConfigService<IIvyScriptInitialConfig>);
    set loggingMode(mode: LogModes);
    subscribeReady(): import("rxjs").Observable<boolean>;
    subscribeLongCandidatesChanges(): import("rxjs").Observable<string[]>;
    subscribeShortCandidatesChanges(): import("rxjs").Observable<string[]>;
    isInLongCandidates(sym: string): boolean;
    isInShortCandidates(sym: string): boolean;
    protected onPumpEvent(event: IPumpDumpEvent): Promise<void>;
    protected onDumpEvent(event: IPumpDumpEvent): Promise<void>;
    protected checkStrongestPresenceLongCandidates(event: IPumpDumpEvent): void;
    private checkStrongestPresenceShortCandidates;
    protected getStrongestPresenceNewCandidates(distinctSymbols: string[], rankings: {
        tf: string;
        items: {
            k: string;
            v: number;
        }[];
    }[]): string[];
    protected checkSimpleLongCandidates(event: IPumpDumpEvent): Promise<void>;
    protected checkSimpleShortCandidates(event: IPumpDumpEvent): Promise<void>;
    protected TFsRankingsToDistinctSymbols(newCandidatesRankings: {
        tf: string;
        items: {
            k: string;
            v: number;
        }[];
    }[]): string[];
    protected candidatesListHasChanged(oldCandidates: string[], newCandidates: string[]): boolean;
    protected getRequiredTFsRankings(requiredTFs: string[], event: IPumpDumpEvent, lookBackWindow: number): {
        tf: string;
        items: {
            k: string;
            v: number;
        }[];
    }[];
    protected allRequiredTFsArePresent(eventTFs: string[], requiredTFs: string[]): boolean;
    protected setupStreamsOrBlock(): void;
}
