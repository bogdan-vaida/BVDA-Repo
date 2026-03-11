import { test, expect } from '@playwright/test';

test('mouse scrolls in view', async ({ page }) =>{
await page.goto('https://testautomationpractice.blogspot.com/');

const element = page.getByRole('heading', { name: 'Scrolling DropDown' });
await element.scrollIntoViewIfNeeded();

await page.waitForTimeout(1000);
});
  