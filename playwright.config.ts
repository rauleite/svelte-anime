/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000,
	},
	testDir: './tests/playwright',
};
// command: 'npm run preview',
export default config;
