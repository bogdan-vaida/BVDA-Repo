import { test, expect } from "@playwright/test";
import signUp from "../testData/signUp.json";
import signUpForm from "../testData/signUpForm.json";

test("Product Checkout Test using already created account", async ({page}) => {
 await page.goto("https://www.automationexercise.com/login");
 
 //login with the already created account credentials
 await page.locator('button:has-text("Consent")').click().catch(() => {});//dismiss the cookie consent pop-up
 const signupForm = page.locator('form').filter({ hasText: 'Login' });
 await signupForm.locator('input[name="email"]').fill(signUp.email);
 await signupForm.locator('input[name="password"]').fill(signUpForm.password);
 await signupForm.locator('button:has-text("Login")').click();
 await page.waitForTimeout(6000);
 
 //expect Featured Items to be visible
 await expect(page.getByRole('heading', { name: 'Features Items' })).toBeVisible();

 //add a product to the cart
 //hover over the Blue Top product and click on the Add to cart button
await page.getByRole('link', { name: ' View Product' }).nth(1).click();
//dismiss ad pop-up if it appears
//await page.locator('button:has-text("Close")').click().catch(() => {});

//add to cart
await page.getByRole('button', { name: ' Add to cart' }).click();
await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
//view cart
await page.getByRole('link', { name: 'View Cart' }).click();
await expect(page.getByRole('link', { name: 'Men Tshirt' })).toBeVisible();
//place order
await page.getByText('Proceed To Checkout').click();
await page.getByRole('link', { name: 'Place Order' }).click();
//card data
await page.locator('input[name="name_on_card"]').fill('Niels Holgersson');
await page.locator('input[name="card_number"]').fill('1234567891011212');
await page.getByRole('textbox', { name: 'ex.' }).fill('311');
await page.getByRole('textbox', { name: 'MM' }).fill('12');
await page.getByRole('textbox', { name: 'YYYY' }).fill('2026');
//confirm order
await page.getByRole('button', { name: 'Pay and Confirm Order' }).click({timeout: 2000});
await expect(page.getByText('Order Placed!')).toBeVisible();

});