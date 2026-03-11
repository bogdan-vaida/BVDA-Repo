import { test, expect } from '@playwright/test';

test('mouse drag-n-drop', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');

const element = page.getByText('Drag and Drop', { exact: true });
await expect(element).toBeVisible();

const element1=await page.locator('#draggable');
const element2=await page.locator('#droppable');

await element1.dragTo(element2); //drag-n-drop element1 that's draggable to element2 that's droppable
await page.waitForTimeout(2000);
});    