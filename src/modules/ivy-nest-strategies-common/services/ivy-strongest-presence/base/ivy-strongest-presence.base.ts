import {
  of,
  tap,
  take,
  filter,
  switchMap,
  combineLatest,
  BehaviorSubject,
} from "rxjs";

import { IPumpDumpEvent } from "@mof-ivy/ivy-node-sdk";
import { IStandardWsError } from "@mof-ivy/ivy-node-sdk/dist/core/services/base/ws.service";

import { IvyNestStrategiesCommonLogKeys } from "../../../../../shared/constants/log-keys.const";

import { IvySDKService } from "../../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../../ivy-script-config/ivy-script-config.service";
import { IIvyScriptInitialConfig } from "../../ivy-script-config/models/initial-script-config.model";
import { LogModes } from "../../../../../shared/enums/log-modes.enum";

export class IvyStrongestPresenceServiceBase {
  protected logMode = LogModes.verbose;
  protected longCandidates$ = new BehaviorSubject<string[]>([]);
  protected shortCandidates$ = new BehaviorSubject<string[]>([]);

  protected readonly ready$ = new BehaviorSubject(false);

  protected readonly logger: (
    message: object | string,
    logKey: string,
    persist?: boolean
  ) => Promise<boolean | IStandardWsError>;

  constructor(
    protected readonly sdk: IvySDKService,
    protected readonly config: IvyScriptConfigService<IIvyScriptInitialConfig>
  ) {
    this.logger = this.sdk.instance.log.bind(this.sdk.instance);
    this.setupStreamsOrBlock();
  }

  subscribeReady() {
    return this.ready$.asObservable();
  }

  subscribeLongCandidatesChanges() {
    return this.longCandidates$.asObservable();
  }

  subscribeShortCandidatesChanges() {
    return this.shortCandidates$.asObservable();
  }

  isInLongCandidates(sym: string): boolean {
    return !!this.longCandidates$.getValue().includes(sym);
  }

  isInShortCandidates(sym: string): boolean {
    return !!this.shortCandidates$.getValue().includes(sym);
  }

  protected async onPumpEvent(event: IPumpDumpEvent) {
    const { exchangeMarket, result } = event;
    if (exchangeMarket !== this.config.snap.exchangeMarket) return;

    if (
      !this.allRequiredTFsArePresent(
        result.map((i) => i.tf),
        this.config.snap.pumpTFs
      )
    )
      return;

    if (this.config.snap.pumpStrongestPresenceDisabled)
      this.checkSimpleLongCandidates(event);
    else this.checkStrongestPresenceLongCandidates(event);
  }

  protected async onDumpEvent(event: IPumpDumpEvent) {
    const { exchangeMarket, result } = event;
    if (exchangeMarket !== this.config.snap.exchangeMarket) return;

    if (
      !this.allRequiredTFsArePresent(
        result.map((i) => i.tf),
        this.config.snap.dumpTFs
      )
    )
      return;

    if (this.config.snap.dumpStrongestPresenceDisabled)
      this.checkSimpleShortCandidates(event);
    else this.checkStrongestPresenceShortCandidates(event);
  }

  protected checkStrongestPresenceLongCandidates(event: IPumpDumpEvent) {
    const rankings = this.getRequiredTFsRankings(
      this.config.snap.pumpTFs,
      event,
      this.config.snap.pumpingSymbolsPerTF
    );
    const distinctSymsInRankings = this.TFsRankingsToDistinctSymbols(rankings);
    const newCandidates = this.getStrongestPresenceNewCandidates(
      distinctSymsInRankings,
      rankings
    );

    if (
      this.candidatesListHasChanged(
        this.longCandidates$.getValue(),
        newCandidates
      ) &&
      this.logMode === LogModes.verbose
    ) {
      this.logger(
        newCandidates.toString(),
        IvyNestStrategiesCommonLogKeys.longCandidates,
        true
      );
    }

    this.longCandidates$.next(newCandidates);
  }

  private checkStrongestPresenceShortCandidates(event: IPumpDumpEvent) {
    const rankings = this.getRequiredTFsRankings(
      this.config.snap.dumpTFs,
      event,
      this.config.snap.dumpingSymbolsPerTF
    );
    const distinctSymsInRankings = this.TFsRankingsToDistinctSymbols(rankings);
    const newCandidates = this.getStrongestPresenceNewCandidates(
      distinctSymsInRankings,
      rankings
    );

    if (
      this.candidatesListHasChanged(
        this.shortCandidates$.getValue(),
        newCandidates
      ) &&
      this.logMode === LogModes.verbose
    ) {
      this.logger(
        newCandidates.toString(),
        IvyNestStrategiesCommonLogKeys.shortCandidates,
        true
      );
    }

    this.shortCandidates$.next(newCandidates);
  }

  protected getStrongestPresenceNewCandidates(
    distinctSymbols: string[],
    rankings: {
      tf: string;
      items: {
        k: string;
        v: number;
      }[];
    }[]
  ) {
    let newCandidates: string[] = [];
    distinctSymbols.forEach((sym) => {
      if (rankings.every((tf) => !!tf.items.find((i) => i.k.startsWith(sym)))) {
        newCandidates.push(sym);
      }
    });

    newCandidates = newCandidates.sort();
    return newCandidates;
  }

