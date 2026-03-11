import { test, expect } from "@playwright/test";
import signUp from "../testData/signUp.json";
import signUpForm from "../testData/signUpForm.json";

test("Data Driven Sign Up with JSON on automationexercise", async ({ page }) => {
 await page.goto("https://www.automationexercise.com/login");
 
 //New User SignUp from JSON file
 await page.locator('button:has-text("Consent")').click().catch(() => {});//dismiss the cookie consent pop-up
 const signupForm = page.locator('form').filter({ hasText: 'Signup' });
 await signupForm.locator('input[name="name"]').fill(signUp.name);
 await signupForm.locator('input[name="email"]').fill(signUp.email);
 await signupForm.locator('button:has-text("Signup")').click();
 await page.waitForTimeout(6000);

 //Create a new account with the credentials from the JSON file
 await expect(page.getByText("Enter Account Information")).toBeVisible({ timeout: 15000 });
 
await page.getByRole('radio', { name: signUpForm.title, exact: true }).check();
await page.getByRole('textbox', { name: 'Name *', exact: true }).fill(signUpForm.fullname);
await expect(page.locator('#email')).toHaveValue(signUp.email);
await page.locator('input[name="password"]').fill(signUpForm.password);
await page.locator('input[name="first_name"]').fill(signUpForm.fname);
await page.locator('input[name="last_name"]').fill(signUpForm.lname);
await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(signUpForm.address);
await page.getByLabel('Country *').selectOption('United States');
await page.locator('input[name="state"]').fill(signUpForm.state);
await page.locator('input[name="city"]').fill(signUpForm.city);
await page.locator('input[name="zipcode"]').fill(signUpForm.zip);
await page.getByRole('textbox', { name: 'Mobile Number *' }).fill(signUpForm.mobile);

await page.getByRole("button", { name: "Create Account" }).click();   
await page.waitForTimeout(5000);
await expect(page.getByText('Account Created!')).toBeVisible();


});
