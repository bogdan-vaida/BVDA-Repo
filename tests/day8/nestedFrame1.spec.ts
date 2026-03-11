import { test, expect, Page, Locator, Frame, FrameLocator } from '@playwright/test';

test('nested frames 1', async ({ page }) =>{
await page.goto('https://ui.vision/demo/webtest/frames/');

const outerFrame:Frame | null = page.frame({url: /frame_3.html/});
if (!outerFrame) {
    throw new Error('No outer frame found');
}

//Child frames of the outer frame
const innerFrames: Frame[] = outerFrame.childFrames();
console.log('Total # of inner frames:${innerFrames.length}');

//Interact with the 1sr one
const innerFrame1 = innerFrames[0];
const checkbox = innerFrame1.locator('<div aria-label="Web Testing">');
await checkbox.check();

});