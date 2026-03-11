import { expect, Locator, Page, test } from "@playwright/test";

test('webtable', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const table = page.locator('#productTable');

const columns = table.locator('thead tr th');
console.log('Number of columns: ' + await columns.count());

const rows = table.locator('tbody tr');
console.log('Number of rows: ' + await rows.count());

//selection of a certain cell
const tablet = rows.filter ({
    has: page.locator('td'),
    hasText: 'Tablet'
 })
tablet.locator('input').check

});