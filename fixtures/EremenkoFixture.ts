import { Page, test as baseTest, chromium as baseChromium } from "@playwright/test";
import { MainPage } from "../page-object/main-page";

type baseTest = {
    CheckvisiableElementWithFixture: MainPage;
    CheckURLFixture: MainPage;
    CheckTopBarElements: MainPage;
    CheckFooterElements: MainPage;
    CheckOrderBTN: MainPage;
}

export const test = baseTest.extend<baseTest>({

    CheckURLFixture: async ({ page }, use) => {
        let mainPage = new MainPage(page);
        await use(mainPage);
        await mainPage.CheckURL();
    },
    CheckTopBarElements: async ({ page }, use) => {
        let mainPage = new MainPage(page);
        await use(mainPage);
        await mainPage.ToPBarElements();
    },
    CheckFooterElements: async ({ page }, use) => {
        let mainPage = new MainPage(page);
        await use(mainPage);
        await mainPage.FooterElements()
    },
    CheckOrderBTN: async ({ page }, use) => {
        let mainPage = new MainPage(page);
        await use(mainPage);
        await mainPage.ContainText()
    },
    CheckvisiableElementWithFixture: async ({ page }, use) => {
        let mainPage = new MainPage(page);
        await use(mainPage);
        await mainPage.checkViseability();
    },
})

export const chromium = baseChromium;