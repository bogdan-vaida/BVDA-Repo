import { test, expect, chromium } from '@playwright/test';

test('browser tabs', async ({ page, context }) =>{
// !!! const page=await context.newPage() & context=await browser.newContext()

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//event of new tab opening
const pagePromise = context.waitForEvent('page');

await page.getByText('OrangeHRM, Inc').click();//this triggers the opening of a new tab

const newPage=await pagePromise; // will be success/failing based on promise

//New tab
expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');
await newPage.getByPlaceholder('Your email address').fill('bv@cognizant.com');
await newPage.waitForTimeout(2000);

});