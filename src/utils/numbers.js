"use strict";
exports.__esModule = true;
exports.round = void 0;
var round = function (num, decimal) {
    if (decimal === void 0) { decimal = 2; }
    return +(Math.round(num + "e+".concat(decimal)) + "e-".concat(decimal));
};
exports.round = round;
// export const decimalRound = (num: number, decimal: number = 2): number => {
// 	const precision = Math.pow(10, decimal);
// 	return Math.round((num + Number.EPSILON) * precision) / precision;
// };
