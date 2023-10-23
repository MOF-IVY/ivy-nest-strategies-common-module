export interface IInputTypeConfig {
    inputType: string;
}
export interface IDoubleInputTypeConfig {
    inputTypeA: string;
    inputTypeB: string;
}
export interface IPeriodConfig {
    period: number;
}
export interface ILongShortPeriodConfig {
    longPeriod: number;
    shortPeriod: number;
}
export interface ABSIndicatorConfig extends IInputTypeConfig {
}
export interface ACOSIndicatorConfig extends IInputTypeConfig {
}
export interface ADDIndicatorConfig extends IDoubleInputTypeConfig {
}
export interface ADIndicatorConfig {
}
export interface ADOSCIndicatorConfig extends ILongShortPeriodConfig {
}
export interface ADXIndicatorConfig extends IPeriodConfig {
}
export interface ADXRIndicatorConfig extends IPeriodConfig {
}
export interface AOIndicatorConfig {
}
export interface APOIndicatorConfig extends IInputTypeConfig, ILongShortPeriodConfig {
}
export interface AROONIndicatorConfig extends IPeriodConfig {
}
export interface AROONOSCIndicatorConfig extends IPeriodConfig {
}
export interface ASINIndicatorConfig extends IInputTypeConfig {
}
export interface ATANIndicatorConfig extends IInputTypeConfig {
}
export interface ATRIndicatorConfig extends IPeriodConfig {
}
export interface AVGPRICEIndicatorConfig {
}
export interface BBANDSIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
    stddev: number;
}
export interface BOPIndicatorConfig {
}
export interface CCIIndicatorConfig extends IPeriodConfig {
}
export interface CEILIndicatorConfig extends IInputTypeConfig {
}
export interface CMOIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface COSIndicatorConfig extends IInputTypeConfig {
}
export interface COSHIndicatorConfig extends IInputTypeConfig {
}
export interface CROSSANYIndicatorConfig extends IDoubleInputTypeConfig {
}
export interface CROSSOVERIndicatorConfig extends IDoubleInputTypeConfig {
}
export interface CVIIndicatorConfig extends IPeriodConfig {
}
export interface DECAYIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface DEMAIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface DIIndicatorConfig extends IPeriodConfig {
}
export interface DIVIndicatorConfig extends IDoubleInputTypeConfig {
}
export interface DMIndicatorConfig extends IPeriodConfig {
}
export interface DPOIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface DXIndicatorConfig extends IPeriodConfig {
}
export interface EDECAYIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface EMAIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface EMVIndicatorConfig extends IInputTypeConfig {
}
export interface EXPIndicatorConfig extends IInputTypeConfig {
}
export interface FISHERIndicatorConfig {
}
export interface FLOORIndicatorConfig extends IInputTypeConfig {
}
export interface FOSCIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface HMAIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface KAMAIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface KVOIndicatorConfig extends ILongShortPeriodConfig {
}
export interface LAGIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface LINREGIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface LINREGINTERCEPTIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface LINREGSLOPEIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface LNIndicatorConfig extends IInputTypeConfig {
}
export interface LOG10IndicatorConfig extends IInputTypeConfig {
}
export interface MACDIndicatorConfig extends ILongShortPeriodConfig {
    signalPeriod: number;
}
export interface MARKETFIIndicatorConfig {
}
export interface MASSIndicatorConfig extends IPeriodConfig {
}
export interface MAXIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface MDIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface MEDPRICEIndicatorConfig {
}
export interface MFIIndicatorConfig extends IPeriodConfig {
}
export interface MINIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface MOMIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface MSWIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface MULIndicatorConfig extends IDoubleInputTypeConfig {
}
export interface NATRIndicatorConfig extends IPeriodConfig {
}
export interface NVIIndicatorConfig {
}
export interface OBVIndicatorConfig {
}
export interface PPOIndicatorConfig extends IInputTypeConfig, ILongShortPeriodConfig {
}
export interface PSARIndicatorConfig {
    accelerationFactorStep: number;
    accelerationFactorMaximum: number;
}
export interface PVIIndicatorConfig {
}
export interface QSTICKIndicatorConfig extends IPeriodConfig {
}
export interface ROCIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface ROCRIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface ROUNDIndicatorConfig extends IInputTypeConfig {
}
export interface RSIIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface SINIndicatorConfig extends IInputTypeConfig {
}
export interface SINHIndicatorConfig extends IInputTypeConfig {
}
export interface SMAIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface SQRTIndicatorConfig extends IInputTypeConfig {
}
export interface STDDEVIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface STDERRIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface STOCHIndicatorConfig {
    k_period: number;
    d_period: number;
    k_slowingPeriod: number;
}
export interface STOCHRSIIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface SUBIndicatorConfig extends IDoubleInputTypeConfig {
}
export interface SUMIndicatorConfig extends IDoubleInputTypeConfig, IPeriodConfig {
}
export interface TANIndicatorConfig extends IInputTypeConfig {
}
export interface TANHIndicatorConfig extends IInputTypeConfig {
}
export interface TEMAIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface TODEGIndicatorConfig extends IInputTypeConfig {
}
export interface TORADIndicatorConfig extends IInputTypeConfig {
}
export interface TRIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface TRIXIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface TRUNCIndicatorConfig extends IInputTypeConfig {
}
export interface TSFIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface TYPPRICEIndicatorConfig {
}
export interface ULTOSCIndicatorConfig extends ILongShortPeriodConfig {
    mediumPeriod: number;
}
export interface VARIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface VHFIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface VIDYAIndicatorConfig extends IInputTypeConfig, ILongShortPeriodConfig {
    alpha: number;
}
export interface VOLATILITYIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface VOSCIndicatorConfig extends IInputTypeConfig, ILongShortPeriodConfig {
}
export interface VWMAIndicatorConfig extends IPeriodConfig {
}
export interface WADIndicatorConfig {
}
export interface WCPRICEIndicatorConfig {
}
export interface WILDERSIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface WILLRIndicatorConfig extends IPeriodConfig {
}
export interface WMAIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
export interface ZLEMAIndicatorConfig extends IInputTypeConfig, IPeriodConfig {
}
