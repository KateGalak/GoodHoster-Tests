import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly TopBar: Locator;
  readonly header: Locator;
  readonly foter: Locator;
  readonly menuButtom: Locator;
  readonly orderWebHostButton: Locator;
  readonly FirstWebHostingCard: Locator;
  readonly SecondWebHostingCard: Locator;
  readonly ThirdWebHostingCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.TopBar = page.locator("xpath=//div[@id='top-bar']");
    this.header = page.locator("xpath=//div[@class='nav-line container hide-for-small-only clearfix']");
    this.foter = page.locator("xpath=//div[@id='footer-low']");
    this.menuButtom = page.locator("xpath=//div[@id='menu-bottom']");
    this.orderWebHostButton = page.locator("xpath=//a[@class='button large']");
    this.FirstWebHostingCard = page.locator("xpath=//*[contains(text(),'CP-START')]");
    this.SecondWebHostingCard = page.locator("xpath=//*[contains(text(),'CP-4GB')]");
    this.ThirdWebHostingCard = page.locator("xpath=//*[contains(text(),'CP-PRO')]");
  }

  async goto() {
    await this.page.goto('https://goodhoster.net/en/');
  }

  async CheckURL() {
    await this.goto();
    await expect(this.page.url()).toContain("https://goodhoster.net/");
  }

  async ToPBarElements() {
    await this.goto();
    await expect(this.TopBar).toBeVisible();
  }

  async FooterElements() {
    await this.goto();
    await expect(this.foter).toBeVisible();
    await expect(this.menuButtom).toBeVisible();
  }

  async ContainText() {
    await this.goto();
    await expect(this.orderWebHostButton).toBeVisible();
    await expect(this.orderWebHostButton).toContainText("Choose a web-hosting")
  }

  async checkViseability() {
    await this.goto();
    await expect(this.FirstWebHostingCard).toHaveText('CP-START');
    await expect(this.SecondWebHostingCard).toHaveText('CP-4GB');
    await expect(this.ThirdWebHostingCard).toHaveText('CP-PRO');
  }

}