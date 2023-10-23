import { IvyTechnicalIndicators } from "../indicators.enum";
import { OHLCV, OHLCVPositions } from "@mof-ivy/ivy-node-sdk";
import { TulindIndicatorWrapper } from "./tulind-indicator-wrapper.model";

export class ABS extends TulindIndicatorWrapper<{ abs: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ABS;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { abs: result[0] };
  }
}

export class ACOS extends TulindIndicatorWrapper<{ acos: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ACOS;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { acos: result[0] };
  }
}

export class AD extends TulindIndicatorWrapper<{ ad: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.AD;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[1]),
        input.map((k) => k[2]),
        input.map((k) => k[3]),
        input.map((k) => k[4]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return { ad: result[0] };
  }
}

export class ADD extends TulindIndicatorWrapper<{ add: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ADD;

  constructor(readonly inputA: number[], readonly inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return { add: result[0] };
  }
}

export class ADOSC extends TulindIndicatorWrapper<{ adosc: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ADOSC;

  constructor(
    readonly input: OHLCV[],
    readonly conf: { shortPeriod: number; longPeriod: number }
  ) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      [conf.shortPeriod, conf.longPeriod]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class ADX extends TulindIndicatorWrapper<{ adx: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ADX;

  constructor(readonly input: OHLCV[], readonly conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class ADXR extends TulindIndicatorWrapper<{ adxr: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ADXR;

  constructor(readonly input: OHLCV[], readonly conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class AO extends TulindIndicatorWrapper<{ ao: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.AO;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class APO extends TulindIndicatorWrapper<{ apo: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.APO;

  constructor(
    readonly input: number[],
    conf: { shortPeriod: number; longPeriod: number }
  ) {
    super([input], [conf.shortPeriod, conf.longPeriod]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class AROON extends TulindIndicatorWrapper<{
  aroon_up: number[];
  aroon_down: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.AROON;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { aroon_down: result[0], aroon_up: result[1] };
  }
}

export class AROONOSC extends TulindIndicatorWrapper<{ aroonosc: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.AROONOSC;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class ASIN extends TulindIndicatorWrapper<{ asin: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ASIN;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class ATAN extends TulindIndicatorWrapper<{ atan: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ATAN;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class ATR extends TulindIndicatorWrapper<{ atr: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ATR;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class AVGPRICE extends TulindIndicatorWrapper<{ avgprice: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.AVGPRICE;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.OPEN]),
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class BBANDS extends TulindIndicatorWrapper<{
  bbands_lower: number[];
  bbands_middle: number[];
  bbands_upper: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.BBANDS;

  constructor(
    readonly input: number[],
    conf: { period: number; stddev: number }
  ) {
    super([input], [conf.period, conf.stddev]);
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

export class BOP extends TulindIndicatorWrapper<{ bop: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.BOP;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.OPEN]),
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CCI extends TulindIndicatorWrapper<{ cci: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.CCI;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CEIL extends TulindIndicatorWrapper<{ ceil: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.CEIL;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CMO extends TulindIndicatorWrapper<{ cmo: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.CMO;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class COS extends TulindIndicatorWrapper<{ cos: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.COS;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class COSH extends TulindIndicatorWrapper<{ cosh: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.COSH;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CROSSANY extends TulindIndicatorWrapper<{ crossany: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.CROSSANY;

  constructor(readonly inputA: number[], readonly inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CROSSOVER extends TulindIndicatorWrapper<{ crossover: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.CROSSOVER;

  constructor(readonly inputA: number[], readonly inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CVI extends TulindIndicatorWrapper<{ cvi: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.CVI;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class DECAY extends TulindIndicatorWrapper<{ decay: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.DECAY;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class DEMA extends TulindIndicatorWrapper<{ dema: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.DEMA;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class DI extends TulindIndicatorWrapper<{
  plus_di: number[];
  minus_di: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.DI;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { plus_di: result[0], minus_di: result[1] };
  }
}

export class DIV extends TulindIndicatorWrapper<{ div: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.DIV;

  constructor(readonly inputA: number[], readonly inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class DM extends TulindIndicatorWrapper<{
  dm_plus: number[];
  dm_minus: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.DM;

  constructor(readonly input: OHLCV[], readonly conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { dm_plus: result[0], dm_minus: result[1] };
  }
}

export class DPO extends TulindIndicatorWrapper<{ dpo: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.DPO;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class DX extends TulindIndicatorWrapper<{ dx: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.DX;

  constructor(readonly input: OHLCV[], readonly conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class EDECAY extends TulindIndicatorWrapper<{ edecay: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.EDECAY;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class EMA extends TulindIndicatorWrapper<{ ema: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.EMA;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class EMV extends TulindIndicatorWrapper<{ emv: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.EMV;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class EXP extends TulindIndicatorWrapper<{ exp: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.EXP;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class FISHER extends TulindIndicatorWrapper<{
  fisher: number[];
  fisher_signal: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.FISHER;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { fisher: result[0], fisher_signal: result[1] };
  }
}

export class FLOOR extends TulindIndicatorWrapper<{ floor: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.FLOOR;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class FOSC extends TulindIndicatorWrapper<{ fosc: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.FOSC;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class HMA extends TulindIndicatorWrapper<{ hma: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.HMA;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class KAMA extends TulindIndicatorWrapper<{ kama: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.KAMA;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class KVO extends TulindIndicatorWrapper<{ kvo: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.KVO;

  constructor(
    readonly input: OHLCV[],
    conf: { shortPeriod: number; longPeriod: number }
  ) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      [conf.shortPeriod, conf.longPeriod]
    );
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LAG extends TulindIndicatorWrapper<{ lag: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.LAG;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LINREG extends TulindIndicatorWrapper<{ linreg: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.LINREG;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LINREGINTERCEPT extends TulindIndicatorWrapper<{
  linregintercept: number[];
}> {
  protected readonly tulindIndicatorName =
    IvyTechnicalIndicators.LINREGINTERCEPT;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LINREGSLOPE extends TulindIndicatorWrapper<{
  linregslope: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.LINREGSLOPE;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LN extends TulindIndicatorWrapper<{ ln: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.LN;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LOG10 extends TulindIndicatorWrapper<{ log10: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.LOG10;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class MACD extends TulindIndicatorWrapper<{
  macd: number[];
  macd_signal: number[];
  macd_histogram: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MACD;

  constructor(
    readonly input: number[],
    conf: { shortPeriod: number; longPeriod: number; signalPeriod: number }
  ) {
    super([input], [+conf.shortPeriod, +conf.longPeriod, +conf.signalPeriod]);
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

export class MARKETFI extends TulindIndicatorWrapper<{ marketfi: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MARKETFI;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class MASS extends TulindIndicatorWrapper<{ mass: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MASS;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class MAX extends TulindIndicatorWrapper<{ max: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MAX;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class MD extends TulindIndicatorWrapper<{ md: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MD;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class MEDPRICE extends TulindIndicatorWrapper<{ medprice: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MEDPRICE;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class MFI extends TulindIndicatorWrapper<{ mfi: number[] }> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MFI;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class MIN extends TulindIndicatorWrapper<{
  min: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MIN;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class MOM extends TulindIndicatorWrapper<{
  mom: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MOM;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class MSW extends TulindIndicatorWrapper<{
  msw_sine: number[];
  msw_lead: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MSW;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      msw_sine: result[0],
      msw_lead: result[1],
    };
  }
}

export class MUL extends TulindIndicatorWrapper<{
  mul: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.MUL;

  constructor(readonly inputA: number[], inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class NATR extends TulindIndicatorWrapper<{
  natr: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.NATR;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class NVI extends TulindIndicatorWrapper<{
  nvi: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.NVI;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.CLOSE]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class OBV extends TulindIndicatorWrapper<{
  obv: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.OBV;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.CLOSE]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class PPO extends TulindIndicatorWrapper<{
  ppo: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.PPO;

  constructor(
    readonly input: number[],
    conf: { shortPeriod: number; longPeriod: number }
  ) {
    super([input], [conf.shortPeriod, conf.longPeriod]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class PSAR extends TulindIndicatorWrapper<{
  psar: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.PSAR;

  constructor(
    readonly input: OHLCV[],
    conf: { accelerationFactorStep: number; accelerationFactorMaximum: number }
  ) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
      ],
      [conf.accelerationFactorStep, conf.accelerationFactorMaximum]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class PVI extends TulindIndicatorWrapper<{
  pvi: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.PVI;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.CLOSE]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class QSTICK extends TulindIndicatorWrapper<{
  qstick: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.QSTICK;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.OPEN]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class ROC extends TulindIndicatorWrapper<{
  roc: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ROC;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class ROCR extends TulindIndicatorWrapper<{
  rocr: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ROCR;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class ROUND extends TulindIndicatorWrapper<{
  round: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ROUND;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class RSI extends TulindIndicatorWrapper<{
  rsi: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.RSI;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class SIN extends TulindIndicatorWrapper<{
  sin: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.SIN;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class SINH extends TulindIndicatorWrapper<{
  sinh: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.SINH;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class SMA extends TulindIndicatorWrapper<{
  sma: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.SMA;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class SQRT extends TulindIndicatorWrapper<{
  sqrt: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.SQRT;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class STDDEV extends TulindIndicatorWrapper<{
  stddev: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.STDDEV;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class STDERR extends TulindIndicatorWrapper<{
  stderr: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.STDERR;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class STOCH extends TulindIndicatorWrapper<{
  stoch_k: number[];
  stoch_d: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.STOCH;

  constructor(
    readonly input: OHLCV[],
    conf: { k_period: number; k_slowingPeriod: number; d_period: number }
  ) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.k_period, conf.k_slowingPeriod, conf.d_period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      stoch_k: result[0],
      stoch_d: result[1],
    };
  }
}

export class STOCHRSI extends TulindIndicatorWrapper<{
  stochrsi: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.STOCHRSI;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class SUB extends TulindIndicatorWrapper<{
  sub: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.SUB;

  constructor(readonly inputA: number[], inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class SUM extends TulindIndicatorWrapper<{
  sum: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.SUM;

  constructor(
    readonly inputA: number[],
    readonly inputB: number[],
    readonly conf: { period: number }
  ) {
    super([inputA, inputB], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TAN extends TulindIndicatorWrapper<{
  tan: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TAN;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TANH extends TulindIndicatorWrapper<{
  tanh: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TANH;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TEMA extends TulindIndicatorWrapper<{
  tema: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TEMA;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TODEG extends TulindIndicatorWrapper<{
  todeg: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TODEG;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TORAD extends TulindIndicatorWrapper<{
  torad: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TORAD;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TR extends TulindIndicatorWrapper<{
  tr: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TR;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TRIMA extends TulindIndicatorWrapper<{
  trima: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TRIMA;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TRIX extends TulindIndicatorWrapper<{
  trix: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TRIX;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TRUNC extends TulindIndicatorWrapper<{
  trunc: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TRUNC;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TSF extends TulindIndicatorWrapper<{
  tsf: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TSF;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class TYPPRICE extends TulindIndicatorWrapper<{
  typprice: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.TYPPRICE;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class ULTOSC extends TulindIndicatorWrapper<{
  ultosc: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ULTOSC;

  constructor(
    readonly input: OHLCV[],
    conf: { shortPeriod: number; mediumPeriod: number; longPeriod: number }
  ) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.shortPeriod, conf.mediumPeriod, conf.longPeriod]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class VAR extends TulindIndicatorWrapper<{
  var: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.VAR;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class VHF extends TulindIndicatorWrapper<{
  vhf: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.VHF;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class VIDYA extends TulindIndicatorWrapper<{
  vidya: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.VIDYA;

  constructor(
    readonly input: number[],
    conf: { shortPeriod: number; longPeriod: number; alpha: number }
  ) {
    super([input], [conf.shortPeriod, conf.longPeriod, conf.alpha]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class VOLATILITY extends TulindIndicatorWrapper<{
  volatility: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.VOLATILITY;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class VOSC extends TulindIndicatorWrapper<{
  vosc: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.VOSC;

  constructor(
    readonly input: number[],
    readonly conf: { shortPeriod: number; longPeriod: number }
  ) {
    super([input], [conf.shortPeriod, conf.longPeriod]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class VWMA extends TulindIndicatorWrapper<{
  vwma: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.VWMA;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.CLOSE]),
        input.map((k) => k[OHLCVPositions.VOLUME]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class WAD extends TulindIndicatorWrapper<{
  wad: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.WAD;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class WCPRICE extends TulindIndicatorWrapper<{
  wcprice: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.WCPRICE;

  constructor(readonly input: OHLCV[]) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      []
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class WILDERS extends TulindIndicatorWrapper<{
  wilders: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.WILDERS;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class WILLR extends TulindIndicatorWrapper<{
  willr: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.WILLR;

  constructor(readonly input: OHLCV[], conf: { period: number }) {
    super(
      [
        input.map((k) => k[OHLCVPositions.HIGH]),
        input.map((k) => k[OHLCVPositions.LOW]),
        input.map((k) => k[OHLCVPositions.CLOSE]),
      ],
      [conf.period]
    );
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class WMA extends TulindIndicatorWrapper<{
  wma: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.WMA;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}

export class ZLEMA extends TulindIndicatorWrapper<{
  zlema: number[];
}> {
  protected readonly tulindIndicatorName = IvyTechnicalIndicators.ZLEMA;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return {
      [this.tulindIndicatorName]: result[0],
    };
  }
}
