import { test, expect } from '@playwright/test';

test('Handling Alert Popups in playwright', async ({page}) => {

  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  await page.once('dialog',dialog=>{
    dialog.accept();
    console.log(dialog.message());
  })
  await page.getByText('See an example alert',{exact:true}).click();


});

test('Handling Alert Confirm Popups in playwright', async ({page}) => {

  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  await page.once('dialog',dialog=>{
    dialog.dismiss();
    console.log(dialog.message());
  })
  await page.getByText('See a sample confirm',{exact:true}).click();
});

test('Handling Sent text to Popups in playwright', async ({page}) => {

  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
   page.once('dialog',async(dialog)=>{
   await dialog.accept("Google");
    console.log(dialog.message());
  })
  await page.getByText('See a sample prompt',{exact:true}).click();
});