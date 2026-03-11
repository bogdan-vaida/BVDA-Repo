import { test, expect } from '@playwright/test';

test('Mouse 2x click', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
// locate Double Click
const doubleClickText = page.getByText('Double Click', { exact: true });

//double-click on the text
await doubleClickText.dblclick();
//wait
  await page.waitForTimeout(2000);
});
