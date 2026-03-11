import { test, expect, chromium } from '@playwright/test';

test('Prompt alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    page.on('dialog', async (dialog) => {
        console.log('Alert text:', dialog.message());
        console.log('Alert type:', dialog.type());
        await dialog.accept('Han Solo');   // Click the OK button and enter text
    });

    //Click the Prompt Alert button
    await page.click('button:has-text("Prompt Alert")');
    await page.waitForTimeout(2000);
      
});
