import { Page,Browser, BrowserContext,chromium,firefox,webkit } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { PageManager } from '../utils/PageManager';
import AxeBuilder from '@axe-core/playwright';


 let page:Page;
 let context:BrowserContext;


 test.beforeAll(async ({browser})=>{

  context= await browser.newContext();
  page=await context.newPage();
 });

test('has title',{}, async ({}) => {
  const pm=new PageManager(page);
  
  await page.goto('https://phoenix.kube.gcp-qa.clh-int.com/');
const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
console.log(accessibilityScanResults.violations);
  await pm.getLoginPage().enterEmailText("castlight_user@castlighthealth.com")
  await pm.getLoginPage().enterPassword("monkey55")
  await pm.getLoginPage().clickOnSignInBtn();
  await expect(page).toHaveTitle("Castlight | Login");
  await page.waitForLoadState('domcontentloaded',{timeout:6000});
  await pm.getHomePage().waitForFindCareOption();
  const cookies = await context.cookies();
   console.log('Cookies:', cookies);
  context.storageState({path:'.auth.user.json'});
});

test('Has Find Care Option',{}, async ({}) => {
   const pm=new PageManager(page);
   await pm.getHomePage().isFindCareOption();
});

test('Has Benefits  Option',{}, async ({}) => {
   const pm=new PageManager(page);
   await pm.getHomePage().isBenefitsOption();
});

test.afterAll('clean up after each test',async ({ },testInfo)=>{
const pm=new PageManager(page);
await pm.getHomePage().clickOnSettings();
await pm.getHomePage().clickOnSingOut();
await pm.getHomePage().clickOnYesBtn();
 await page.close();
});
