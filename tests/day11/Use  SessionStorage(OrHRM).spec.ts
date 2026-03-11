import {test} from '@playwright/test';

test.use({ storageState: 'BrowserSessionStorage.json' });

test ('Use the sessionStorage.spec Test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(5000);  

});