import { Page } from "@playwright/test";
import { HomePageLocators } from "../locators/HomePageLocators";
export class HomePage{

     page: Page;
      homePageLocators: HomePageLocators
      constructor(page: Page) {
        this.page = page;
        this.homePageLocators = new HomePageLocators(this.page);
      }

      async isFindCareOption():Promise<boolean>{
       return await this.homePageLocators.getFindCare.isVisible();
      }

      async waitForFindCareOption():Promise<void>{
        await this.homePageLocators.getFindCare.waitFor({timeout:10000});
      }

       async isBenefitsOption():Promise<boolean>{
       return await this.homePageLocators.getFindCare.isVisible();
      }

      async clickOnSettings(){
        await this.homePageLocators.getSettings.click();
      }

      async clickOnSingOut(){
        await this.homePageLocators.getSignOut.click();
      }

      async clickOnYesBtn(){
        await this.homePageLocators.getYesbtn.click();
      }

}