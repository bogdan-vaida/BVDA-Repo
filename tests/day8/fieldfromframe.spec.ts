import { test, expect, Page, Locator, Frame, FrameLocator } from '@playwright/test';

test('frames handling', async ({ page }) =>{
await page.goto('https://ui.vision/demo/webtest/frames/');

const allFrames = await page.frames();
console.log('Total # of frames: ' + allFrames.length);

const frame1 = page.frameLocator('frame[src="frame_1.html"]');

if (!frame1) {
    throw new Error('External frame not found');
}

await frame1.locator('input[name="mytext1"]').fill('Interacted with Frame 1 entry field');

await expect(frame1.locator('input[name="mytext1"]')).toHaveValue('Interacted with Frame 1 entry field');

});

