import { test, expect } from '@playwright/test';

test('mouse scrolls to x/y', async ({ page }) =>{
await page.goto('https://testautomationpractice.blogspot.com/');

await page.evaluate(() => {
    window.scrollBy(0, 1900); //scroll down by 1900 pixels
    window.scrollBy(2, 0);//scroll up by 2 pixels 
});
});    