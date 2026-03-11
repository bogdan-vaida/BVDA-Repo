import { chromium, test } from "@playwright/test";

//Run this test for locators
test.only("CSS", async () => {
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// Fill in the Username and the Pwd
await page.locator("input[name='username']").fill("Admin");
await page.locator("input[name='password']").fill("admin123");

// Click Login
await page.locator("button[type='submit']").click();

//After login Wait for the Dashboard element to load
await page.getByRole('heading', { name: 'Dashboard' }).waitFor();

});
