import { expect, Locator, Page } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  readonly sltPayee: Locator;
  readonly btnPayeeDetail: Locator;
  readonly payeeDetail: Locator;
  readonly sltAccount: Locator;
  readonly inputAmount: Locator;
  readonly inputDate: Locator;
  readonly inputDescription: Locator;
  readonly btnSubmitPayment: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sltPayee = page.locator('#sp_payee');
    this.btnPayeeDetail = page.locator('#sp_get_payee_details');
    this.payeeDetail = page.locator('#sp_payee_details');
    this.sltAccount = page.locator('#sp_account');
    this.inputAmount = page.locator('#sp_amount');
    this.inputDate = page.locator('#sp_date');
    this.inputDescription = page.locator('#sp_description');
    this.btnSubmitPayment = page.locator('#pay_saved_payees');
    this.message = page.locator('#alert_content > span');
  }

  async createPayment() {
    await this.sltPayee.selectOption('apple');
    await this.btnPayeeDetail.click();
    await expect(this.payeeDetail).toBeVisible();
    await this.sltAccount.selectOption('6');
    await this.inputAmount.type('5000');
    await this.inputDate.type('2021-11-09');
    await this.inputDescription.type('Some message');
    await this.btnSubmitPayment.click();
  }

  async assertSuccessMessage() {
    await expect(this.message).toBeVisible();
    await expect(this.message).toContainText(
      'The payment was successfully submitted'
    );
  }
}
