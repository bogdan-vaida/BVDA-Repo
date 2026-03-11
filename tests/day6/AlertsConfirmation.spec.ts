import {test, firefox } from '@playwright/test';

test('Confirmation alert', async () => {
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  //handle the confirmation alert 
  page.on('dialog', async (dialog) => {
    console.log('Alert text:', dialog.message());
    await dialog.accept();   // Click the OK button
  });

  //Click the Confirmation Alert button
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  await page.waitForTimeout(5000);
 
});