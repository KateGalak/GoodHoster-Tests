import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly topBar: Locator;
  readonly header: Locator;
  readonly footer: Locator;
  readonly menuButtom: Locator;
  readonly orderWebHostButton: Locator;
  readonly registerButton: Locator;
  readonly authorization: Locator;
  readonly phoneIcon: Locator;
  readonly makeMoney: Locator;
  readonly webHostTab: Locator;
  readonly vpsTab: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.topBar = page.locator("xpath=//div[@id='top-bar']");
    this.header = page.locator("xpath=//div[@class='nav-line container hide-for-small-only clearfix']");
    this.footer = page.locator("xpath=//div[@id='footer-low']");
    this.menuButtom = page.locator("xpath=//div[@id='menu-bottom']");
    this.orderWebHostButton = page.locator("xpath=//a[@class='button large']");
    this.registerButton = page.locator("xpath=//div[@class='register']");
    this.authorization = page.locator("xpath=//a[@title='Authorization']");
    this.phoneIcon = page.locator("xpath=//*[@class='icon-item phone']");
    this.makeMoney = page.locator("xpath=//a[@href='/en/hosting-docs/affiliate-program-partnership/']");
    this.webHostTab = page.locator("xpath=//*[@id='shared_hosting-label']");
    this.vpsTab = page.locator("xpath=//*[@id='vps_hosting-label']");

  }

  async goto() {
    await this.page.goto('https://goodhoster.net/en/');
  }  
}