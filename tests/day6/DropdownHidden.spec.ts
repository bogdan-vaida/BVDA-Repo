import { test, expect } from '@playwright/test';

test('hidden dropdown', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

await page.getByRole('listitem').filter({hasText: 'Recruitment' }).click();

await page.locator('//label[text()="Job Title"]//following::div[@class="oxd-select-text--after"][1]').click(); 
const values = await page.$$ ('[role="option"] >div> span');
for (let value of values) {
    const option = await value.textContent();
    //console.log(option);
    if (option == "QA Lead") 
        {
            await value.click();
            break
        }
}

//await expect(page.getByText('QA Lead', { exact: true })).toBeChecked();
await page.waitForTimeout(5000);

});