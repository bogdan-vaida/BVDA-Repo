import { test, expect, chromium } from '@playwright/test';

test('basic assertion', async ({ page }) =>{

await page.goto('https://testautomationpractice.blogspot.com/');

//Locator points to a checked input.
const days = page.getByRole('checkbox', { name: 'Monday' });
await days.check();//check Monday checkbox
await expect(days).toBeChecked()// assertion that the checkbox is checked

//await expect(locator).toBeVisible()
await expect(page.getByText('PlaywrightPractice')).toBeVisible();

//await expect(locator).toContainText()
await expect(page.locator('body')).toContainText('Playwright');

//await expect(page).toHaveTitle()
await expect(page).toHaveTitle('Automation Testing Practice');

//await expect(locator).toHaveURL()
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

//await expect(locator).toHaveText()
const heading = page.getByRole('heading', { name: 'Mobile Labels' });
await expect(heading).toHaveText('Mobile Labels');// Assert it has the exact text

//await expect(locator).toHaveJSProperty() //checks true DOM properties, not HTML attributes
const nameInput = page.locator('#name');
await expect(nameInput).toHaveJSProperty('placeholder', 'Enter Name');

});