import { expect, type Locator, type Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly topBar: Locator;
  readonly registerBtn: Locator;
  readonly header: Locator;
  readonly footer: Locator;
  readonly fotterCopyright: Locator;
  readonly menuButtom: Locator;
  readonly orderWebHostButton: Locator;
  readonly webHostingTab: Locator;
  readonly vpsTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topBar = page.locator("xpath=//div[@id='top-bar']");
    this.registerBtn = page.locator("//div[@class='register']");
    this.header = page.locator("xpath=//div[@class='nav-line container hide-for-small-only clearfix']");
    this.footer = page.locator("xpath=//div[@id='footer-low']");
    this.fotterCopyright = page.locator("//*[contains(text(), '©')]");
    this.menuButtom = page.locator("xpath=//div[@id='menu-bottom']");
    this.orderWebHostButton = page.locator("xpath=//a[@class='button large']");
    this.webHostingTab = page.locator("//a[@id='shared_hosting-label']");
    this.vpsTab = page.locator("//a[@id='vps_hosting-label']");
  }

  async goto() {
    await this.page.goto('https://goodhoster.net/en/');
  }
}