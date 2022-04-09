import LogoComp from '../src/lib/Logo.svelte';

import { getRandomInt } from './utils/numbers';

import { describe, expect, test } from 'vitest';

const Logo = (props: {}) => {
	const host = document.createElement('div');
	document.body.appendChild(host);
	return new LogoComp({ target: host, props });
};

const getLogoProps = ({
	hasWidth,
	hasHeight,
}: {
	hasWidth?: boolean;
	hasHeight?: boolean;
}) => {
	const randomInt = () => getRandomInt(1, 1000);

	return {
		width: hasWidth ? randomInt() : undefined,
		height: hasHeight ? randomInt() : undefined,
	};
};

describe('logo size', () => {
	test('only with width', () => {
		expect(() => Logo(getLogoProps({ hasWidth: true }))).not.toThrowError();
	});
	test('only with height', () => {
		expect(() => Logo(getLogoProps({ hasHeight: true }))).not.toThrowError();
	});
	test('with width and height', () => {
		expect(() =>
			Logo(getLogoProps({ hasWidth: true, hasHeight: true }))
		).toThrowError(/both/);
	});
	test('only with width, and with 0 value', () => {
		expect(() => Logo({ width: 0 })).toThrowError(/both/);
	});
	test('with width and height equals to 0', () => {
		expect(() => Logo({ width: 0, height: 0 })).toThrowError(/both/);
	});
	test('only with height, and with 0 value', () => {
		expect(() => Logo({ height: 0 })).not.toThrowError();
	});
});
