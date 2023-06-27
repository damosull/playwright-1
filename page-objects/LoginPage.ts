import { expect, Locator, Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class LoginPage extends AbstractPage {
  // Define selectors:
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnSubmit: Locator;
  readonly msgError: Locator;
  // this locator is for the visual testing:
  readonly loginForm: Locator;

  // Init selectors using constructor:
  constructor(page: Page) {
    super(page);
    this.txtUsername = page.locator('#user_login');
    this.txtPassword = page.locator('#user_password');
    this.btnSubmit = page.locator('text=Sign in');
    this.msgError = page.locator('.alert-error');
    this.loginForm = page.locator('#login_form');
  }

  // Define login page methods
  async visit() {
    await this.page.goto('http://zero.webappsecurity.com/');
  }

  async login(username: string, password: string) {
    await this.txtUsername.type(username);
    await this.txtPassword.type(password);
    await this.btnSubmit.click();
    if (username === 'username') {
      // this if is needed due to a bug in the app
      await this.page.goto(
        'http://zero.webappsecurity.com/bank/transfer-funds.html'
      );
    }
  }

  async assertErrorMessage() {
    await expect(this.msgError).toContainText(
      'Login and/or password are wrong'
    );
  }

  async snapshotLoginForm() {
    await expect(await this.loginForm.screenshot()).toMatchSnapshot(
      'login-form.png'
    );
  }

  async snapshotErrorMessage() {
    await expect(await this.msgError.screenshot()).toMatchSnapshot(
      'login-error.png'
    );
  }
}
