import { test, expect, chromium } from '@playwright/test';

test('autosuggestion test for google', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://www.google.com/');
  
  //handle consent if the popup appears
     const agreeButton = page.getByRole('button', { name: /accept all|i agree|accept/i });
     if (await agreeButton.isVisible().catch(() => false))
       {
         await agreeButton.click();
       }

  await page.fill("[aria-label='Caută']", "playwright");

  //await page.getByRole('combobox', { name: 'Caută' }).click();
  //await page.getByRole('combobox', { name: 'Caută' }).fill('playwright');

  await page.waitForSelector('//ul[@role="listbox"]//div[@role="option"]', { timeout: 10000 });
  const options = await page.$$("//div[role='presentation']//li//div[role='option']");
  for (let val of options)
     {
    const option = await val.textContent();
    console.log(option);
      if (option == 'playwright documentation')
          {
            await val.click();
            break;
          }
        }
  await page.waitForTimeout(5000);
  await browser.close();
});
        
    