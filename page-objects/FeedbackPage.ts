import { expect, Locator, Page } from '@playwright/test';

export class FeedbackPage {
  // Define selectors:
  readonly page: Page;
  readonly txtName: Locator;
  readonly txtEmail: Locator;
  readonly txtSubject: Locator;
  readonly txtComment: Locator;
  readonly btnClear: Locator;
  readonly btnSubmit: Locator;
  readonly feedbackTitle: Locator;

  // Init selectors using constructor:
  constructor(page: Page) {
    this.page = page;
    this.txtName = page.locator('#name');
    this.txtEmail = page.locator('#email');
    this.txtSubject = page.locator('#subject');
    this.txtComment = page.locator('#comment');
    this.btnClear = page.locator('input[name="clear"]');
    this.btnSubmit = page.locator('input[name="submit"]');
    this.feedbackTitle = page.locator('#feedback-title');
  }

  // Define feedback page methods
  async fillForm(
    name: string,
    email: string,
    subject: string,
    comment: string
  ) {
    await this.txtName.type(name);
    await this.txtEmail.type(email);
    await this.txtSubject.type(subject);
    await this.txtComment.type(comment);
  }

  async resetForm() {
    await this.btnClear.click();
  }

  async submitForm() {
    await this.btnSubmit.click();
  }

  async assertReset() {
    await expect(this.txtName).toBeEmpty();
    await expect(this.txtComment).toBeEmpty();
  }

  async feedbackFormSent() {
    await expect(this.feedbackTitle).toBeVisible();
  }
}
