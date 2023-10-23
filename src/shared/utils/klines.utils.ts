import heikinashi from "heikinashi";
import { OHLCV, OHLCVPositions } from "@mof-ivy/ivy-node-sdk";

export class IvyKlinesUtils {
  static previousHeikinashiIsGreen(history: OHLCV[]): boolean {
    const HK = IvyKlinesUtils.convertHistoryToHeikinashi(history);
    return HK.at(-2)[OHLCVPositions.CLOSE] > HK.at(-2)[OHLCVPositions.OPEN];
  }

  static previousHeikinashiIsRed(history: OHLCV[]): boolean {
    const HK = IvyKlinesUtils.convertHistoryToHeikinashi(history);
    return HK.at(-2)[OHLCVPositions.CLOSE] < HK.at(-2)[OHLCVPositions.OPEN];
  }

  static convertHistoryToHeikinashi(klines: OHLCV[]): OHLCV[] {
    return (klines = heikinashi(
      klines.map((k) => ({
        time: k[0],
        open: k[1],
        high: k[2],
        low: k[3],
        close: k[4],
        volume: k[5],
      })),
      {
        overWrite: false, //overwrites the original data or create a new array
        formatNumbers: false, //formats the numbers and reduces their significant digits based on the values
        decimals: 4, //number of significant digits
        forceExactDecimals: false, //force the number of significant digits or reduce them if the number is high
      }
    ).map((k) => [k.time, k.open, k.high, k.low, k.close, k.volume]));
  }
}
