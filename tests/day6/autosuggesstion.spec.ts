import { test, expect, chromium } from '@playwright/test';

test('auto suggestion test in google', async ({ page }) => {
  await page.goto('https://google.com/');
  const inputsearch = await page.locator('#APjFqb');
await page.getByRole('button', { name: 'Accepta tot' }).click();
await inputsearch.fill('playwright');
await page.getByRole('listbox').getByRole('option', { name: 'playwright documentation' }).click();
await page.waitForTimeout(2000);   

});