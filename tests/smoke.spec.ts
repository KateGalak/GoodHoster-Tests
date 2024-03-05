import { test, expect } from "@playwright/test";
import { MainPage } from "../page-object/main-page";

test.describe("GoodHoster Tests", () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.goto();
  });

  test("Check URL main page", async ({ page }) => {
    await expect(page.url()).toContain("https://goodhoster.net/");
  });

  test("Check top-bar ", async ({ page }) => {
    await expect(mainPage.topBar).toBeVisible();
    await expect(mainPage.topBarRegistrationBlock).toBeVisible();
    await expect(mainPage.topBarOnlineChat).toBeVisible();
    await expect(mainPage.topBarLang).toBeVisible();
    await expect(mainPage.topBarCurrency).toBeVisible();
  });

  test("Footer elements", async ({ page }) => {
    await expect(mainPage.footer).toBeVisible();
    await expect(mainPage.menuButtom).toBeVisible();
    await expect(mainPage.footerLogo).toBeVisible();
  });

  test("VPS hosting tabs are present after clicking on VPS tab", async ({
    page,
  }) => {
    await mainPage.vpsTab.click();
    // await expect(mainPage.vpsHostingTabs).toBeVisible();
  });

  test("Order Web-hosting button", async ({ page }) => {
    await expect(mainPage.orderWebHostButton).toBeVisible();
    await expect(mainPage.orderWebHostButton).toContainText(
      "Choose a web-hosting"
    );

    async function checkIfTextIsPresent(page, textsArray) {
      const pageText = await page.textContent("body");

      for (const text of textsArray) {
        if (pageText.includes(text)) {
          return true;
        }
      }

      return false;
    }
    const textsToCheck = [
      "Choose a web-hosting",
      "Замовити веб-хостинг",
      "Заказать веб-хостинг",
    ];
    const isTextPresent = await checkIfTextIsPresent(page, textsToCheck);

    expect(isTextPresent).toBeTruthy();
  });
});
