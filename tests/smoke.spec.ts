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
});

test('Footer elements', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.footer).toBeVisible();
  await expect(mainPage.menuButtom).toBeVisible();
});

test('Choose a Web-hosting button', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(page.url()).toBe("https://goodhoster.net/en/");
  await expect(mainPage.chooseWebHostButton).toBeVisible();
  await expect(mainPage.chooseWebHostButton).toContainText("Choose a web-hosting");
});

test('Check Web-hosting/VPS tabs', async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await mainPage.VPSTab.click();
  await expect(mainPage.VMPrice).toBeVisible();
  await mainPage.WebHostingTab.click();
  await expect(mainPage.CPPrice).toBeVisible();
});


