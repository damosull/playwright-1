import { test, expect } from '@playwright/test';

test.describe('Filter Transactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.type('#user_login', 'username');
    await page.type('#user_password', 'password');
    await page.click('text=Sign in');
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html');
  });

  test('Verify the results for each account', async ({ page }) => {
    await page.click('#account_activity_tab');
    await page.selectOption('#aa_accountId', '2');
    const checkingAccount = await page.locator(
      '#all_transactions_for_account tbody tr'
    );
    await expect(checkingAccount).toHaveCount(3); // assert the table only has 3 rows

    await page.selectOption('#aa_accountId', '4');
    const loanAccount = await page.locator(
      '#all_transactions_for_account tbody tr'
    );
    await expect(loanAccount).toHaveCount(2); // assert the table only has 2 rows

    await page.selectOption('#aa_accountId', '6');
    const noResults = await page.locator('.well');
    await expect(noResults).toBeVisible(); // assert the 'no results' message appears instead of the table
  });
});
