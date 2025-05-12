import { Page,Browser, BrowserContext } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


 let page:Page;
 let context:BrowserContext;

 test.beforeAll(async ({browser})=>{
  context= await browser.newContext();
  page=await context.newPage();
 });

test('has title',{}, async ({}) => {
  const loginPage=new LoginPage(page);
  await page.goto('https://phoenix.kube.gcp-qa.clh-int.com/');
  await loginPage.enterEmailText("castlight_user@castlighthealth.com")
  await loginPage.enterPassword("monkey55")
  await loginPage.clickOnSignInBtn();
  await expect(page).toHaveTitle("Castlight | Login");
});

test.afterEach('clean up after each test',async ({ },testInfo)=>{
 await console.log("Status is"+testInfo.status)
 await page.close();
});