  protected async checkSimpleLongCandidates(event: IPumpDumpEvent) {
    const { exchangeMarket, result } = event;
    if (exchangeMarket !== this.config.snap.exchangeMarket) return;

    if (
      !this.allRequiredTFsArePresent(
        result.map((i) => i.tf),
        this.config.snap.pumpTFs
      )
    )
      return;

    const oldCandidates = this.longCandidates$.getValue();
    const newCandidates = this.TFsRankingsToDistinctSymbols(
      this.getRequiredTFsRankings(
        this.config.snap.pumpTFs,
        event,
        this.config.snap.pumpingSymbolsPerTF
      )
    );

    if (
      this.candidatesListHasChanged(oldCandidates, newCandidates) &&
      this.logMode === LogModes.verbose
    ) {
      this.logger(
        newCandidates,
        IvyNestStrategiesCommonLogKeys.longCandidates,
        true
      );
    }

    this.longCandidates$.next(newCandidates);
  }

  protected async checkSimpleShortCandidates(event: IPumpDumpEvent) {
    const { exchangeMarket, result } = event;
    if (exchangeMarket !== this.config.snap.exchangeMarket) return;

    if (
      !this.allRequiredTFsArePresent(
        result.map((i) => i.tf),
        this.config.snap.dumpTFs
      )
    )
      return;

    const oldCandidates = this.shortCandidates$.getValue();
    const newCandidates = this.TFsRankingsToDistinctSymbols(
      this.getRequiredTFsRankings(
        this.config.snap.dumpTFs,
        event,
        this.config.snap.dumpingSymbolsPerTF
      )
    );

    if (
      this.candidatesListHasChanged(oldCandidates, newCandidates) &&
      this.logMode === LogModes.verbose
    ) {
      this.logger(
        newCandidates,
        IvyNestStrategiesCommonLogKeys.shortCandidates,
        true
      );
    }

    this.shortCandidates$.next(newCandidates);
  }

  protected TFsRankingsToDistinctSymbols(
    newCandidatesRankings: {
      tf: string;
      items: {
        k: string;
        v: number;
      }[];
    }[]
  ) {
    return [
      ...new Set(
        newCandidatesRankings.flatMap((i) =>
          i.items.map((_) => _.k.split("~")[0])
        )
      ),
    ];
  }

  protected candidatesListHasChanged(
    oldCandidates: string[],
    newCandidates: string[]
  ) {
    return oldCandidates.toString() !== (newCandidates ?? []).toString();
  }

  protected getRequiredTFsRankings(
    requiredTFs: string[],
    event: IPumpDumpEvent,
    lookBackWindow: number
  ): {
    tf: string;
    items: {
      k: string;
      v: number;
    }[];
  }[] {
    return event.result
      .filter((i) => requiredTFs.includes(i.tf))
      .map((i) => {
        i.items = i.items.slice(0, lookBackWindow);
        return i;
      });
  }

  protected allRequiredTFsArePresent(
    eventTFs: string[],
    requiredTFs: string[]
  ) {
    if (!requiredTFs.every((tf) => eventTFs.includes(tf))) return false;
    return true;
  }

  protected setupStreamsOrBlock() {
    combineLatest([this.sdk.subscribeReady(), this.config.subscribeReady()])
      .pipe(
        filter(([sdk, config]) => !!sdk && !!config),
        take(1),
        switchMap(() =>
          this.config.snap.pumpTFs === null
            ? of()
            : this.sdk.instance.enablePumpStream({
                xm: this.config.snap.exchangeMarket,
                tfs: this.config.snap.dumpTFs,
              })
        ),
        filter((error) => {
          if (!!error) {
            this.logger(
              "Cannot enable PUMP stream",
              IvyNestStrategiesCommonLogKeys.scriptFatal,
              true
            );
            return false;
          }
          return true;
        }),
        switchMap(() =>
          this.config.snap.dumpTFs === null
            ? of()
            : this.sdk.instance.enableDumpStream({
                xm: this.config.snap.exchangeMarket,
                tfs: this.config.snap.dumpTFs,
              })
        ),
        filter((error) => {
          if (!!error) {
            this.logger(
              "Cannot enable DUMP stream",
              IvyNestStrategiesCommonLogKeys.scriptFatal,
              true
            );
            return false;
          }
          return true;
        }),
        tap(() =>
          this.config.snap.pumpTFs === null
            ? null
            : this.sdk.instance
                .subscribePumpStream()
                .pipe(tap((event) => this.onPumpEvent(event)))
                .subscribe()
        ),
        tap(() =>
          this.config.snap.dumpTFs === null
            ? null
            : this.sdk.instance
                .subscribeDumpStream()
                .pipe(tap((event) => this.onDumpEvent(event)))
                .subscribe()
        ),
        tap(() => this.ready$.next(true))
      )
      .subscribe();
  }
}
