import {test, expect} from "@playwright/test";

test('3.3Iframe Test', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//scroll to the iFrame Example iframe
await page.locator('iframe[name="iframe-name"]').scrollIntoViewIfNeeded();
const frame = await page.frameLocator('iframe[name="iframe-name"]');
//click on the Mentorship link inside the iFrame
await frame.getByRole('link', { name: 'Mentorship' }).click({ timeout: 60000 });
await expect(frame.getByRole('heading', { name: 'Mentorship' })).toBeVisible();

});

 