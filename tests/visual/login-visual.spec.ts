import { test } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe.parallel('Login Page Visual Testing', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.visit();
    await homePage.clickOnSignIn();
  });

  test('Full Page Screenshot - Login Form', async () => {
    await loginPage.snapshotLoginForm();
  });

  test('Single Element Screenshot - Login Error Message', async () => {
    await loginPage.login('Fail', 'some invalid password');
    await loginPage.snapshotErrorMessage();
  });
});
