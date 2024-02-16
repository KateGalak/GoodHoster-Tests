import { test, expect } from '@playwright/test';
import { MainPage } from '../page-object/main-page';

test('Check URL main page', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(page.url()).toContain("https://goodhoster.net/");
});

test('Check top-bar ', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.topBar).toBeVisible();
  await expect(mainPage.topBarRegistrationBlock).toBeVisible();
  await expect(mainPage.topBarOnlineChat).toBeVisible();
  await expect(mainPage.topBarLang).toBeVisible();
  await expect(mainPage.topBarCurrency).toBeVisible();
});

test('Footer elements', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.footer).toBeVisible();
  await expect(mainPage.menuButtom).toBeVisible();
  await expect(mainPage.footerLogo).toBeVisible()
});

test('Order Web-hosting button', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.orderWebHostButton).toBeVisible();
  await expect(mainPage.orderWebHostButton).toContainText("Choose a web-hosting");
  

  async function checkIfTextIsPresent(page, textsArray) {
    const pageText = await page.textContent('body'); 
  
    for (const text of textsArray) {
      if (pageText.includes(text)) {
        return true; 
      }
    }
  
    return false; 
  }
    const textsToCheck = ['Choose a web-hosting','Замовити веб-хостинг','Заказать веб-хостинг'];
    const isTextPresent = await checkIfTextIsPresent(page, textsToCheck);
  
    expect(isTextPresent).toBeTruthy();
  });
;
