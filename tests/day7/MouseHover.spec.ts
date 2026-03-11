import { test, expect } from '@playwright/test';

test('mouse hover', async ({ page }) =>
    {
await page.goto('https://testautomationpractice.blogspot.com/');

const hoverElement = page.getByText('Mouse Hover', { exact: true });

await hoverElement.hover(); //hover on the element

await page.waitForTimeout(2000);
});  