import { ExchangesMarkets } from "@mof-ivy/ivy-node-sdk";

export interface IIvyScriptInitialConfig {
  /**
   * The main working time frames
   *
   * These time frames are used to filter the IK and FK realtime updates coming
   * from the SSM stream.
   *
   * Set all the time frames for which you want to receive updates.
   */
  mainTfs: string[];

  /**
   * The leverage to use on orders
   */
  leverage: number;

  /**
   * If true, will do paper orders
   */
  isPaperMode: boolean;

  /**
   * The min budget to use during
   * an operation opening.
   *
   * Refer to the documentation for more info on the "minBuyBudget" functioning
   */
  minBuyBudget: number;

  /**
   * The maximum total operations that the script can do.
   *
   * If NULL is disabled
   */
  maxTotalOps: number | null;

  /**
   * The maximum concurrently active operations supported by the script
   */
  maxConcurrentOps: number | null;

  /**
   * The exchange market on which the script operates
   *
   * This will influence the following services configurations:
   * - SSM
   * - Trader
   * - Script
   */
  exchangeMarket: ExchangesMarkets;

  /**
   * How many time frames you want to receive from the pump monitor
   *
   * If NULL it disables the pump monitor feature entirely
   */
  pumpTFs: string[];

  /**
   * How many pumping symbols you want on each time frame.
   * No more than 20 items are supported at the moment.
   */
  pumpingSymbolsPerTF: number;

  /**
   * By default the strongest presence service, works in strongest presence
   * mode. This means that if you specify multiple time frames in the
   * pumpRankingTfs, in order to become a long candidate, a symbol must be
   * present even in ALL the other time frames specified on the pumpRankingTFs
   *
   * If you want to use multiple time frames, but without the constraint of
   * the strongest presence, set this value to true.
   *
   * @defaults to false
   */
  pumpStrongestPresenceDisabled: boolean;

  /**
   * How many time frames you want to receive from the dump monitor
   *
   * If NULL it disables the dump monitor feature entirely
   */
  dumpTFs: string[];

  /**
   * How many dumping symbols you want on each time.
   * No more than 20 items are supported at the moment.
   */
  dumpingSymbolsPerTF: number;

  /**
   * By default the strongest presence service, works in strongest presence
   * mode. This means that if you specify multiple time frames in the
   * dumpRankingTfs, in order to become a short candidate, a symbol must be
   * present even in ALL the other time frames specified on the dumpRankingTFs
   *
   * If you want to use multiple time frames, but without the constraint of
   * the strongest presence, set this value to true.
   *
   * @defaults to false
   */
  dumpStrongestPresenceDisabled: boolean;

  /**
   * The take profit percentage, it must be a positive number
   *
   * If NULL is disabled
   */
  takeProfitPercentage: number;
}
