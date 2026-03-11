import {test, expect} from '@playwright/test';
import fs from "fs"
import { parse } from "csv-parse/sync";

const data = parse(fs.readFileSync("../testData/testdata.csv"), {
    columns: true,
    skip_empty_lines: true
});

data.forEach((dt:any) => {
    test(`Data Driven Test with CSV - ${dt.Id}`, async ({ page }) => { //backticks for template literal
        await page.goto('https://demoqa.com/automation-practice-form/');
        await page.waitForLoadState();

        await page.locator("#firstName").fill(dt.FirstName);
        //await page.waitForTimeout(3000);
        await page.locator("#lastName").fill(dt.LastName);
        //await page.waitForTimeout(3000);
        //await page.locator("#gender-radio-1").click();
        await page.getByRole('radio', { name: dt.Gender, exact: true }).check();
        //await page.waitForTimeout(3000);
        await page.locator("#userNumber").fill(dt["Mobile#"]);
        await page.waitForTimeout(1000);
        
        await page.locator("#submit").click();
        await page.waitForTimeout(1000);
        await expect(page.locator("text=Thanks for submitting the form")).toBeVisible();
        await page.locator("#closeLargeModal").click();
    }
    )
});

