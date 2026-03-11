import { test, expect } from '@playwright/test';

test('datePicker from Calendar', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator('#txtDate').click();
let selectMonth = "Feb";
let selectYear = "2026";
await page.selectOption('.ui-datepicker-month', { label: selectMonth });
await page.selectOption('.ui-datepicker-year', { label: selectYear });
await page.locator("tr>td>a:text-is('27')").click();

await page.waitForTimeout(2000);

});