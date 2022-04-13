"use strict";
exports.__esModule = true;
exports.getRandomInt = exports.round = void 0;
var round = function (num, decimal) {
    if (decimal === void 0) { decimal = 2; }
    return +(Math.round(parseInt(num + "e+".concat(decimal))) + "e-".concat(decimal));
};
exports.round = round;
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRandomInt = getRandomInt;
