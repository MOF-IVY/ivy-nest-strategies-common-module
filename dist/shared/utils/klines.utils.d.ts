import { OHLCV } from "@mof-ivy/ivy-node-sdk";
export declare class IvyKlinesUtils {
    static previousHeikinashiIsGreen(history: OHLCV[]): boolean;
    static previousHeikinashiIsRed(history: OHLCV[]): boolean;
    static convertHistoryToHeikinashi(klines: OHLCV[]): OHLCV[];
}
