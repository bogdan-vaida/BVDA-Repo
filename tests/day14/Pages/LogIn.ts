import {Locator, Page, expect} from "@playwright/test";
import {URL} from "../constants/URL";
import pomLogIn from "../../testData/POMTestData/POMLogIn.json";

export class LoginFunction{
    readonly page: Page;
    static pageURL = URL.baseURL;//this goes to https://www.automationexercise.com/
    private homeLoginClick: Locator;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginClick: Locator;
    private loggedIn: Locator;

    constructor(page: Page){
        this.page = page;
        this.homeLoginClick = page.getByRole('link', { name: ' Signup / Login' });
        this.emailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Password');
        this.loginClick = page.locator('form').filter({ hasText: 'Login' }).getByRole('button', { name: 'Login' });
        this.loggedIn = page.locator('a:has-text("Logged in as")');
    }

    async launchApp(){
        await this.page.goto(LoginFunction.pageURL);
        await this.page.waitForLoadState('load');
        await this.page.locator('button:has-text("Consent")').click().catch(() => {});//dismiss the cookie consent pop-up
    }

    async login(){
        try{
            await this.homeLoginClick.click();
            await this.emailInput.fill(pomLogIn.email);
            await this.passwordInput.fill(pomLogIn.password);
            await this.loginClick.click();
            //successfull login validation
            await this.loggedIn.waitFor({state: 'visible', timeout: 2000});
            expect (await this.loggedIn.isVisible()).toBeTruthy();
        }    
        catch(error){
            console.error("Login failed:", error);
        }
    }
}
