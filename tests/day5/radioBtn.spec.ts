import {chromium, expect, test } from "@playwright/test";

test("select radio button", async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator('#female').check();
await expect(page.locator('#female')).toBeChecked();

await page.locator('#male').check();
await expect(page.locator('#male')).toBeChecked();

await page.locator('#female').check(); 
await expect(page.locator('#female')).toBeChecked();

});