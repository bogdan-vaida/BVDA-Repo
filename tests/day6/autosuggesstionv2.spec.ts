
import { test, expect } from '@playwright/test';

test('Search for Playwright on Google', async ({ page }) => {
  // 1. Go to google.com
  await page.goto('https://www.google.com');

  // Accept cookies if the popup appears (Google shows this often in EU regions)
  const agreeButton = page.getByRole('button', { name: /accept all|i agree|accept/i });
  if (await agreeButton.isVisible().catch(() => false)) {
    await agreeButton.click();
  }

  // 2. Navigate to search (click or focus on the input field)
  const searchBox = page.getByRole('textbox', { name: /search|caută|suche/i });
  await searchBox.click();

  // 3. Search for playwright
  await searchBox.fill('playwright documentation');
  await page.keyboard.press('Enter');

  // Optional: wait for results to appear
  await expect(page.getByText(/playwright/i)).toBeVisible();
});
