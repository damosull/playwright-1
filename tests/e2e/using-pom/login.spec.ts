import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../page-objects/LoginPage';
import { HomePage } from '../../../page-objects/HomePage';

test.describe.parallel('Login / Logout Flow', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await homePage.visit();
  });

  test('Negative Scenario', async ({ page }) => {
    await homePage.clickOnSignIn();
    await loginPage.login('invalid username', 'invalid password');
    await loginPage.wait(3000); // not required, but showing it how we can use functions from extended classes
    await loginPage.assertErrorMessage();
  });

  test('Positive Scenario', async ({ page }) => {
    await homePage.clickOnSignIn();
    await loginPage.login('username', 'password');
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html');

    const accountSummaryTab = await page.locator('#account_summary_tab');
    await expect(accountSummaryTab).toBeVisible();

    await page.goto('http://zero.webappsecurity.com/logout.html');
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html');
  });
});
