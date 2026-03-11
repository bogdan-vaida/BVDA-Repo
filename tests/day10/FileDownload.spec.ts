import { test } from '@playwright/test';

test('1 file download', async ({ page }) => {
await page.goto('https://www.testmuai.com/selenium-playground/generate-file-to-download-demo/');
await page.type("#textbox","Ladda ner programmet 2")
await page.waitForTimeout(1000)
await page.click('button[id="create"]')

const dld = page.waitForEvent('download') //name of the eventis <download>
await page.locator("#link-to-download").click() //event trigger
const File = await dld //
await File.saveAs("Download File/" +File.suggestedFilename())

});