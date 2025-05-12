import { Page } from "@playwright/test";
import { LoginPageLocators } from "../locators/LoginPageLocators";

export class LoginPage {

  page: Page;
  loginPageLocators: LoginPageLocators
  constructor(page: Page) {
    this.page = page;
    this.loginPageLocators = new LoginPageLocators(this.page);
  }

  async enterEmailText(email: string) {
    await this.loginPageLocators.getLoginEmail.fill(email);

  }

  async enterPassword(password: string) {
    await this.loginPageLocators.getLoginPassword.fill(password);

  }

  async clickOnSignInBtn() {
    await this.loginPageLocators.getSignInBtn.click();
  }


}