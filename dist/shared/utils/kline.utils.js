"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHistoryToHeikinashi = exports.previousHeikinashiIsRed = exports.previousHeikinashiIsGreen = void 0;
const heikinashi = __importStar(require("heikinashi"));
const ivy_node_sdk_1 = require("@mof-ivy/ivy-node-sdk");
function previousHeikinashiIsGreen(history) {
    const HK = convertHistoryToHeikinashi(history);
    return HK.at(-2)[ivy_node_sdk_1.OHLCVPositions.CLOSE] > HK.at(-2)[ivy_node_sdk_1.OHLCVPositions.OPEN];
}
exports.previousHeikinashiIsGreen = previousHeikinashiIsGreen;
function previousHeikinashiIsRed(history) {
    const HK = convertHistoryToHeikinashi(history);
    return HK.at(-2)[ivy_node_sdk_1.OHLCVPositions.CLOSE] < HK.at(-2)[ivy_node_sdk_1.OHLCVPositions.OPEN];
}
exports.previousHeikinashiIsRed = previousHeikinashiIsRed;
function convertHistoryToHeikinashi(klines) {
    return (klines = heikinashi(klines.map((k) => ({
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
exports.convertHistoryToHeikinashi = convertHistoryToHeikinashi;
