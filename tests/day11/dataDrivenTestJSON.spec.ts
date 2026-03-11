import { test, expect, chromium } from "@playwright/test";
import testdata from "../testData/testdata.json";
import recdata from "../testData/recruitment.json";

test("Data Driven Test with JSON", async ({ page }) => {
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 await page.getByPlaceholder("Username").fill(testdata.username);
 await page.getByPlaceholder("Password").fill(testdata.password);
 await page.getByRole("button", { name: "Login" }).click();
 await page.waitForTimeout(3000);

 await page.getByRole("link", { name: "Recruitment" }).click();
 await page.waitForTimeout(3000);
 await page.getByRole("button", { name: "Add" }).click();
 await page.waitForTimeout(3000);
 await expect(page.locator('#app')).toContainText("Add Candidate");   
    //these are the only 3 fields that are mandatory
 await page.getByPlaceholder("First Name").fill(testdata.fname);
 await page.getByPlaceholder("Last Name").fill(testdata.lname);
 //await page.getByPlaceholder("Type Here").fill(testdata.email);
 await page.getByRole('textbox', { name: 'Type here' }).first().click();
 await page.getByRole('textbox', { name: 'Type here' }).first().fill(testdata.email);
 
 await page.getByRole("button", { name: "Save" }).click();   
 await page.waitForTimeout(5000);
 await expect(page.getByText('Application stage')).toBeVisible();
});

for (const rd of recdata) {
    test(`Data Driven Test with recruitment.JSON - ${rd.Id}`, async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder("Username").fill(testdata.username);
await page.getByPlaceholder("Password").fill(testdata.password);
await page.getByRole("button", { name: "Login" }).click();
await page.waitForTimeout(3000);
await page.getByRole("link", { name: "Recruitment" }).click();
await page.waitForTimeout(3000);
await page.getByRole("button", { name: "Add" }).click();
await page.waitForTimeout(3000);
await expect(page.locator('#app')).toContainText("Add Candidate");

await page.getByPlaceholder("First Name").fill(rd.fname);
await page.getByPlaceholder("Last Name").fill(rd.lname);
await page.getByRole('textbox', { name: 'Type here' }).first().click();
await page.getByRole('textbox', { name: 'Type here' }).first().fill(rd.email);

await page.getByRole("button", { name: "Save" }).click();
await page.waitForTimeout(5000);
await expect(page.getByText('Application stage')).toBeVisible();
    },);
}
