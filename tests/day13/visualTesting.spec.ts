import {expect, test} from "@playwright/test";

test('Visual Testing with Playwright', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(5000);
    await page.getByPlaceholder('Username').fill('admin123');

    
    await page.screenshot({ path: './test-results/orangeHRMUsernameFilled2.png' });

    //visual testing checkpoint after filling the username field
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot('orangeHRMUsernameFilled2.png');
});
