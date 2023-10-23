import { IndicatorIdentifier } from "tulind";
export declare abstract class TulindIndicatorWrapper<OutputType> {
    protected inputs: number[][];
    protected options: number[];
    protected abstract tulindIndicatorName: IndicatorIdentifier;
    constructor(inputs: number[][], options: number[]);
    getInputs(): unknown[];
    getOptions(): unknown[];
    setInputs(v: number[][]): void;
    setOptions(v: number[]): void;
    abstract run(): Promise<OutputType>;
    protected runInternal(): Promise<number[][]>;
}
