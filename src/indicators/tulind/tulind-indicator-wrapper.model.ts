import * as tulind from "tulind";
import { IndicatorIdentifier } from "tulind";

export abstract class TulindIndicatorWrapper<OutputType> {
  protected abstract tulindIndicatorName: IndicatorIdentifier;

  constructor(protected inputs: number[][], protected options: number[]) {}

  getInputs(): unknown[] {
    return this.inputs;
  }

  getOptions(): unknown[] {
    return this.options;
  }

  setInputs(v: number[][]) {
    this.inputs = v;
  }

  setOptions(v: number[]) {
    this.options = v;
  }

  abstract run(): Promise<OutputType>;

  protected runInternal(): Promise<number[][]> {
    return new Promise((resolve, reject) => {
      tulind.indicators[this.tulindIndicatorName].indicator(
        this.inputs,
        this.options,
        (err: Error | undefined, results: number[][]) => {
          if (!!err) {
            reject(
              new Error(
                `Indicator "${this.tulindIndicatorName}" execution failed due to: ${err}`
              )
            );
          } else {
            resolve(results);
          }
        }
      );
    });
  }
}
