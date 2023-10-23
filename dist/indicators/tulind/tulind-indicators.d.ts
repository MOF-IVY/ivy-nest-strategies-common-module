import { IvyTechnicalIndicators } from "../indicators.enum";
import { OHLCV } from "@mof-ivy/ivy-node-sdk";
import { TulindIndicatorWrapper } from "./tulind-indicator-wrapper.model";
export declare class ABS extends TulindIndicatorWrapper<{
    abs: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ABS;
    constructor(input: number[]);
    run(): Promise<{
        abs: number[];
    }>;
}
export declare class ACOS extends TulindIndicatorWrapper<{
    acos: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ACOS;
    constructor(input: number[]);
    run(): Promise<{
        acos: number[];
    }>;
}
export declare class AD extends TulindIndicatorWrapper<{
    ad: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.AD;
    constructor(input: OHLCV[]);
    run(): Promise<{
        ad: number[];
    }>;
}
export declare class ADD extends TulindIndicatorWrapper<{
    add: number[];
}> {
    readonly inputA: number[];
    readonly inputB: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ADD;
    constructor(inputA: number[], inputB: number[]);
    run(): Promise<{
        add: number[];
    }>;
}
export declare class ADOSC extends TulindIndicatorWrapper<{
    adosc: number[];
}> {
    readonly input: OHLCV[];
    readonly conf: {
        shortPeriod: number;
        longPeriod: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ADOSC;
    constructor(input: OHLCV[], conf: {
        shortPeriod: number;
        longPeriod: number;
    });
    run(): Promise<{
        adosc: number[];
    }>;
}
export declare class ADX extends TulindIndicatorWrapper<{
    adx: number[];
}> {
    readonly input: OHLCV[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ADX;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        adx: number[];
    }>;
}
export declare class ADXR extends TulindIndicatorWrapper<{
    adxr: number[];
}> {
    readonly input: OHLCV[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ADXR;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        adxr: number[];
    }>;
}
export declare class AO extends TulindIndicatorWrapper<{
    ao: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.AO;
    constructor(input: OHLCV[]);
    run(): Promise<{
        ao: number[];
    }>;
}
export declare class APO extends TulindIndicatorWrapper<{
    apo: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.APO;
    constructor(input: number[], conf: {
        shortPeriod: number;
        longPeriod: number;
    });
    run(): Promise<{
        apo: number[];
    }>;
}
export declare class AROON extends TulindIndicatorWrapper<{
    aroon_up: number[];
    aroon_down: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.AROON;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        aroon_down: number[];
        aroon_up: number[];
    }>;
}
export declare class AROONOSC extends TulindIndicatorWrapper<{
    aroonosc: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.AROONOSC;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        aroonosc: number[];
    }>;
}
export declare class ASIN extends TulindIndicatorWrapper<{
    asin: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ASIN;
    constructor(input: number[]);
    run(): Promise<{
        asin: number[];
    }>;
}
export declare class ATAN extends TulindIndicatorWrapper<{
    atan: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ATAN;
    constructor(input: number[]);
    run(): Promise<{
        atan: number[];
    }>;
}
export declare class ATR extends TulindIndicatorWrapper<{
    atr: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ATR;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        atr: number[];
    }>;
}
export declare class AVGPRICE extends TulindIndicatorWrapper<{
    avgprice: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.AVGPRICE;
    constructor(input: OHLCV[]);
    run(): Promise<{
        avgprice: number[];
    }>;
}
export declare class BBANDS extends TulindIndicatorWrapper<{
    bbands_lower: number[];
    bbands_middle: number[];
    bbands_upper: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.BBANDS;
    constructor(input: number[], conf: {
        period: number;
        stddev: number;
    });
    run(): Promise<{
        bbands_lower: number[];
        bbands_middle: number[];
        bbands_upper: number[];
    }>;
}
export declare class BOP extends TulindIndicatorWrapper<{
    bop: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.BOP;
    constructor(input: OHLCV[]);
    run(): Promise<{
        bop: number[];
    }>;
}
export declare class CCI extends TulindIndicatorWrapper<{
    cci: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.CCI;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        cci: number[];
    }>;
}
export declare class CEIL extends TulindIndicatorWrapper<{
    ceil: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.CEIL;
    constructor(input: number[]);
    run(): Promise<{
        ceil: number[];
    }>;
}
export declare class CMO extends TulindIndicatorWrapper<{
    cmo: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.CMO;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        cmo: number[];
    }>;
}
export declare class COS extends TulindIndicatorWrapper<{
    cos: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.COS;
    constructor(input: number[]);
    run(): Promise<{
        cos: number[];
    }>;
}
export declare class COSH extends TulindIndicatorWrapper<{
    cosh: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.COSH;
    constructor(input: number[]);
    run(): Promise<{
        cosh: number[];
    }>;
}
export declare class CROSSANY extends TulindIndicatorWrapper<{
    crossany: number[];
}> {
    readonly inputA: number[];
    readonly inputB: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.CROSSANY;
    constructor(inputA: number[], inputB: number[]);
    run(): Promise<{
        crossany: number[];
    }>;
}
export declare class CROSSOVER extends TulindIndicatorWrapper<{
    crossover: number[];
}> {
    readonly inputA: number[];
    readonly inputB: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.CROSSOVER;
    constructor(inputA: number[], inputB: number[]);
    run(): Promise<{
        crossover: number[];
    }>;
}
export declare class CVI extends TulindIndicatorWrapper<{
    cvi: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.CVI;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        cvi: number[];
    }>;
}
export declare class DECAY extends TulindIndicatorWrapper<{
    decay: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.DECAY;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        decay: number[];
    }>;
}
export declare class DEMA extends TulindIndicatorWrapper<{
    dema: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.DEMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        dema: number[];
    }>;
}
export declare class DI extends TulindIndicatorWrapper<{
    plus_di: number[];
    minus_di: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.DI;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        plus_di: number[];
        minus_di: number[];
    }>;
}
export declare class DIV extends TulindIndicatorWrapper<{
    div: number[];
}> {
    readonly inputA: number[];
    readonly inputB: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.DIV;
    constructor(inputA: number[], inputB: number[]);
    run(): Promise<{
        div: number[];
    }>;
}
export declare class DM extends TulindIndicatorWrapper<{
    dm_plus: number[];
    dm_minus: number[];
}> {
    readonly input: OHLCV[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.DM;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        dm_plus: number[];
        dm_minus: number[];
    }>;
}
export declare class DPO extends TulindIndicatorWrapper<{
    dpo: number[];
}> {
    readonly input: number[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.DPO;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        dpo: number[];
    }>;
}
export declare class DX extends TulindIndicatorWrapper<{
    dx: number[];
}> {
    readonly input: OHLCV[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.DX;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        dx: number[];
    }>;
}
export declare class EDECAY extends TulindIndicatorWrapper<{
    edecay: number[];
}> {
    readonly input: number[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.EDECAY;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        edecay: number[];
    }>;
}
export declare class EMA extends TulindIndicatorWrapper<{
    ema: number[];
}> {
    readonly input: number[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.EMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        ema: number[];
    }>;
}
export declare class EMV extends TulindIndicatorWrapper<{
    emv: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.EMV;
    constructor(input: OHLCV[]);
    run(): Promise<{
        emv: number[];
    }>;
}
export declare class EXP extends TulindIndicatorWrapper<{
    exp: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.EXP;
    constructor(input: number[]);
    run(): Promise<{
        exp: number[];
    }>;
}
export declare class FISHER extends TulindIndicatorWrapper<{
    fisher: number[];
    fisher_signal: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.FISHER;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        fisher: number[];
        fisher_signal: number[];
    }>;
}
export declare class FLOOR extends TulindIndicatorWrapper<{
    floor: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.FLOOR;
    constructor(input: number[]);
    run(): Promise<{
        floor: number[];
    }>;
}
export declare class FOSC extends TulindIndicatorWrapper<{
    fosc: number[];
}> {
    readonly input: number[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.FOSC;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        fosc: number[];
    }>;
}
export declare class HMA extends TulindIndicatorWrapper<{
    hma: number[];
}> {
    readonly input: number[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.HMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        hma: number[];
    }>;
}
export declare class KAMA extends TulindIndicatorWrapper<{
    kama: number[];
}> {
    readonly input: number[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.KAMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        kama: number[];
    }>;
}
export declare class KVO extends TulindIndicatorWrapper<{
    kvo: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.KVO;
    constructor(input: OHLCV[], conf: {
        shortPeriod: number;
        longPeriod: number;
    });
    run(): Promise<{
        kvo: number[];
    }>;
}
export declare class LAG extends TulindIndicatorWrapper<{
    lag: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.LAG;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        lag: number[];
    }>;
}
export declare class LINREG extends TulindIndicatorWrapper<{
    linreg: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.LINREG;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        linreg: number[];
    }>;
}
export declare class LINREGINTERCEPT extends TulindIndicatorWrapper<{
    linregintercept: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.LINREGINTERCEPT;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        linregintercept: number[];
    }>;
}
export declare class LINREGSLOPE extends TulindIndicatorWrapper<{
    linregslope: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.LINREGSLOPE;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        linregslope: number[];
    }>;
}
export declare class LN extends TulindIndicatorWrapper<{
    ln: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.LN;
    constructor(input: number[]);
    run(): Promise<{
        ln: number[];
    }>;
}
export declare class LOG10 extends TulindIndicatorWrapper<{
    log10: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.LOG10;
    constructor(input: number[]);
    run(): Promise<{
        log10: number[];
    }>;
}
export declare class MACD extends TulindIndicatorWrapper<{
    macd: number[];
    macd_signal: number[];
    macd_histogram: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MACD;
    constructor(input: number[], conf: {
        shortPeriod: number;
        longPeriod: number;
        signalPeriod: number;
    });
    run(): Promise<{
        macd: number[];
        macd_signal: number[];
        macd_histogram: number[];
    }>;
}
export declare class MARKETFI extends TulindIndicatorWrapper<{
    marketfi: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MARKETFI;
    constructor(input: OHLCV[]);
    run(): Promise<{
        marketfi: number[];
    }>;
}
export declare class MASS extends TulindIndicatorWrapper<{
    mass: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MASS;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        mass: number[];
    }>;
}
export declare class MAX extends TulindIndicatorWrapper<{
    max: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MAX;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        max: number[];
    }>;
}
export declare class MD extends TulindIndicatorWrapper<{
    md: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MD;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        md: number[];
    }>;
}
export declare class MEDPRICE extends TulindIndicatorWrapper<{
    medprice: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MEDPRICE;
    constructor(input: OHLCV[]);
    run(): Promise<{
        medprice: number[];
    }>;
}
export declare class MFI extends TulindIndicatorWrapper<{
    mfi: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MFI;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        mfi: number[];
    }>;
}
export declare class MIN extends TulindIndicatorWrapper<{
    min: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MIN;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        min: number[];
    }>;
}
export declare class MOM extends TulindIndicatorWrapper<{
    mom: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MOM;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        mom: number[];
    }>;
}
export declare class MSW extends TulindIndicatorWrapper<{
    msw_sine: number[];
    msw_lead: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MSW;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        msw_sine: number[];
        msw_lead: number[];
    }>;
}
export declare class MUL extends TulindIndicatorWrapper<{
    mul: number[];
}> {
    readonly inputA: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.MUL;
    constructor(inputA: number[], inputB: number[]);
    run(): Promise<{
        mul: number[];
    }>;
}
export declare class NATR extends TulindIndicatorWrapper<{
    natr: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.NATR;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        natr: number[];
    }>;
}
export declare class NVI extends TulindIndicatorWrapper<{
    nvi: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.NVI;
    constructor(input: OHLCV[]);
    run(): Promise<{
        nvi: number[];
    }>;
}
export declare class OBV extends TulindIndicatorWrapper<{
    obv: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.OBV;
    constructor(input: OHLCV[]);
    run(): Promise<{
        obv: number[];
    }>;
}
export declare class PPO extends TulindIndicatorWrapper<{
    ppo: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.PPO;
    constructor(input: number[], conf: {
        shortPeriod: number;
        longPeriod: number;
    });
    run(): Promise<{
        ppo: number[];
    }>;
}
export declare class PSAR extends TulindIndicatorWrapper<{
    psar: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.PSAR;
    constructor(input: OHLCV[], conf: {
        accelerationFactorStep: number;
        accelerationFactorMaximum: number;
    });
    run(): Promise<{
        psar: number[];
    }>;
}
export declare class PVI extends TulindIndicatorWrapper<{
    pvi: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.PVI;
    constructor(input: OHLCV[]);
    run(): Promise<{
        pvi: number[];
    }>;
}
export declare class QSTICK extends TulindIndicatorWrapper<{
    qstick: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.QSTICK;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        qstick: number[];
    }>;
}
export declare class ROC extends TulindIndicatorWrapper<{
    roc: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ROC;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        roc: number[];
    }>;
}
export declare class ROCR extends TulindIndicatorWrapper<{
    rocr: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ROCR;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        rocr: number[];
    }>;
}
export declare class ROUND extends TulindIndicatorWrapper<{
    round: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ROUND;
    constructor(input: number[]);
    run(): Promise<{
        round: number[];
    }>;
}
export declare class RSI extends TulindIndicatorWrapper<{
    rsi: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.RSI;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        rsi: number[];
    }>;
}
export declare class SIN extends TulindIndicatorWrapper<{
    sin: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.SIN;
    constructor(input: number[]);
    run(): Promise<{
        sin: number[];
    }>;
}
export declare class SINH extends TulindIndicatorWrapper<{
    sinh: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.SINH;
    constructor(input: number[]);
    run(): Promise<{
        sinh: number[];
    }>;
}
export declare class SMA extends TulindIndicatorWrapper<{
    sma: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.SMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        sma: number[];
    }>;
}
export declare class SQRT extends TulindIndicatorWrapper<{
    sqrt: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.SQRT;
    constructor(input: number[]);
    run(): Promise<{
        sqrt: number[];
    }>;
}
export declare class STDDEV extends TulindIndicatorWrapper<{
    stddev: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.STDDEV;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        stddev: number[];
    }>;
}
export declare class STDERR extends TulindIndicatorWrapper<{
    stderr: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.STDERR;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        stderr: number[];
    }>;
}
export declare class STOCH extends TulindIndicatorWrapper<{
    stoch_k: number[];
    stoch_d: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.STOCH;
    constructor(input: OHLCV[], conf: {
        k_period: number;
        k_slowingPeriod: number;
        d_period: number;
    });
    run(): Promise<{
        stoch_k: number[];
        stoch_d: number[];
    }>;
}
export declare class STOCHRSI extends TulindIndicatorWrapper<{
    stochrsi: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.STOCHRSI;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        stochrsi: number[];
    }>;
}
export declare class SUB extends TulindIndicatorWrapper<{
    sub: number[];
}> {
    readonly inputA: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.SUB;
    constructor(inputA: number[], inputB: number[]);
    run(): Promise<{
        sub: number[];
    }>;
}
export declare class SUM extends TulindIndicatorWrapper<{
    sum: number[];
}> {
    readonly inputA: number[];
    readonly inputB: number[];
    readonly conf: {
        period: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.SUM;
    constructor(inputA: number[], inputB: number[], conf: {
        period: number;
    });
    run(): Promise<{
        sum: number[];
    }>;
}
export declare class TAN extends TulindIndicatorWrapper<{
    tan: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TAN;
    constructor(input: number[]);
    run(): Promise<{
        tan: number[];
    }>;
}
export declare class TANH extends TulindIndicatorWrapper<{
    tanh: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TANH;
    constructor(input: number[]);
    run(): Promise<{
        tanh: number[];
    }>;
}
export declare class TEMA extends TulindIndicatorWrapper<{
    tema: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TEMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        tema: number[];
    }>;
}
export declare class TODEG extends TulindIndicatorWrapper<{
    todeg: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TODEG;
    constructor(input: number[]);
    run(): Promise<{
        todeg: number[];
    }>;
}
export declare class TORAD extends TulindIndicatorWrapper<{
    torad: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TORAD;
    constructor(input: number[]);
    run(): Promise<{
        torad: number[];
    }>;
}
export declare class TR extends TulindIndicatorWrapper<{
    tr: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TR;
    constructor(input: OHLCV[]);
    run(): Promise<{
        tr: number[];
    }>;
}
export declare class TRIMA extends TulindIndicatorWrapper<{
    trima: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TRIMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        trima: number[];
    }>;
}
export declare class TRIX extends TulindIndicatorWrapper<{
    trix: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TRIX;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        trix: number[];
    }>;
}
export declare class TRUNC extends TulindIndicatorWrapper<{
    trunc: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TRUNC;
    constructor(input: number[]);
    run(): Promise<{
        trunc: number[];
    }>;
}
export declare class TSF extends TulindIndicatorWrapper<{
    tsf: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TSF;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        tsf: number[];
    }>;
}
export declare class TYPPRICE extends TulindIndicatorWrapper<{
    typprice: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.TYPPRICE;
    constructor(input: OHLCV[]);
    run(): Promise<{
        typprice: number[];
    }>;
}
export declare class ULTOSC extends TulindIndicatorWrapper<{
    ultosc: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ULTOSC;
    constructor(input: OHLCV[], conf: {
        shortPeriod: number;
        mediumPeriod: number;
        longPeriod: number;
    });
    run(): Promise<{
        ultosc: number[];
    }>;
}
export declare class VAR extends TulindIndicatorWrapper<{
    var: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.VAR;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        var: number[];
    }>;
}
export declare class VHF extends TulindIndicatorWrapper<{
    vhf: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.VHF;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        vhf: number[];
    }>;
}
export declare class VIDYA extends TulindIndicatorWrapper<{
    vidya: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.VIDYA;
    constructor(input: number[], conf: {
        shortPeriod: number;
        longPeriod: number;
        alpha: number;
    });
    run(): Promise<{
        vidya: number[];
    }>;
}
export declare class VOLATILITY extends TulindIndicatorWrapper<{
    volatility: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.VOLATILITY;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        volatility: number[];
    }>;
}
export declare class VOSC extends TulindIndicatorWrapper<{
    vosc: number[];
}> {
    readonly input: number[];
    readonly conf: {
        shortPeriod: number;
        longPeriod: number;
    };
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.VOSC;
    constructor(input: number[], conf: {
        shortPeriod: number;
        longPeriod: number;
    });
    run(): Promise<{
        vosc: number[];
    }>;
}
export declare class VWMA extends TulindIndicatorWrapper<{
    vwma: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.VWMA;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        vwma: number[];
    }>;
}
export declare class WAD extends TulindIndicatorWrapper<{
    wad: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.WAD;
    constructor(input: OHLCV[]);
    run(): Promise<{
        wad: number[];
    }>;
}
export declare class WCPRICE extends TulindIndicatorWrapper<{
    wcprice: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.WCPRICE;
    constructor(input: OHLCV[]);
    run(): Promise<{
        wcprice: number[];
    }>;
}
export declare class WILDERS extends TulindIndicatorWrapper<{
    wilders: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.WILDERS;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        wilders: number[];
    }>;
}
export declare class WILLR extends TulindIndicatorWrapper<{
    willr: number[];
}> {
    readonly input: OHLCV[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.WILLR;
    constructor(input: OHLCV[], conf: {
        period: number;
    });
    run(): Promise<{
        willr: number[];
    }>;
}
export declare class WMA extends TulindIndicatorWrapper<{
    wma: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.WMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        wma: number[];
    }>;
}
export declare class ZLEMA extends TulindIndicatorWrapper<{
    zlema: number[];
}> {
    readonly input: number[];
    protected readonly tulindIndicatorName = IvyTechnicalIndicators.ZLEMA;
    constructor(input: number[], conf: {
        period: number;
    });
    run(): Promise<{
        zlema: number[];
    }>;
}
