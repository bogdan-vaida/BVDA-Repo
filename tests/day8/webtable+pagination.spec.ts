import { expect, Locator, Page, test } from "@playwright/test";

test('webtable', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const table = page.locator('#productTable');

const columns = table.locator('thead tr th');
console.log('Number of columns: ' + await columns.count());

const rows = table.locator('tbody tr');
console.log('Number of rows: ' + await rows.count());

//pagination
const pageS = page.locator('.pagination li a');
console.log(await pageS.count());

for (let p = 0; p < await pageS.count(); p++) {
    if (p > 0) {
        await pageS.nth(p).click();
    }
await page.waitForTimeout(1000); //needed to wait for the page to load after clicking page 2

//reading table on next page
for (let q = 0; q < await rows.count(); q++) {
    const row = rows.nth(q);
    const tds = row.locator('td');

    for (let r = 0; r < await tds.count(); r++) {
        console.log(await tds.nth(r).textContent());
    }
}
}
});
