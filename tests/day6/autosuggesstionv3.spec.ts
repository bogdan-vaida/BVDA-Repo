
import { test, expect } from '@playwright/test';

test('Search for Playwright on Google', async ({ page }) => {

await page.goto('https://www.google.com/?zx=1772123967288&no_sw_cr=1');
// Accept cookies if the popup appears (Google shows this often in EU regions)
  const agreeButton = page.getByRole('button', { name: /accept all|i agree|accept/i });
  if (await agreeButton.isVisible().catch(() => false)) {
    await agreeButton.click();
  }
await page.getByRole('combobox', { name: 'Caută' }).click();
await page.getByRole('combobox', { name: 'Caută' }).fill('playwright docum');
await page.getByText('playwright documentation', { exact: true }).click();

});
