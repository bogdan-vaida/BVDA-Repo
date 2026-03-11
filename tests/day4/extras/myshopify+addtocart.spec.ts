import { chromium, test } from "@playwright/test";

//go tot site
test.only("Built-In", async () => {
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://sauce-demo.myshopify.com/");


await page.getByRole('link', { name: 'Grey jacket Grey jacket £' }).click();
await page.getByRole('button', { name: 'Add to Cart' }).click();
await page.reload({ waitUntil: 'networkidle' });
await page.getByRole('link', { name: 'My Cart (1)' }).click();
await page.getByRole('button', { name: 'Check Out' }).click();
await page.locator('#main-menu').getByRole('link', { name: 'Home' }).click();

});