import { Locator, Page } from '@playwright/test';

export class HomePage {
  // Define selectors:
  readonly page: Page;
  readonly btnSignIn: Locator;
  readonly txtSearch: Locator;
  readonly linkFeedback: Locator;

  // Init selectors using constructor:
  constructor(page: Page) {
    this.page = page;
    this.btnSignIn = page.locator('#signin_button');
    this.txtSearch = page.locator('#searchTerm');
    this.linkFeedback = page.locator('#feedback');
  }

  // Define home page methods
  async visit() {
    await this.page.goto('http://zero.webappsecurity.com/');
  }

  async clickOnSignIn() {
    await this.btnSignIn.click();
  }

  async clickOnFeedbackLink() {
    await this.linkFeedback.click();
  }

  async searchFor(phrase: string) {
    await this.txtSearch.type(phrase);
    await this.page.keyboard.press('Enter');
  }
}
