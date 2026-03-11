import { test, expect } from '@playwright/test';
import moment from 'moment';

test('datePicker from Calendar /w Moment.js', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.getByPlaceholder('Start Date').click();

//sel date function
const current = page.locator('//table[@class="table-condensed"]//th[@class="datepicker-switch"])[1]');
const prev = page.locator('//table[@class="table-condensed"]//th[@class="prev"][1]')
const next = page.locator('//table[@class="table-condensed"]//th[@class="next"][1]')
let dateToSelect = "2026-02-27";
const thisMonth = moment(dateToSelect, 'YYYY-MM-DD').isBefore()
console.log(thisMonth)
while (await current.textContent() != dateToSelect){
    if (thisMonth) {
        await next.click();
    } else {
        await prev.click();
    }
}

await page.click('//td[@class="day" and text()="27"]');
await page.waitForTimeout(2000);

});