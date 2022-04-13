import { expect, test } from '@playwright/test';
test('index page has expected h1', async ({ page }) => {
	// console.log('env.CI', process.env.CI);
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Text Lg');
});
