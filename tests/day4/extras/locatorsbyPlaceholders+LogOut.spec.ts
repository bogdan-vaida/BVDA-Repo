import { chromium, test } from "@playwright/test";

//Run this test for locators
test.only("Built-in locators", async () => {
    //Launch the Chrome browser instance
const browser = await chromium.launch();

//create a new browser context
const context = await browser.newContext();

//create a new tab in the browser
const page = await context.newPage();

//Navigate to the URL https://www.saucedemo.com/ or opensource-demo.orangehrmlive.com/
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// possibly needed on my machine: Wait for the login page fields
//await page.locator("input[name='username']").waitFor();

// Fill in the Username and the Pwd
await page.getByPlaceholder('Username').fill("Admin");
await page.getByPlaceholder('Password').fill("admin123");

// Click on Login
await page.getByRole('button', { name: 'Login' }).click();

//After login Wait for the Dashboard heading to load
await page.getByRole('heading', { name: 'Dashboard' }).waitFor();

//Click on the profile picture then click on Logout
await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
await page.getByRole('menuitem', { name: 'Logout' }).click();
await page.getByRole('heading', { name: 'Login' }).waitFor();

});
