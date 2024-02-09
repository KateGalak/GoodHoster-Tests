import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly topBar: Locator;
  readonly header: Locator;
  readonly footer: Locator;
  readonly menuButtom: Locator;
  readonly orderWebHostButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.topBar = page.locator("xpath=//div[@id='top-bar']");
    this.header = page.locator("xpath=//div[@class='nav-line container hide-for-small-only clearfix']");
    this.footer = page.locator("xpath=//div[@id='footer-low']");
    this.menuButtom = page.locator("xpath=//div[@id='menu-bottom']");
    this.orderWebHostButton = page.locator("xpath=//a[@class='button large']")

  }

  async goto() {
    await this.page.goto('https://goodhoster.net/en/');
  }  
}