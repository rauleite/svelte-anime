/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	// webServer: {
	// 	command: 'npm run build && npm run preview',
	// 	port: 3001,
	// 	// reuseExistingServer: true,
	// 	// timeout: 120 * 1000,
	// },
	use: {
		baseURL: 'http://localhost:3000/',
	},
	testDir: './tests/e2e',
};
// command: 'npm run preview',
export default config;
