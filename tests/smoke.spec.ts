// import { test, expect } from "@playwright/test"
import { test } from '../fixtures/EremenkoFixture';
import { MainPage } from '../page-object/main-page';

test('Check URL main page', async ({ CheckURLFixture }) => {
  await CheckURLFixture.CheckURL();
});

test('Check top-bar ', async ({ CheckTopBarElements }) => {
  await CheckTopBarElements.CheckURL();
});

test('Footer elements', async ({ CheckFooterElements }) => {
  await CheckFooterElements.FooterElements();
});

test('Order Web-hosting button', async ({ CheckOrderBTN }) => {
  await CheckOrderBTN.ContainText()
});


test("Test with fixture", async ({ CheckvisiableElementWithFixture }) => {
  await CheckvisiableElementWithFixture.checkViseability();
})