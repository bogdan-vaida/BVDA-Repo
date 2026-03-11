import { test, expect } from '@playwright/test';

test('mouse scrolls bounding box coordinates', async ({ page }) =>{
await page.goto('https://testautomationpractice.blogspot.com/');

let val=page.getByRole('heading', { name: 'Visitors' })
const box = await val.boundingBox();
if (box) {
    console.log(box.x);
    console.log(box.y);
    await page.mouse.wheel(170, box.y); //scroll to the y coordinate of the Visitors element
}

    await page.waitForTimeout(1000);
});
  