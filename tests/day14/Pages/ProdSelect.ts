import {Locator, Page, expect} from '@playwright/test';

export class ProdSelFunction{
    page: Page
    private firstProd: Locator;
    private secondProd: Locator;
    private continueShopping: Locator;
    private productsLink: Locator;
    private addToCart: Locator;
    private viewCart: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstProd = page.getByRole('link', { name: ' View Product' }).nth(1);
        this.secondProd = page.getByRole('link', { name: ' View Product' }).nth(2);
        this.addToCart = page.getByRole('button', { name: ' Add to cart' });
        this.continueShopping = page.getByRole('button', { name: 'Continue Shopping' });
        this.productsLink = page.getByRole('link', { name: /Products/ });
        this.viewCart = page.getByRole('link', { name: 'View Cart' });
    }

    async continueShoppingAndGoToProducts(){
        await this.continueShopping.click();
        await this.productsLink.click();
        await this.page.waitForURL('**/products');
    }

    async selectProduct(){
        await this.firstProd.click();
        await this.addToCart.click();
        await expect(this.page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await this.continueShoppingAndGoToProducts();
        await this.secondProd.click();
        await this.addToCart.click();
        await expect(this.page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await this.viewCart.click();
        await expect(this.page.getByText('Shopping Cart')).toBeVisible();
    }
}  
