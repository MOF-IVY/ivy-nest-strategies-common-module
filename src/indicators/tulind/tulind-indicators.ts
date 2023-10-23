import { IvyCommonIndicators } from "../indicators.enum";
import { OHLCV, OHLCVPositions } from "@mof-ivy/ivy-node-sdk";
import { TulindIndicatorWrapper } from "./tulind-indicator-wrapper.model";

export class ABS extends TulindIndicatorWrapper<{ abs: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.ABS;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { abs: result[0] };
  }
}

export class ACOS extends TulindIndicatorWrapper<{ acos: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.ACOS;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { acos: result[0] };
  }
}

export class AD extends TulindIndicatorWrapper<{ ad: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.AD;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ADD;

  constructor(readonly inputA: number[], readonly inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return { add: result[0] };
  }
}

export class ADOSC extends TulindIndicatorWrapper<{ adosc: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.ADOSC;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ADX;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ADXR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.AO;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.APO;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.AROON;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.AROONOSC;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ASIN;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class ATAN extends TulindIndicatorWrapper<{ atan: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.ATAN;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class ATR extends TulindIndicatorWrapper<{ atr: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.ATR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.AVGPRICE;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.BBANDS;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.BOP;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.CCI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.CEIL;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CMO extends TulindIndicatorWrapper<{ cmo: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.CMO;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class COS extends TulindIndicatorWrapper<{ cos: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.COS;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class COSH extends TulindIndicatorWrapper<{ cosh: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.COSH;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CROSSANY extends TulindIndicatorWrapper<{ crossany: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.CROSSANY;

  constructor(readonly inputA: number[], readonly inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CROSSOVER extends TulindIndicatorWrapper<{ crossover: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.CROSSOVER;

  constructor(readonly inputA: number[], readonly inputB: number[]) {
    super([inputA, inputB], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class CVI extends TulindIndicatorWrapper<{ cvi: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.CVI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.DECAY;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class DEMA extends TulindIndicatorWrapper<{ dema: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.DEMA;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.DI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.DIV;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.DM;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.DPO;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class DX extends TulindIndicatorWrapper<{ dx: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.DX;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.EDECAY;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class EMA extends TulindIndicatorWrapper<{ ema: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.EMA;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class EMV extends TulindIndicatorWrapper<{ emv: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.EMV;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.EXP;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.FISHER;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.FLOOR;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class FOSC extends TulindIndicatorWrapper<{ fosc: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.FOSC;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class HMA extends TulindIndicatorWrapper<{ hma: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.HMA;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class KAMA extends TulindIndicatorWrapper<{ kama: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.KAMA;

  constructor(readonly input: number[], readonly conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class KVO extends TulindIndicatorWrapper<{ kvo: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.KVO;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.LAG;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LINREG extends TulindIndicatorWrapper<{ linreg: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.LINREG;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.LINREGINTERCEPT;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.LINREGSLOPE;

  constructor(readonly input: number[], conf: { period: number }) {
    super([input], [conf.period]);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LN extends TulindIndicatorWrapper<{ ln: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.LN;

  constructor(readonly input: number[]) {
    super([input], []);
  }

  async run() {
    const result = await this.runInternal();
    return { [this.tulindIndicatorName]: result[0] };
  }
}

export class LOG10 extends TulindIndicatorWrapper<{ log10: number[] }> {
  protected readonly tulindIndicatorName = IvyCommonIndicators.LOG10;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MACD;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MARKETFI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MASS;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MAX;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MD;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MEDPRICE;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MFI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MIN;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MOM;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MSW;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.MUL;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.NATR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.NVI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.OBV;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.PPO;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.PSAR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.PVI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.QSTICK;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ROC;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ROCR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ROUND;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.RSI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.SIN;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.SINH;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.SMA;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.SQRT;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.STDDEV;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.STDERR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.STOCH;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.STOCHRSI;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.SUB;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.SUM;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TAN;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TANH;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TEMA;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TODEG;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TORAD;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TRIMA;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TRIX;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TRUNC;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TSF;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.TYPPRICE;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ULTOSC;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.VAR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.VHF;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.VIDYA;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.VOLATILITY;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.VOSC;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.VWMA;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.WAD;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.WCPRICE;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.WILDERS;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.WILLR;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.WMA;

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
  protected readonly tulindIndicatorName = IvyCommonIndicators.ZLEMA;

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
