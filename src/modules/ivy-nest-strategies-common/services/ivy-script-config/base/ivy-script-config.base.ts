import {
  of,
  tap,
  map,
  take,
  EMPTY,
  switchMap,
  catchError,
  BehaviorSubject,
} from "rxjs";
import { Inject } from "@nestjs/common";

import { IStandardWsError } from "@mof-ivy/ivy-node-sdk/dist/core/services/base/ws.service";

import { IvySDKService } from "../../ivy-sdk/ivy-sdk.service";
import { IIvyScriptInitialConfig } from "../models/initial-script-config.model";
import { IvyNestStrategiesCommonLogKeys } from "../../../../../shared/constants/log-keys.const";

export abstract class IvyScriptConfigServiceBase<
  ScriptConfigType = IIvyScriptInitialConfig
> {
  protected readonly logger: (
    message: object | string,
    logKey: string,
    persist?: boolean
  ) => Promise<boolean | IStandardWsError>;

  protected config!: ScriptConfigType;
  protected readonly ready$ = new BehaviorSubject(false);

  constructor(
    protected readonly sdk: IvySDKService,
    protected readonly initialConfig: ScriptConfigType
  ) {
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

  protected initConfig() {
    this.subscribeConfigUpdates();
    this.sdk
      .subscribeReady()
      .pipe(
        take(1),
        switchMap(() => this.sdk.instance.getConfig()),
        switchMap((config) => {
          if (!config) {
            return this.sdk.instance.initConfig(this.initialConfig);
          }
          return of(config);
        }),
        tap((config: ScriptConfigType) => {
          this.config = config;
          this.ready$.next(true);
        }),
        catchError((e) => {
          this.logger(
            `Error initializing config: ${e.message || e.name}`,
            IvyNestStrategiesCommonLogKeys.scriptFatal,
            true
          );
          return EMPTY;
        })
      )
      .subscribe();
  }

  protected subscribeConfigUpdates() {
    this.sdk.instance
      .subscribeScriptConfigChanges()
      .pipe(
        map((config: ScriptConfigType) => {
          const prevConfig = structuredClone(this.config);
          let configDiff = {};
          if (!prevConfig) {
            configDiff = config;
            Object.keys(config).forEach(
              (k) => (config[k] = `${k} (initial) -> ${config[k]}`)
            );
          } else {
            Object.keys(prevConfig)
              .filter(
                (k) =>
                  JSON.stringify(prevConfig[k]) !== JSON.stringify(config[k])
              )
              .forEach(
                (k) => (configDiff[k] = `${prevConfig[k]} -> ${config[k]}`)
              );
          }

          this.config = config;
          return configDiff;
        }),
        tap((configDiff) => {
          this.logger(
            `Config change: ${JSON.stringify(configDiff, undefined, 2)}`,
            IvyNestStrategiesCommonLogKeys.scriptInfo,
            true
          );
        })
      )
      .subscribe();
  }
}
