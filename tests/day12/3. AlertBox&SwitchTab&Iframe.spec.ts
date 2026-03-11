import {test, expect} from "@playwright/test";

test('Alert Box, Switch Tab and Iframe Test', async ({ page }) => {
//alert handle
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('Niels Holgersson');
        page.once('dialog', dialog => {
                 console.log(`Dialog message: ${dialog.message()}`);
                 dialog.dismiss().catch(() => {});
    });

await page.getByRole('button', { name: 'Alert' }).click();

//switch tab
const pagePromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Tab' }).click();
  const newPage = await pagePromise;
await expect(newPage).toHaveURL('https://www.qaclickacademy.com/');
await expect(newPage).toHaveTitle('QAClick Academy - A Testing Academy to Learn, Earn and Shine');

});

 