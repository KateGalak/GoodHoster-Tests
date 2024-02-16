import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly topBar: Locator;
  readonly topBarRegistrationBlock: Locator;
  readonly topBarOnlineChat: Locator;
  readonly topBarLang: Locator;
  readonly topBarCurrency: Locator;
  readonly header: Locator;
  readonly footer: Locator;
  readonly footerLogo: Locator;
  readonly menuButtom: Locator;
  readonly orderWebHostButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.topBar = page.locator("xpath=//div[@id='top-bar']");
    this.topBarRegistrationBlock = page.locator("xpath=//div[@id='no-entered']");
    this.topBarOnlineChat = page.locator("xpath=//div[@id='online-chat-top-bar']");
    this.topBarLang = page.locator("xpath=//div[@id='lang']");
    this.topBarCurrency = page.locator("xpath=//div[@id='cur-list']");
    this.header = page.locator("xpath=//div[@class='nav-line container hide-for-small-only clearfix']");
    this.footer = page.locator("xpath=//div[@id='footer-low']");
    this.footerLogo = page.locator("xpath=//div[@class='medium-4 hide-for-small-only large-4 columns logo-foot']");
    this.menuButtom = page.locator("xpath=//div[@id='menu-bottom']");
    this.orderWebHostButton = page.locator("xpath=//a[@class='button large']")

  }

  async goto() {
    await this.page.goto('https://goodhoster.net/en/');
  }  
}