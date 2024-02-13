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
  await expect(mainPage.TopBar).toBeVisible();
});

test('Footer elements', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.foter).toBeVisible();
  await expect(mainPage.menuButtom).toBeVisible();
});

test('Order Web-hosting button', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.orderWebHostButton).toBeVisible();
  await expect(mainPage.orderWebHostButton).toContainText("Choose a web-hosting");
});


