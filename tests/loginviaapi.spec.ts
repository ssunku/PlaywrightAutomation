import {expect } from '@playwright/test';
import { test } from '../utils/apilogin'
import { LoginPage } from '../pages/LoginPage';

test('has title',{}, async ({ page,session_id }) => {

  const loginPage=new LoginPage(page);
  console.log(session_id)
  await page.goto('https://phoenix.kube.gcp-qa.clh-int.com/');
  await loginPage.enterEmailText("castlight_user@castlighthealth.com")
  await loginPage.enterPassword("monkey55")
  await loginPage.clickOnSignInBtn();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Castlight | Login");
});