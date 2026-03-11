import { test, expect, Page, Locator, Frame, FrameLocator } from '@playwright/test';

test('nested frames 2nd approach', async ({ page }) =>{
await page.goto('https://ui.vision/demo/webtest/frames/');

const outerFrame:Frame | null = page.frame({url: /frame_3.html/});
if (!outerFrame) {
    throw new Error('No outer frame found');
}

await  outerFrame.fill('input[name="mytext3"]', 'Interacted with Frame 3 entry field');

//Locate inner frame using frame locator
const innerFrame: FrameLocator = outerFrame.frameLocator('//iframe]');
//locate the checkbox and check it
const innerCheckbox = innerFrame.locator('<div aria-label="Form Autofilling">');
await innerCheckbox.check();
await page.waitForTimeout(5000);

});