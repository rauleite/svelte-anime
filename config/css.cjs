"use strict";
exports.__esModule = true;
exports.hexToRGBA = exports.getAlphafloat = void 0;
var numbers_cjs_1 = require("./numbers.cjs");
var isValidHex = function (hex) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
};
var getChunksFromString = function (st, chunkSize) {
    return st.match(new RegExp(".{".concat(chunkSize, "}"), 'g'));
};
var convertHexUnitTo256 = function (hexStr) {
    return parseInt(hexStr.repeat(2 / hexStr.length), 16);
};
var getAlphafloat = function (a, alpha) {
    if (typeof a !== 'undefined') {
        return a / 255;
    }
    if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
        return 1;
    }
    return alpha;
};
exports.getAlphafloat = getAlphafloat;
var hexToRGBA = function (hex, alpha) {
    if (!isValidHex(hex)) {
        throw new Error('Invalid HEX');
    }
    var chunkSize = Math.floor((hex.length - 1) / 3);
    var hexArr = getChunksFromString(hex.slice(1), chunkSize);
    var _a = hexArr.map(convertHexUnitTo256), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat((0, numbers_cjs_1.round)((0, exports.getAlphafloat)(a, alpha)), ")");
};
exports.hexToRGBA = hexToRGBA;
