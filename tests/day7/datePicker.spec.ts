import { test, expect } from '@playwright/test';

test('datePicker', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.fill ('#datepicker', '02/27/2026');

await page.waitForTimeout(2000);

});
