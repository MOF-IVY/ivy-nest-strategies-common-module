"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyKlinesUtils = void 0;
const heikinashi_1 = __importDefault(require("heikinashi"));
const ivy_node_sdk_1 = require("@mof-ivy/ivy-node-sdk");
class IvyKlinesUtils {
    static previousHeikinashiIsGreen(history) {
        const HK = IvyKlinesUtils.convertHistoryToHeikinashi(history);
        const closePrice = HK.at(-2)[ivy_node_sdk_1.OHLCVPositions.CLOSE];
        const openPrice = HK.at(-2)[ivy_node_sdk_1.OHLCVPositions.OPEN];
        console.log(`[HK_GREEN]\t HK CP: ${closePrice};\t OP: ${openPrice}`);
        return closePrice > openPrice;
    }
    static previousHeikinashiIsRed(history) {
        const HK = IvyKlinesUtils.convertHistoryToHeikinashi(history);
        const closePrice = HK.at(-2)[ivy_node_sdk_1.OHLCVPositions.CLOSE];
        const openPrice = HK.at(-2)[ivy_node_sdk_1.OHLCVPositions.OPEN];
        console.log(`[HK_RED]\t HK CP: ${closePrice};\t OP: ${openPrice}`);
        return closePrice < openPrice;
    }
    static convertHistoryToHeikinashi(klines) {
        return (klines = (0, heikinashi_1.default)(klines.map((k) => ({
            time: k[0],
            open: k[1],
            high: k[2],
            low: k[3],
            close: k[4],
            volume: k[5],
        })), {
            overWrite: false,
            formatNumbers: false,
            decimals: 4,
            forceExactDecimals: false, //force the number of significant digits or reduce them if the number is high
        }).map((k) => [k.time, k.open, k.high, k.low, k.close, k.volume]));
    }
}
exports.IvyKlinesUtils = IvyKlinesUtils;
