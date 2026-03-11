import { test } from '@playwright/test';

test('1 file upload & delete', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');

await page.setInputFiles("input[type='file']","../filesToUpload/TXTfile.txt");

 //delete the file
 await page.setInputFiles("input[type='file']", []);

await page.waitForTimeout(3000);
});