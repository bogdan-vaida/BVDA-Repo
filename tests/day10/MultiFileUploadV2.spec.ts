import { test } from '@playwright/test';

test('multiple files upload v2 event handler', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');

const uploadFile = page.waitForEvent ('filechooser')
await page.locator("#multipleFilesInput").click()
const upload = await uploadFile // promise

upload.setFiles("../filesToUpload/PDFfile.pdf")
await page.waitForTimeout(1000)   
});