"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MARKETFI = exports.MACD = exports.LOG10 = exports.LN = exports.LINREGSLOPE = exports.LINREGINTERCEPT = exports.LINREG = exports.LAG = exports.KVO = exports.KAMA = exports.HMA = exports.FOSC = exports.FLOOR = exports.FISHER = exports.EXP = exports.EMV = exports.EMA = exports.EDECAY = exports.DX = exports.DPO = exports.DM = exports.DIV = exports.DI = exports.DEMA = exports.DECAY = exports.CVI = exports.CROSSOVER = exports.CROSSANY = exports.COSH = exports.COS = exports.CMO = exports.CEIL = exports.CCI = exports.BOP = exports.BBANDS = exports.AVGPRICE = exports.ATR = exports.ATAN = exports.ASIN = exports.AROONOSC = exports.AROON = exports.APO = exports.AO = exports.ADXR = exports.ADX = exports.ADOSC = exports.ADD = exports.AD = exports.ACOS = exports.ABS = void 0;
exports.WCPRICE = exports.WAD = exports.VWMA = exports.VOSC = exports.VOLATILITY = exports.VIDYA = exports.VHF = exports.VAR = exports.ULTOSC = exports.TYPPRICE = exports.TSF = exports.TRUNC = exports.TRIX = exports.TRIMA = exports.TR = exports.TORAD = exports.TODEG = exports.TEMA = exports.TANH = exports.TAN = exports.SUM = exports.SUB = exports.STOCHRSI = exports.STOCH = exports.STDERR = exports.STDDEV = exports.SQRT = exports.SMA = exports.SINH = exports.SIN = exports.RSI = exports.ROUND = exports.ROCR = exports.ROC = exports.QSTICK = exports.PVI = exports.PSAR = exports.PPO = exports.OBV = exports.NVI = exports.NATR = exports.MUL = exports.MSW = exports.MOM = exports.MIN = exports.MFI = exports.MEDPRICE = exports.MD = exports.MAX = exports.MASS = void 0;
exports.ZLEMA = exports.WMA = exports.WILLR = exports.WILDERS = void 0;
const indicators_enum_1 = require("../indicators.enum");
const ivy_node_sdk_1 = require("@mof-ivy/ivy-node-sdk");
const tulind_indicator_wrapper_model_1 = require("./tulind-indicator-wrapper.model");
class ABS extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ABS;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { abs: result[0] };
    }
}
exports.ABS = ABS;
class ACOS extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ACOS;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { acos: result[0] };
    }
}
exports.ACOS = ACOS;
class AD extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.AD;
    constructor(input) {
        super([
            input.map((k) => k[1]),
            input.map((k) => k[2]),
            input.map((k) => k[3]),
            input.map((k) => k[4]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { ad: result[0] };
    }
}
exports.AD = AD;
class ADD extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    inputA;
    inputB;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ADD;
    constructor(inputA, inputB) {
        super([inputA, inputB], []);
        this.inputA = inputA;
        this.inputB = inputB;
    }
    async run() {
        const result = await this.runInternal();
        return { add: result[0] };
    }
}
exports.ADD = ADD;
class ADOSC extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ADOSC;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], [conf.shortPeriod, conf.longPeriod]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.ADOSC = ADOSC;
class ADX extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ADX;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.ADX = ADX;
class ADXR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ADXR;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.ADXR = ADXR;
class AO extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.AO;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.AO = AO;
class APO extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.APO;
    constructor(input, conf) {
        super([input], [conf.shortPeriod, conf.longPeriod]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.APO = APO;
class AROON extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.AROON;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { aroon_down: result[0], aroon_up: result[1] };
    }
}
exports.AROON = AROON;
class AROONOSC extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.AROONOSC;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.AROONOSC = AROONOSC;
class ASIN extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ASIN;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.ASIN = ASIN;
class ATAN extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ATAN;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.ATAN = ATAN;
class ATR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ATR;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.ATR = ATR;
class AVGPRICE extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.AVGPRICE;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.OPEN]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.AVGPRICE = AVGPRICE;
class BBANDS extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.BBANDS;
    constructor(input, conf) {
        super([input], [conf.period, conf.stddev]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            bbands_lower: result[0],
            bbands_middle: result[1],
            bbands_upper: result[2],
        };
    }
}
exports.BBANDS = BBANDS;
class BOP extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.BOP;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.OPEN]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.BOP = BOP;
class CCI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.CCI;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.CCI = CCI;
class CEIL extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.CEIL;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.CEIL = CEIL;
class CMO extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.CMO;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.CMO = CMO;
class COS extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.COS;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.COS = COS;
class COSH extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.COSH;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.COSH = COSH;
class CROSSANY extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    inputA;
    inputB;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.CROSSANY;
    constructor(inputA, inputB) {
        super([inputA, inputB], []);
        this.inputA = inputA;
        this.inputB = inputB;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.CROSSANY = CROSSANY;
class CROSSOVER extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    inputA;
    inputB;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.CROSSOVER;
    constructor(inputA, inputB) {
        super([inputA, inputB], []);
        this.inputA = inputA;
        this.inputB = inputB;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.CROSSOVER = CROSSOVER;
class CVI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.CVI;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.CVI = CVI;
class DECAY extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.DECAY;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.DECAY = DECAY;
class DEMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.DEMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.DEMA = DEMA;
class DI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.DI;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { plus_di: result[0], minus_di: result[1] };
    }
}
exports.DI = DI;
class DIV extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    inputA;
    inputB;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.DIV;
    constructor(inputA, inputB) {
        super([inputA, inputB], []);
        this.inputA = inputA;
        this.inputB = inputB;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.DIV = DIV;
class DM extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.DM;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { dm_plus: result[0], dm_minus: result[1] };
    }
}
exports.DM = DM;
class DPO extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.DPO;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.DPO = DPO;
class DX extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.DX;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.DX = DX;
class EDECAY extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.EDECAY;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.EDECAY = EDECAY;
class EMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.EMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.EMA = EMA;
class EMV extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.EMV;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.EMV = EMV;
class EXP extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.EXP;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.EXP = EXP;
class FISHER extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.FISHER;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { fisher: result[0], fisher_signal: result[1] };
    }
}
exports.FISHER = FISHER;
class FLOOR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.FLOOR;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.FLOOR = FLOOR;
class FOSC extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.FOSC;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.FOSC = FOSC;
class HMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.HMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.HMA = HMA;
class KAMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.KAMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.KAMA = KAMA;
class KVO extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.KVO;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], [conf.shortPeriod, conf.longPeriod]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.KVO = KVO;
class LAG extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.LAG;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.LAG = LAG;
class LINREG extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.LINREG;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.LINREG = LINREG;
class LINREGINTERCEPT extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.LINREGINTERCEPT;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.LINREGINTERCEPT = LINREGINTERCEPT;
class LINREGSLOPE extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.LINREGSLOPE;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.LINREGSLOPE = LINREGSLOPE;
class LN extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.LN;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.LN = LN;
class LOG10 extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.LOG10;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return { [this.tulindIndicatorName]: result[0] };
    }
}
exports.LOG10 = LOG10;
class MACD extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MACD;
    constructor(input, conf) {
        super([input], [+conf.shortPeriod, +conf.longPeriod, +conf.signalPeriod]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            macd: result[0],
            macd_signal: result[1],
            macd_histogram: result[2],
        };
    }
}
exports.MACD = MACD;
class MARKETFI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MARKETFI;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MARKETFI = MARKETFI;
class MASS extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MASS;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MASS = MASS;
class MAX extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MAX;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MAX = MAX;
class MD extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MD;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MD = MD;
class MEDPRICE extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MEDPRICE;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MEDPRICE = MEDPRICE;
class MFI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MFI;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MFI = MFI;
class MIN extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MIN;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MIN = MIN;
class MOM extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MOM;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MOM = MOM;
class MSW extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MSW;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            msw_sine: result[0],
            msw_lead: result[1],
        };
    }
}
exports.MSW = MSW;
class MUL extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    inputA;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.MUL;
    constructor(inputA, inputB) {
        super([inputA, inputB], []);
        this.inputA = inputA;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.MUL = MUL;
class NATR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.NATR;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.NATR = NATR;
class NVI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.NVI;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.NVI = NVI;
class OBV extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.OBV;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.OBV = OBV;
class PPO extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.PPO;
    constructor(input, conf) {
        super([input], [conf.shortPeriod, conf.longPeriod]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.PPO = PPO;
class PSAR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.PSAR;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
        ], [conf.accelerationFactorStep, conf.accelerationFactorMaximum]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.PSAR = PSAR;
class PVI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.PVI;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.PVI = PVI;
class QSTICK extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.QSTICK;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.OPEN]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.QSTICK = QSTICK;
class ROC extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ROC;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.ROC = ROC;
class ROCR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ROCR;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.ROCR = ROCR;
class ROUND extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ROUND;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.ROUND = ROUND;
class RSI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.RSI;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.RSI = RSI;
class SIN extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.SIN;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.SIN = SIN;
class SINH extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.SINH;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.SINH = SINH;
class SMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.SMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.SMA = SMA;
class SQRT extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.SQRT;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.SQRT = SQRT;
class STDDEV extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.STDDEV;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.STDDEV = STDDEV;
class STDERR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.STDERR;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.STDERR = STDERR;
class STOCH extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.STOCH;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.k_period, conf.k_slowingPeriod, conf.d_period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            stoch_k: result[0],
            stoch_d: result[1],
        };
    }
}
exports.STOCH = STOCH;
class STOCHRSI extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.STOCHRSI;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.STOCHRSI = STOCHRSI;
class SUB extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    inputA;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.SUB;
    constructor(inputA, inputB) {
        super([inputA, inputB], []);
        this.inputA = inputA;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.SUB = SUB;
class SUM extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    inputA;
    inputB;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.SUM;
    constructor(inputA, inputB, conf) {
        super([inputA, inputB], [conf.period]);
        this.inputA = inputA;
        this.inputB = inputB;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.SUM = SUM;
class TAN extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TAN;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TAN = TAN;
class TANH extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TANH;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TANH = TANH;
class TEMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TEMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TEMA = TEMA;
class TODEG extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TODEG;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TODEG = TODEG;
class TORAD extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TORAD;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TORAD = TORAD;
class TR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TR;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TR = TR;
class TRIMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TRIMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TRIMA = TRIMA;
class TRIX extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TRIX;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TRIX = TRIX;
class TRUNC extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TRUNC;
    constructor(input) {
        super([input], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TRUNC = TRUNC;
class TSF extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TSF;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TSF = TSF;
class TYPPRICE extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.TYPPRICE;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.TYPPRICE = TYPPRICE;
class ULTOSC extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ULTOSC;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.shortPeriod, conf.mediumPeriod, conf.longPeriod]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.ULTOSC = ULTOSC;
class VAR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.VAR;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.VAR = VAR;
class VHF extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.VHF;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.VHF = VHF;
class VIDYA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.VIDYA;
    constructor(input, conf) {
        super([input], [conf.shortPeriod, conf.longPeriod, conf.alpha]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.VIDYA = VIDYA;
class VOLATILITY extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.VOLATILITY;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.VOLATILITY = VOLATILITY;
class VOSC extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    conf;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.VOSC;
    constructor(input, conf) {
        super([input], [conf.shortPeriod, conf.longPeriod]);
        this.input = input;
        this.conf = conf;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.VOSC = VOSC;
class VWMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.VWMA;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.VOLUME]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.VWMA = VWMA;
class WAD extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.WAD;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.WAD = WAD;
class WCPRICE extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.WCPRICE;
    constructor(input) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], []);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.WCPRICE = WCPRICE;
class WILDERS extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.WILDERS;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.WILDERS = WILDERS;
class WILLR extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.WILLR;
    constructor(input, conf) {
        super([
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.HIGH]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.LOW]),
            input.map((k) => k[ivy_node_sdk_1.OHLCVPositions.CLOSE]),
        ], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.WILLR = WILLR;
class WMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.WMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.WMA = WMA;
class ZLEMA extends tulind_indicator_wrapper_model_1.TulindIndicatorWrapper {
    input;
    tulindIndicatorName = indicators_enum_1.IvyTechnicalIndicators.ZLEMA;
    constructor(input, conf) {
        super([input], [conf.period]);
        this.input = input;
    }
    async run() {
        const result = await this.runInternal();
        return {
            [this.tulindIndicatorName]: result[0],
        };
    }
}
exports.ZLEMA = ZLEMA;
