import { browser } from '$app/env';

const onBrowser = (callback, serverMock: string[]) => {
	if (!browser) {
		let functionMock = serverMock.reduce((obj, item) => {
			return { ...obj, [item]: () => undefined };
		}, {});
		return functionMock;
	}
	return callback();
};

const theme = onBrowser(() => {
	enum themes {
		NIGHT = 'night',
		LIGHT = 'light',
	}

	/**
	 * Sets theme attribute in html tag
	 */
	let setTheme = (theme: themes) => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	};
	return { setTheme };
}, ['setTheme']);

export default theme;
