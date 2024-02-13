import { test, expect } from "@playwright/test";
import { MainPage } from "../page-object/main-page";

test("Check URL main page", async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(page.url()).toContain("https://goodhoster.net/");
});

test("Check top-bar ", async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.topBar).toBeVisible();
  await mainPage.registerButton.isVisible();
  await mainPage.authorization.isVisible();
});

test("Footer elements", async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await expect(mainPage.footer).toBeVisible();
  await expect(mainPage.menuButtom).toBeVisible();
  await expect(mainPage.phoneIcon).toBeVisible();
  await expect(mainPage.makeMoney).toContainText("Make money");
});

test("click tabs web-hosting, VPS", async ({ page }) => {
  let mainPage = new MainPage(page);

  await mainPage.goto();
  await mainPage.webHostTab.click();
  await mainPage.vpsTab.click();
    
});
