import {
  tap,
  take,
  filter,
  switchMap,
  combineLatest,
  BehaviorSubject,
} from "rxjs";
import { Injectable } from "@nestjs/common";

import { IPumpDumpEvent } from "@mof-ivy/ivy-node-sdk";
import { IStandardWsError } from "@mof-ivy/ivy-node-sdk/dist/core/services/base/ws.service";

import { IvySDKService } from "../ivy-sdk/ivy-sdk.service";
import { IvyScriptConfigService } from "../ivy-script-config/ivy-script-config.service";
import { IvyNestStrategiesCommonLogKeys } from "../../../../shared/constants/log-keys.const";

@Injectable()
export class IvyStrongestPresenceService {
  private longCandidates$ = new BehaviorSubject<string[]>([]);
  private shortCandidates$ = new BehaviorSubject<string[]>([]);

  private readonly ready$ = new BehaviorSubject(false);

  private readonly logger: (
    message: object | string,
    logKey: string,
    persist?: boolean
  ) => Promise<boolean | IStandardWsError>;

  constructor(
    private readonly sdk: IvySDKService,
    private readonly config: IvyScriptConfigService
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

  private async onPumpEvent(event: IPumpDumpEvent) {
    const { exchangeMarket, result } = event;
    if (exchangeMarket !== this.config.snap.exchangeMarket) return;

    if (
      !this.allRequiredTFsArePresent(
        result.map((i) => i.tf),
        this.config.snap.pumpRankingTfs
      )
    )
      return;

    const rankings = this.getRequiredTFsRankings(
      this.config.snap.pumpRankingTfs,
      event,
      this.config.snap.pumpLookBackWindow
    );

    const distinctSymsInRankings = [
      ...new Set(
        rankings.flatMap((i) => i.items.map((_) => _.k.split("~")[0]))
      ),
    ];
    let newCandidates: string[] = [];
    distinctSymsInRankings.forEach((sym) => {
      if (rankings.every((tf) => !!tf.items.find((i) => i.k.startsWith(sym)))) {
        newCandidates.push(sym);
      }
    });

    newCandidates = newCandidates.sort();
    const stringCandidates = newCandidates.toString();

    if (
      !!stringCandidates &&
      this.longCandidates$.getValue().toString() !== stringCandidates
    ) {
      this.logger(
        newCandidates.toString(),
        IvyNestStrategiesCommonLogKeys.longCandidates,
        true
      );
    }

    this.longCandidates$.next(newCandidates);
  }

  private getRequiredTFsRankings(
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

  private allRequiredTFsArePresent(eventTFs: string[], requiredTFs: string[]) {
    if (!requiredTFs.every((tf) => eventTFs.includes(tf))) return false;
    return true;
  }

  private async onDumpEvent(event: IPumpDumpEvent) {
    const { exchangeMarket, result } = event;
    if (exchangeMarket !== this.config.snap.exchangeMarket) return;

    if (
      !this.allRequiredTFsArePresent(
        result.map((i) => i.tf),
        this.config.snap.dumpRankingTfs
      )
    )
      return;

    const rankings = this.getRequiredTFsRankings(
      this.config.snap.dumpRankingTfs,
      event,
      this.config.snap.dumpLookBackWindow
    );

    const distinctSymsInRankings = [
      ...new Set(
        rankings.flatMap((i) => i.items.map((_) => _.k.split("~")[0]))
      ),
    ];
    let newCandidates: string[] = [];
    distinctSymsInRankings.forEach((sym) => {
      if (rankings.every((tf) => !!tf.items.find((i) => i.k.startsWith(sym)))) {
        newCandidates.push(sym);
      }
    });

    newCandidates = newCandidates.sort();
    const stringCandidates = newCandidates.toString();

    if (
      !!stringCandidates &&
      this.shortCandidates$.getValue().toString() !== stringCandidates
    ) {
      this.logger(
        stringCandidates,
        IvyNestStrategiesCommonLogKeys.shortCandidates,
        true
      );
    }

    this.shortCandidates$.next(newCandidates);
  }

  private setupStreamsOrBlock() {
    combineLatest([this.sdk.subscribeReady(), this.config.subscribeReady()])
      .pipe(
        filter(([sdk, config]) => !!sdk && !!config),
        take(1),
        switchMap(() => {
          return this.sdk.instance.enablePumpStream({
            xm: this.config.snap.exchangeMarket,
            tfs: this.config.snap.pumpRankingTfs,
          });
        }),
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
          this.sdk.instance.enableDumpStream({
            xm: this.config.snap.exchangeMarket,
            tfs: this.config.snap.dumpRankingTfs,
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
          this.sdk.instance
            .subscribePumpStream()
            .pipe(tap((event) => this.onPumpEvent(event)))
            .subscribe()
        ),
        tap(() =>
          this.sdk.instance
            .subscribeDumpStream()
            .pipe(tap((event) => this.onDumpEvent(event)))
            .subscribe()
        ),
        tap(() => this.ready$.next(true))
      )
      .subscribe();
  }
}
