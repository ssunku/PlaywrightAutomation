import { Page, Locator } from '@playwright/test'

export class LoginPageLocators {

    page: Page

    constructor(page: Page) {
        this.page = page;

    }
    get getLoginEmail(): Locator {

        return this.page.locator("//input[@name='username']|//*[@resource-id='userNameTxt']//input");

    }

    get getLoginPassword(): Locator {

        return this.page.locator("//input[@name='password']|//*[@resource-id='passwordTxt']//input");

    }

    get getSignInBtn(): Locator {
        return this.page.locator("//*[@resource-id='signInBtn']");
    }
}