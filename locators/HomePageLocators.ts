import { Page, Locator } from '@playwright/test'

export class HomePageLocators {

    page: Page

    constructor(page: Page) {
        this.page = page;

    }
    get getFindCare(): Locator {

        return this.page.locator("//*[contains(text(),'Find Care')]//parent::button");

    }

    get getBenefits(): Locator {

        return this.page.locator("//*[@resource-id='clhNavSideMenuHeader']//*[contains(text(),'Benefits')] | //*[@resource-id='navBenefitsMenu']//*[contains(text(),'Benefits')]");

    }

    get getRewards(): Locator {
        return this.page.locator("//*[@resource-id='clhNavSideMenuHeader']//*[contains(text(),'Rewards')] | //*[@resource-id='navRewardsMenu']//*[contains(text(),'Rewards')]");
    }

    get getSettings(): Locator {
        return this.page.locator("//*[@resource-id='navSettingsMenu']//*[contains(text(),'Settings')]")
    }

    get getSignOut(): Locator {

        return this.page.locator("//*[@resource-id='navSignOutLnk' and contains(text(),'Sign Out')]");
    }

    get getYesbtn(): Locator {

        return this.page.locator("//*[text()='Yes']|//clh-util-dialog//*[contains(text(),'Yes')]");
    }
    get getNobtn(): Locator {

        return this.page.locator("///*[text()='No']|//clh-util-dialog//*[contains(text(),'No')]");
    }


}