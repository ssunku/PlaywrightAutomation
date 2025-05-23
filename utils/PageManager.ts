import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
export class PageManager{

    page:Page;
    loginPage:LoginPage;
    homePage:HomePage;

    constructor(page:Page){
        this.page=page;
        this.loginPage=new LoginPage(page);
        this.homePage=new HomePage(page);

    }

     getLoginPage():LoginPage {
        return this.loginPage;
    }

     getHomePage(): HomePage {
        return this.homePage;
    }

}