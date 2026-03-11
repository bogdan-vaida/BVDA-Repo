import { expect, Locator, Page, test } from "@playwright/test";

test('webtable', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const table = page.locator('#productTable');

const columns = table.locator('thead tr th');
console.log('Number of columns: ' + await columns.count());

const rows = table.locator('tbody tr');
console.log('Number of rows: ' + await rows.count());

//selection of multiple cells
await selectProduct(rows, page, 'Smartphone');
await selectProduct(rows, page, 'Laptop');

async function selectProduct(rows: Locator, page: Page, product: string) {
    const variable = rows.filter ({
        has: page.locator('td'),
        hasText: product
        })
    await variable.locator('input').check();
}
});