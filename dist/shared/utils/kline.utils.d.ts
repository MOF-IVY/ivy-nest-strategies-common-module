import { OHLCV } from "@mof-ivy/ivy-node-sdk";
export declare function previousHeikinashiIsGreen(history: OHLCV[]): boolean;
export declare function previousHeikinashiIsRed(history: OHLCV[]): boolean;
export declare function convertHistoryToHeikinashi(klines: OHLCV[]): OHLCV[];
