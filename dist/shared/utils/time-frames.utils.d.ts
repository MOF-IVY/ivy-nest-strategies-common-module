/**
 * Returns information about tf in form of object with
 * unit & amount properties. Where unit is a string & amount
 * a number
 * @param tf the input time frame (s,m,h,d,w,M,y)
 * @returns object with unit & amount properties
 */
export declare function getTfMetadata(tf: string): {
    unit: string;
    amount: number;
};