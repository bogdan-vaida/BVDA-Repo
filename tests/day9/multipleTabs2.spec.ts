import { test, chromium } from '@playwright/test';

test('browser multi tabs - promisse', async ({ page, context }) =>{
// !!! const page=await context.newPage() & context=await browser.newContext()

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const [multiTab]=await Promise.all
([
 context.waitForEvent('page'), //event of new tab opening
page.getByText('OrangeHRM, Inc').click()//this triggers the opening of a new tab
])

//wait until the new tab loads
//await multiTab.waitForLoadState('domcontentloaded');
await multiTab.getByRole('button', { name: 'Pricing' }).click();

});