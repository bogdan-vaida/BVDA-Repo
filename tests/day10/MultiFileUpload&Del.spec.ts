import { test } from '@playwright/test';

test('multiple files upload & delete', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');

await page.setInputFiles("#multipleFilesInput",["../filesToUpload/TXTfile.txt","../filesToUpload/JPGfile.jpg","../filesToUpload/PDFfile.pdf"]);

await page.waitForTimeout(3000);

//delete all uploaded files
await page.setInputFiles("#multipleFilesInput", []);
});