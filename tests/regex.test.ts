import { describe, expect, test } from 'vitest';

// const { transpile } = require('typescript');
// const { readFileSync } = require('fs');

// const strModule = (strRequire) =>
// 	transpile(readFileSync(strRequire).toString());

// // const evalModule = (strModule) => eval(strModule)
// let strModuleTest = `
// abc
// var a = require("./utils/css");
// def
// var b = require("./utils/numbers");
// ghi
// `;

// const requirePattern = /= require\(\"(.*)\"\)/gm;
// const testing = () => {
// 	let match = requirePattern.exec(strModuleTest);
// 	do {
// 		match[1] = `${match[1]}.ts`;
// 		console.log(match[1]);
// 		strModuleTest = strModuleTest.replace(match[0], eval(strModule(match[1])));
// 		console.log(strModuleTest);
// 	} while ((match = requirePattern.exec(strModuleTest)) !== null);
// };
// testing();

describe('general regex', () => {
	describe('', () => {
		test('', () => {
			expect(0).toBe(0);
		});
	});
});
