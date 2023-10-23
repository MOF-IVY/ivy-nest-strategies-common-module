"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyCommonIndicators = void 0;
var IvyCommonIndicators;
(function (IvyCommonIndicators) {
    /**
     * Vector Absolute Value
     */
    IvyCommonIndicators["ABS"] = "abs";
    /**
     * Vector Arccosine
     */
    IvyCommonIndicators["ACOS"] = "acos";
    /**
     * Accumulation/Distribution Line
     */
    IvyCommonIndicators["AD"] = "ad";
    /**
     * Vector Addition
     */
    IvyCommonIndicators["ADD"] = "add";
    /**
     * Accumulation/Distribution Oscillator
     */
    IvyCommonIndicators["ADOSC"] = "adosc";
    /**
     * Average Directional Movement Index
     */
    IvyCommonIndicators["ADX"] = "adx";
    /**
     * Average Directional Movement Rating
     */
    IvyCommonIndicators["ADXR"] = "adxr";
    /**
     * Awesome Oscillator
     */
    IvyCommonIndicators["AO"] = "ao";
    /**
     * Absolute Price Oscillator
     */
    IvyCommonIndicators["APO"] = "apo";
    /**
     * Aroon
     */
    IvyCommonIndicators["AROON"] = "aroon";
    /**
     * Aroon Oscillator
     */
    IvyCommonIndicators["AROONOSC"] = "aroonosc";
    /**
     * Vector Arcsine
     */
    IvyCommonIndicators["ASIN"] = "asin";
    /**
     * Vector Arctangent
     */
    IvyCommonIndicators["ATAN"] = "atan";
    /**
     * Average True Range
     */
    IvyCommonIndicators["ATR"] = "atr";
    /**
     * Average Price
     */
    IvyCommonIndicators["AVGPRICE"] = "avgprice";
    /**
     * Bollinger Bands
     */
    IvyCommonIndicators["BBANDS"] = "bbands";
    /**
     * Balance of Power
     */
    IvyCommonIndicators["BOP"] = "bop";
    /**
     * Commodity Channel Index
     */
    IvyCommonIndicators["CCI"] = "cci";
    /**
     * Vector Ceiling
     */
    IvyCommonIndicators["CEIL"] = "ceil";
    /**
     * Chande Momentum Oscillator
     */
    IvyCommonIndicators["CMO"] = "cmo";
    /**
     * Vector Cosine
     */
    IvyCommonIndicators["COS"] = "cos";
    /**
     * Vector Hyperbolic Cosine
     */
    IvyCommonIndicators["COSH"] = "cosh";
    /**
     * Crossany
     */
    IvyCommonIndicators["CROSSANY"] = "crossany";
    /**
     * Crossover
     */
    IvyCommonIndicators["CROSSOVER"] = "crossover";
    /**
     * Chaikins Volatility
     */
    IvyCommonIndicators["CVI"] = "cvi";
    /**
     * Linear Decay
     */
    IvyCommonIndicators["DECAY"] = "decay";
    /**
     * Double Exponential Moving Average
     */
    IvyCommonIndicators["DEMA"] = "dema";
    /**
     * Directional Indicator
     */
    IvyCommonIndicators["DI"] = "di";
    /**
     * Vector Division
     */
    IvyCommonIndicators["DIV"] = "div";
    /**
     * Directional Movement
     */
    IvyCommonIndicators["DM"] = "dm";
    /**
     * Detrended Price Oscillator
     */
    IvyCommonIndicators["DPO"] = "dpo";
    /**
     * Directional Movement Index
     */
    IvyCommonIndicators["DX"] = "dx";
    /**
     * Exponential Decay
     */
    IvyCommonIndicators["EDECAY"] = "edecay";
    /**
     * Exponential Moving Average
     */
    IvyCommonIndicators["EMA"] = "ema";
    /**
     * Ease of Movement
     */
    IvyCommonIndicators["EMV"] = "emv";
    /**
     * Vector Exponential
     */
    IvyCommonIndicators["EXP"] = "exp";
    /**
     * Fisher Transform
     */
    IvyCommonIndicators["FISHER"] = "fisher";
    /**
     * Vector Floor
     */
    IvyCommonIndicators["FLOOR"] = "floor";
    /**
     * Forecast Oscillator
     */
    IvyCommonIndicators["FOSC"] = "fosc";
    /**
     * Hull Moving Average
     */
    IvyCommonIndicators["HMA"] = "hma";
    /**
     * Kaufman Adaptive Moving Average
     */
    IvyCommonIndicators["KAMA"] = "kama";
    /**
     * Klinger Volume Oscillator
     */
    IvyCommonIndicators["KVO"] = "kvo";
    /**
     * Lag
     */
    IvyCommonIndicators["LAG"] = "lag";
    /**
     * Linear Regression
     */
    IvyCommonIndicators["LINREG"] = "linreg";
    /**
     * Linear Regression Intercept
     */
    IvyCommonIndicators["LINREGINTERCEPT"] = "linregintercept";
    /**
     * Linear Regression Slope
     */
    IvyCommonIndicators["LINREGSLOPE"] = "linregslope";
    /**
     * Vector Natural Log
     */
    IvyCommonIndicators["LN"] = "ln";
    /**
     * Vector Base-10 Log
     */
    IvyCommonIndicators["LOG10"] = "log10";
    /**
     * Moving Average Convergence/Divergence
     */
    IvyCommonIndicators["MACD"] = "macd";
    /**
     * Market Facilitaion Index
     */
    IvyCommonIndicators["MARKETFI"] = "marketfi";
    /**
     * Mass Index
     */
    IvyCommonIndicators["MASS"] = "mass";
    /**
     * Maximum In Period
     */
    IvyCommonIndicators["MAX"] = "max";
    /**
     * Mean Deviation Over Period
     */
    IvyCommonIndicators["MD"] = "md";
    /**
     * Median Price
     */
    IvyCommonIndicators["MEDPRICE"] = "medprice";
    /**
     * Money Flow Index
     */
    IvyCommonIndicators["MFI"] = "mfi";
    /**
     * Minimum in Period
     */
    IvyCommonIndicators["MIN"] = "min";
    /**
     * Momentum
     */
    IvyCommonIndicators["MOM"] = "mom";
    /**
     * Mesa Sine Wave
     */
    IvyCommonIndicators["MSW"] = "msw";
    /**
     * Vector Multiplication
     */
    IvyCommonIndicators["MUL"] = "mul";
    /**
     * Normalized Average True Range
     */
    IvyCommonIndicators["NATR"] = "natr";
    /**
     * Negative Volume Index
     */
    IvyCommonIndicators["NVI"] = "nvi";
    /**
     * On Balance Volume
     */
    IvyCommonIndicators["OBV"] = "obv";
    /**
     * Percentage Price Oscillator
     */
    IvyCommonIndicators["PPO"] = "ppo";
    /**
     * Parabolic SAR
     */
    IvyCommonIndicators["PSAR"] = "psar";
    /**
     * Positive Volume Index
     */
    IvyCommonIndicators["PVI"] = "pvi";
    /**
     * Qstick
     */
    IvyCommonIndicators["QSTICK"] = "qstick";
    /**
     * Rate of Change
     */
    IvyCommonIndicators["ROC"] = "roc";
    /**
     * Rate of Change Ratio
     */
    IvyCommonIndicators["ROCR"] = "rocr";
    /**
     * Vector Round
     */
    IvyCommonIndicators["ROUND"] = "round";
    /**
     * Relative Strength Index
     */
    IvyCommonIndicators["RSI"] = "rsi";
    /**
     * Vector Sin
     */
    IvyCommonIndicators["SIN"] = "sin";
    /**
     * Vector Hyperbolic Sin
     */
    IvyCommonIndicators["SINH"] = "sinh";
    /**
     * Simple Moving Average
     */
    IvyCommonIndicators["SMA"] = "sma";
    /**
     * Vector Square Root
     */
    IvyCommonIndicators["SQRT"] = "sqrt";
    /**
     * Standard Deviation Over Period
     */
    IvyCommonIndicators["STDDEV"] = "stddev";
    /**
     * Standard Error Over Period
     */
    IvyCommonIndicators["STDERR"] = "stderr";
    /**
     * Stochastic Oscillator
     */
    IvyCommonIndicators["STOCH"] = "stoch";
    /**
     * Stochastic RSI
     */
    IvyCommonIndicators["STOCHRSI"] = "stochrsi";
    /**
     * Vector Subtraction
     */
    IvyCommonIndicators["SUB"] = "sub";
    /**
     * Sum Over Period
     */
    IvyCommonIndicators["SUM"] = "sum";
    /**
     * Vector Tangent
     */
    IvyCommonIndicators["TAN"] = "tan";
    /**
     * Vector Hyperbolic Tangent
     */
    IvyCommonIndicators["TANH"] = "tanh";
    /**
     * Triple Exponential Moving Average
     */
    IvyCommonIndicators["TEMA"] = "tema";
    /**
     * Vector Degree Conversion
     */
    IvyCommonIndicators["TODEG"] = "todeg";
    /**
     * Vector Radian Conversion
     */
    IvyCommonIndicators["TORAD"] = "torad";
    /**
     * True Range
     */
    IvyCommonIndicators["TR"] = "tr";
    /**
     * Triangular Moving Average
     */
    IvyCommonIndicators["TRIMA"] = "trima";
    /**
     * Trix
     */
    IvyCommonIndicators["TRIX"] = "trix";
    /**
     * Vector Truncate
     */
    IvyCommonIndicators["TRUNC"] = "trunc";
    /**
     * Time Series Forecast
     */
    IvyCommonIndicators["TSF"] = "tsf";
    /**
     * Typical Price
     */
    IvyCommonIndicators["TYPPRICE"] = "typprice";
    /**
     * Ultimate Oscillator
     */
    IvyCommonIndicators["ULTOSC"] = "ultosc";
    /**
     * Variance Over Period
     */
    IvyCommonIndicators["VAR"] = "var";
    /**
     * Vertical Horizontal Filter
     */
    IvyCommonIndicators["VHF"] = "vhf";
    /**
     * Variable Index Dynamic Average
     */
    IvyCommonIndicators["VIDYA"] = "vidya";
    /**
     * Annualized Historical Volatility
     */
    IvyCommonIndicators["VOLATILITY"] = "volatility";
    /**
     * Volume Oscillator
     */
    IvyCommonIndicators["VOSC"] = "vosc";
    /**
     * Volume Weighted Moving Average
     */
    IvyCommonIndicators["VWMA"] = "vwma";
    /**
     * Williams Accumulation/Distribution
     */
    IvyCommonIndicators["WAD"] = "wad";
    /**
     * Weighted Close Price
     */
    IvyCommonIndicators["WCPRICE"] = "wcprice";
    /**
     * Wilders Smoothing
     */
    IvyCommonIndicators["WILDERS"] = "wilders";
    /**
     * Williams %R
     */
    IvyCommonIndicators["WILLR"] = "willr";
    /**
     * Weighted Moving Average
     */
    IvyCommonIndicators["WMA"] = "wma";
    /**
     * Zero-Lag Exponential Moving Average
     */
    IvyCommonIndicators["ZLEMA"] = "zlema";
})(IvyCommonIndicators = exports.IvyCommonIndicators || (exports.IvyCommonIndicators = {}));
