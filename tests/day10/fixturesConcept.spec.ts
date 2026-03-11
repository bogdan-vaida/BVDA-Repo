import { test as base, expect, Page } from '@playwright/test';

// --- Example: Using Built-in Fixture ---
// Playwright provides built-in fixtures like 'page', 'browser', and 'context'.
// These are automatically set up and cleaned up for each test.
base('Login with built-in page fixture', async ({ page }) => {
	// 'page' is a browser tab provided by Playwright.
	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	await page.getByPlaceholder('Username').fill('Admin');
	await page.getByPlaceholder('Password').fill('admin123');
	await page.getByRole('button', { name: 'Login' }).click();
	// Wait for navigation or any network idle state
	await page.waitForLoadState('networkidle');
	// Debug: print the page content to help diagnose issues
	const content = await page.content();
	console.log('PAGE CONTENT AFTER LOGIN:', content);
	// Try a longer timeout for the Dashboard heading
	await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 15000 });
});

// --- Example: Creating a Custom Fixture ---
// You can extend Playwright's test object to add your own fixtures.
// Here, we create a custom fixture that provides a logged-in page.
import { test as customTest } from '@playwright/test';

type MyFixtures = {
	loggedInPage: Awaited<ReturnType<typeof getLoggedInPage>>;
};

// Helper function to perform login steps
async function getLoggedInPage(page: Page) {
	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	await page.getByPlaceholder('Username').fill('Admin');
	await page.getByPlaceholder('Password').fill('admin123');
	await page.getByRole('button', { name: 'Login' }).click();
	await page.waitForLoadState('networkidle');
	// Debug: print the page content to help diagnose issues
	const content = await page.content();
	console.log('PAGE CONTENT AFTER LOGIN:', content);
	return page;
}

// Extend the base test to add our custom fixture
const test = base.extend<MyFixtures>({
	loggedInPage: async ({ page }, use) => {
		// This code runs before the test
		await getLoggedInPage(page);
		// Provide the logged-in page to the test
		await use(page);
		// Cleanup (if needed) runs after the test
	},
});

test('Custom fixture: loggedInPage', async ({ loggedInPage }) => {
	// 'loggedInPage' is already logged in, thanks to our custom fixture.
	// Try a longer timeout for the Dashboard heading
	await expect(loggedInPage.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 15000 });
});

/*
Summary:
- Built-in fixtures like 'page' make tests simple and clean.
- Custom fixtures let you reuse setup logic (like logging in) across many tests.
- Fixtures are set up before each test and cleaned up after, automatically.
*/
