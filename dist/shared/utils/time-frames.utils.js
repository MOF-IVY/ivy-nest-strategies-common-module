"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyTimeFramesUtils = void 0;
class IvyTimeFramesUtils {
    /**
     * Returns information about tf in form of object with
     * unit & amount properties. Where unit is a string & amount
     * a number
     * @param tf the input time frame (s,m,h,d,w,M,y)
     * @returns object with unit & amount properties
     */
    static getTfMetadata(tf) {
        const splitTf = tf.split("");
        return {
            unit: splitTf.pop() ?? "",
            amount: +splitTf.join(""),
        };
    }
}
exports.IvyTimeFramesUtils = IvyTimeFramesUtils;
