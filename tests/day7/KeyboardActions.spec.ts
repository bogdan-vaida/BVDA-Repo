import { test, expect } from '@playwright/test';

test('keyboard copy+paste WIN', async ({ page }) => {

await page.goto('https://gotranscript.com/text-compare');
await page.getByRole('textbox', { name: 'Paste one version of the text' }).fill('Exercise for keyboard Copy and Paste');
await page.keyboard.press('Control+A'); //Sel All
await page.keyboard.press('Control+C'); //Copy Exercise for keyboard Copy and Paste
await page.keyboard.press('Tab'); //jump to the second text area
await page.keyboard.press('Control+V'); //paste the text in the second text area
await page.waitForTimeout(2000);

});