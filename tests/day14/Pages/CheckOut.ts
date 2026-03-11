import {Locator, Page, expect} from '@playwright/test';
import POMCard from '../../testData/POMTestData/POMCard.json';

export class CheckOutFunction{
    page: Page
    private proceedToCheckout: Locator;
    private placeOrder: Locator;
    private nameOnCard: Locator;
    private cardNumber: Locator
    private cvc: Locator;
    private expiryMonth: Locator
    private expiryYear: Locator;
    private Pay: Locator;

    constructor(page: Page){
        this.page = page;
        this.proceedToCheckout = page.getByText('Proceed To Checkout');
        this.placeOrder = page.getByRole('link', { name: 'Place Order' });
        this.nameOnCard = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.cvc = page.locator('input[name="cvc"]');
        this.expiryMonth = page.locator('input[name="expiry_month"]');
        this.expiryYear = page.locator('input[name="expiry_year"]');
        this.Pay = page.getByRole('button', { name: 'Pay' });
    }
async checkout(){
    //await expect(this.proceedToCheckout).toBeVisible();
    await this.proceedToCheckout.click();
    //await expect(this.page.getByRole('heading', { name: 'Checkout' })).toBeVisible();
    await this.placeOrder.click();
    await this.nameOnCard.fill(POMCard.cardName);
    await this.cardNumber.fill(POMCard.cardNumber);
    await this.cvc.fill(POMCard.cvc);
    await this.expiryMonth.fill(POMCard.expiryMonth);
    await this.expiryYear.fill(POMCard.expiryYear);
    await this.Pay.click();
    await expect(this.page.getByText('Order Placed!')).toBeVisible();
}
}
