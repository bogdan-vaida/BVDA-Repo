import { chromium, test } from "@playwright/test";

test ('built-in locators', async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.getByPlaceholder('Username').fill("Admin");
await page.getByPlaceholder('Password').fill("admin123");
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('heading', { name: 'Dashboard' }).waitFor();
});

test ('CSS locators', async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator("input[name='username']").fill("Admin");
await page.locator("input[name='password']").fill("admin123");
await page.locator("button[type='submit']").click();
await page.getByRole('heading', { name: 'Dashboard' }).waitFor();
});

test ('xPath', async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@name='password']").fill("admin123");
await page.locator("//button[@type='submit']").click();
await page.getByRole('heading', { name: 'Dashboard' }).waitFor();
});