import {test} from '@playwright/test';

import {LoginFunction} from '../day14/Pages/LogIn';
import {ProdSelFunction} from '../day14/Pages/ProdSelect';
import {CheckOutFunction} from '../day14/Pages/CheckOut';

test('POM Test:Login, Product Selection, and Checkout', async ({page}) => {

//Login
const loginpage = new LoginFunction(page);
await loginpage.launchApp();
await loginpage.login();

//Product Selection
const prodSelect = new ProdSelFunction(page);
await prodSelect.selectProduct();

//Checkout
const checkout = new CheckOutFunction(page);
await checkout.checkout();

});