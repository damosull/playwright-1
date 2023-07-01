import { test, expect } from '@playwright/test';
import { loadHomepage, assertTitle } from '../utils/page-helpers';

test.describe.parallel('Examples', () => {
  test('Simple basic test', async ({ page }) => {
    await page.goto('https://www.example.com');
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toContainText('Example Domain');
  });

  test('Click on Element & Validate Error Message', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');

    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText(
      'Login and/or password are wrong.'
    );
  });

  test('Working with Inputs - invalid login scenario', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');

    await page.type('#user_login', 'some username');
    await page.type('#user_password', 'some password');
    await page.click('text=Sign in');

    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText(
      'Login and/or password are wrong.'
    );
  });

  test('Assertions', async ({ page }) => {
    await page.goto('https://www.example.com');
    await expect(page).toHaveURL('https://www.example.com');
    await expect(page).toHaveTitle('Example Domain');

    const element = await page.locator('h1');
    await expect(element).toBeVisible();
    await expect(element).toHaveText('Example Domainf');
    await expect(element).toHaveCount(1);

    const nonExistingelement = await page.locator('h5');
    await expect(nonExistingelement).not.toBeVisible();
  });

  test.describe('My First Test Suite @myTag', () => {
    test('Test One', async ({ page }) => {});
    test('Test Two', async ({ page }) => {});
  });

  test.beforeEach(async ({ page }) => {
    console.log('In a beforeEach() hook');
  });

  test('Custom Helpers', async ({ page }) => {
    await loadHomepage(page);
    await assertTitle(page);
  });
});
