import {test, chromium} from "@playwright/test";

test("filtering from saucedemo.com", async () => {

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://saucedemo.com/");
await page.getByPlaceholder('Username').fill("standard_user");
await page.getByPlaceholder('Password').fill("secret_sauce");
await page.getByRole('button', { name: 'Login' }).click();

await page.locator('[data-test="inventory-item"]')
.filter({ hasText: 'Sauce Labs Fleece Jacket' })
.getByRole('button', { name: 'Add to cart' }).click();

});

