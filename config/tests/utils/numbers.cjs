"use strict";
exports.__esModule = true;
exports.getRandomInt = void 0;
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRandomInt = getRandomInt;
