import {test, firefox } from '@playwright/test';

test.only('Simple alert', async () => {
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    page.on('dialog', async (dialog) => {
        console.log(dialog.type());
        console.log(dialog.message());
        await page.waitForTimeout(5000);
        await dialog.accept();
    }); 

await page.click('button:has-text("Simple Alert")');
await page.waitForTimeout(5000);

});