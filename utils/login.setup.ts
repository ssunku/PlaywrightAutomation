import { expect, test as setup, chromium } from '@playwright/test';
import { PageManager } from './PageManager'; 

setup('Login and save auth state', async ({}) => {
  const browser = await chromium.launch({ headless: false }); // optional: headless: false for debugging
  const context = await browser.newContext();
  const page = await context.newPage();

  const pm = new PageManager(page);

  await page.goto('https://phoenix.kube.gcp-qa.clh-int.com/');
  await pm.getLoginPage().enterEmailText('castlight_user@castlighthealth.com');
  await pm.getLoginPage().enterPassword('monkey55');
  await pm.getLoginPage().clickOnSignInBtn();

  await expect(page).toHaveTitle('Castlight | Login'); // <- adjust this to match your actual login success title

  await context.storageState({ path: '.auth/user.json' });
});