import { describe, expect, test } from 'vitest';
import { round } from '../src/utils/numbers';

describe('round number', () => {
	const n1 = 0.4;
	const n2 = 0.5;
	const n3 = 0.44;
	const n4 = 0.45;
	const n5 = 1.005;
	describe('with decimal = 0', () => {
		test(`${n1}`, () => {
			expect(round(n1, 0)).toBe(0);
		});
		test(`${n2}`, () => {
			expect(round(n2, 0)).toBe(1);
		});
		test(`${n3}`, () => {
			expect(round(n3, 0)).toBe(0);
		});
		test(`${n4}`, () => {
			expect(round(n4, 0)).toBe(0);
		});
	});
	describe('with decimal = 1', () => {
		test(`${n1}`, () => {
			expect(round(n1, 1)).toBe(0.4);
		});
		test(`${n2}`, () => {
			expect(round(n2, 1)).toBe(0.5);
		});
		test(`${n3}`, () => {
			expect(round(n3, 1)).toBe(0.4);
		});
		test(`${n4}`, () => {
			expect(round(n4, 1)).toBe(0.5);
		});
	});
	describe('with decimal default (2)', () => {
		test(`${n1}`, () => {
			expect(round(n1)).toBe(0.4);
		});
		test(`${n2}`, () => {
			expect(round(n2)).toBe(0.5);
		});
		test(`${n3}`, () => {
			expect(round(n3)).toBe(0.44);
		});
		test(`${n4}`, () => {
			expect(round(n4)).toBe(0.45);
		});
		test(`${n5}`, () => {
			expect(round(n5)).toBe(1.01);
		});
	});
});
