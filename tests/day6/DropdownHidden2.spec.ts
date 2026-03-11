
import { test, expect } from '@playwright/test';

test('hidden drop-down - job title', async ({ page }) => {
  //goto the opensource-demo login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //fill in username and pwd and click Login
  await page.getByPlaceholder('Username').fill('Admin');     // or: input[name="username"]
  await page.getByPlaceholder('Password').fill('admin123');  // or: input[name="password"]
  await page.getByRole('button', { name: 'Login' }).click();

  //with for Dashboard header
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 5000 });

  //goto Recruitment
  await page.getByRole('link', { name: 'Recruitment' }).click();

  //wait for the recruitment header
  await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible({ timeout: 5000 });

  //open Job Title hiddned dropdown
  const jobTitleDropdown = page.locator('div.oxd-input-group:has(label:has-text("Job Title")) .oxd-select-text');
  await jobTitleDropdown.click();
const option = page.locator('.oxd-select-dropdown').getByText('QA Lead', { exact: true }); //navigate the list and look for the "QA Lead" option
  await option.scrollIntoViewIfNeeded();
  await option.click(); //click QA Lead option

  //verify the selected job Title is QE Lead
  const selectedJobTitleText = page.locator('div.oxd-input-group:has(label:has-text("Job Title")) .oxd-select-text-input');
  await expect(selectedJobTitleText).toHaveText('QA Lead');

});
