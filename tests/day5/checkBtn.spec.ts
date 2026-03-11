import { test, expect } from '@playwright/test';

test('Checks-box Mon to Fri in Days section', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await expect(page.getByRole('checkbox', { name: 'Monday' })).toBeChecked();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await expect(page.getByRole('checkbox', { name: 'Tuesday' })).toBeChecked();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await expect(page.getByRole('checkbox', { name: 'Wednesday' })).toBeChecked();
  await page.getByRole('checkbox', { name: 'Thursday' }).check();
  await expect(page.getByRole('checkbox', { name: 'Thursday' })).toBeChecked();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await expect(page.getByRole('checkbox', { name: 'Friday' })).toBeChecked();

});