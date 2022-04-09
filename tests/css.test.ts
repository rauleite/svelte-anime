import { hexToRGBA } from './utils/css';
// import { round } from './utils/numbers';
import { describe, expect, test } from 'vitest';

const c1 = '#f80';
const c2 = '#f808';
const c3 = '#0088ff';
const c4 = '#0088ff88';
const c5 = '#98736';

describe('hex to RGBA', () => {
	test(`${c1}`, () => {
		expect(hexToRGBA(c1)).toBe('rgba(255, 136, 0, 1)');
	});
	test(`${c2}`, () => {
		expect(hexToRGBA(c2)).toBe('rgba(255, 136, 0, 0.53)');
	});
	test(`${c3}`, () => {
		expect(hexToRGBA(c3)).toBe('rgba(0, 136, 255, 1)');
	});
	test(`${c4}`, () => {
		expect(hexToRGBA(c4)).toBe('rgba(0, 136, 255, 0.53)');
	});
	test(`${c5}`, () => {
		expect(() => hexToRGBA(c5)).toThrowError(/Invalid HEX/);
	});
	test('explicit alpha', () => {
		expect(hexToRGBA(c1, 0.5)).toBe('rgba(255, 136, 0, 0.5)');
	});
});
