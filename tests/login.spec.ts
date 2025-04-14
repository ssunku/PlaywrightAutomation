import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('has title', async ({ page }) => {

  const loginPage=new LoginPage(page);
  
  await page.goto('https://phoenix.kube.gcp-qa.clh-int.com/');
  await loginPage.enterEmailText("castlight_user@castlighthealth.com")
  await loginPage.enterPassword("monkey55")
  await loginPage.clickOnSignInBtn();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Castlight | Login");
});

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
