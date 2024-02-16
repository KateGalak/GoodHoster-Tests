import { test, expect } from '@playwright/test';
import { MainPage } from '../page-object/main-page';

test('Check URL main page', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(page.url()).toContain("https://goodhoster.net/");
  await expect(page).toHaveTitle('Хостинг в Україні | Професійний хостинг сайтів та vps хостинг у Європі ☎ +38 044 360-73-23 » Goodhoster');

});

test('Check top-bar ', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.topBar).toBeVisible();
});

test('Footer elements', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.footer).toBeVisible();
  await expect(mainPage.menuButtom).toBeVisible();
});

test('Order Web-hosting button', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.orderButton).toBeVisible();
  await expect(mainPage.orderButton).toContainText("Замовити веб-хостинг");
});


