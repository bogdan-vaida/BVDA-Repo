import { test, expect } from '@playwright/test';

test('mouse RClick', async ({ page }) =>
    {
await page.goto('https://blog.snapdeal.com/');
const  rightClickElement = page.locator('//span[text()="Team"]');
await rightClickElement.click({ button: 'right' }); //right click on the element

await page.waitForTimeout(2000);

});