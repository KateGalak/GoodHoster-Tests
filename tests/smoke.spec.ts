import { test, expect } from '@playwright/test';
import { MainPage } from '../page-object/landing-page';

test.describe("tests for lading", () => {

  let globalPage: MainPage;

  test.beforeEach(async ({page}) => {
    globalPage = new MainPage(page);
    await globalPage.goto();

  })

  test('Check URL main page', async ({ page }) => {
    await expect(page.url()).toContain("https://goodhoster.net/");

  });
  
  test('Check top-bar ', async ({ page }) => {
    let mainPage = new MainPage(page);
  
    await expect(mainPage.topBar).toBeVisible();

  });
  
  test('Footer elements', async ({ page }) => {
    await expect(globalPage.footer).toBeVisible();
    await expect(globalPage.menuButtom).toBeVisible();

  });
  
  test('Order Web-hosting button', async ({ page }) => {
    await expect(globalPage.orderWebHostButton).toBeVisible();
    await expect(globalPage.orderWebHostButton).toContainText("Choose a web-hosting");

  });

  test('Lang switcher to UA',async ({page}) => {
    await globalPage.uaLangBtn.click();
    await expect(globalPage.orderWebHostButton).toContainText("Замовити веб-хостинг")
  })
  
})



