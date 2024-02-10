import { test, expect } from '@playwright/test';
import { LandingPage } from '../page-object/main-page';

test('Should check URL main page', async ({ page }) => {
  let landingPage = new LandingPage(page);

  await landingPage.goto();
  await expect(page.url()).toContain("https://goodhoster.net/");
});

test('Should check top-bar ', async ({ page }) => {
  let landingPage = new LandingPage(page);

  await landingPage.goto();
  await expect(landingPage.topBar).toBeVisible();
  await expect(landingPage.registerBtn).toBeVisible();
});

test('Should check footer elements', async ({ page }) => {
  let landingPage = new LandingPage(page);

  await landingPage.goto();
  await expect(landingPage.footer).toBeVisible();
  await expect(landingPage.fotterCopyright).toBeVisible();
  await expect(landingPage.menuButtom).toBeVisible();
});

test('Should check order Web-hosting button', async ({ page }) => {
  let landingPage = new LandingPage(page);

  await landingPage.goto();
  await expect(landingPage.orderWebHostButton).toBeVisible();
  await expect(landingPage.orderWebHostButton).toContainText("Choose a web-hosting");
});

test('Should check Web-hosting and VPS tabs', async ({ page }) => {
  let landingPage = new LandingPage(page);

  await landingPage.goto();
  await expect(landingPage.webHostingTab).toBeVisible();
  await expect(landingPage.vpsTab).toBeVisible();
});