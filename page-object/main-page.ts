import { expect, type Locator, type Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly topBar: Locator;
  readonly header: Locator;
  readonly footer: Locator;
  readonly menuButtom: Locator;
  readonly chooseWebHostButton: Locator;
  readonly VPSTab: Locator;
  readonly WebHostingTab: Locator;
  readonly VMPrice: Locator;
  readonly CPPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topBar = page.locator("xpath=//div[@id='top-bar']");
    this.header = page.locator("xpath=//div[@class='nav-line container hide-for-small-only clearfix']");
    this.footer = page.locator("xpath=//div[@id='footer-low']");
    this.menuButtom = page.locator("xpath=//div[@id='menu-bottom']");
    this.chooseWebHostButton = page.locator("xpath=//a[@class='button large']");
    this.VPSTab = page.locator("xpath=//a[@id='vps_hosting-label']");
    this.WebHostingTab = page.locator("xpath=//a[@id='shared_hosting-label']");
    this.VMPrice = page.locator("xpath=//div[text()[normalize-space()='VM-20G']]");
    this.CPPrice = page.locator("xpath=//div[text()='CP-START']");
  }

  async goto() {
    await this.page.goto("https://goodhoster.net/en/");
  }
}