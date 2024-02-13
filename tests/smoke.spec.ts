import { test, expect } from '@playwright/test';
import { LandingPage } from '../page-object/main-page';

test.describe('GoodHosters tests:', () => {

  test('Check URL main page', async ({ page }) => {
    let landingPage = new LandingPage(page);
  
    await landingPage.goto();
    await expect(page.url()).toContain("https://goodhoster.net/");
  });
  
  test('Check top-bar ', async ({ page }) => {
    let landingPage = new LandingPage(page);
  
    await landingPage.goto();
    await expect(landingPage.topBar).toBeInViewport();
  });
  
  test('Check currency changing', async ({ page }) => {
    let landingPage = new LandingPage(page);

    await landingPage.goto();
    await landingPage.currencyButtonUSD.click();
    await expect(landingPage.pricePackageCpStartUSD).toContainText("1.67");
    await landingPage.currencyButtonUAH.click();
    await expect(landingPage.pricePackageCpStartUAH).toContainText("61.79");
  });
  
  test('Order Web-hosting button', async ({ page }) => {
    let landingPage = new LandingPage(page);
  
    await landingPage.goto();
    await expect(landingPage.chooseWebHostButton).toBeVisible();
    await expect(landingPage.chooseWebHostButton).toHaveText("Choose a web-hosting");
  });
});



