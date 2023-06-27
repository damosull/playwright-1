import { test, expect } from '@playwright/test';

test.describe.parallel('Feedback Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#feedback');
  });

  test('Reset Feedback Form', async ({ page }) => {
    await page.type('#name', 'john smith');
    await page.type('#email', 'user@gmail.com');
    await page.type('#subject', 'test subject');
    await page.type('#comment', 'some comments');
    await page.click('input[name="clear"]');

    const nameInput = await page.locator('#name');
    const commentInput = await page.locator('#comment');
    await expect(nameInput).toBeEmpty();
    await expect(commentInput).toBeEmpty();
  });

  test('Submit Feedback Form', async ({ page }) => {
    await page.type('#name', 'john smith');
    await page.type('#email', 'user@gmail.com');
    await page.type('#subject', 'test subject');
    await page.type('#comment', 'some comments');
    await page.click('input[name="submit"]');
    await page.waitForSelector('#feedback-title');
  });
});
