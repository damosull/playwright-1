import { test } from '@playwright/test';
import { HomePage } from '../../../page-objects/HomePage';
import { FeedbackPage } from '../../../page-objects/FeedbackPage';

test.describe.parallel('Feedback Form', () => {
  let homePage: HomePage;
  let feedbackPage: FeedbackPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    feedbackPage = new FeedbackPage(page);

    homePage.visit();
    homePage.clickOnFeedbackLink();
  });

  test('Reset Feedback Form', async ({ page }) => {
    await feedbackPage.fillForm(
      'john smith',
      'user@gmail.com',
      'test subject',
      'some comments'
    );
    await feedbackPage.resetForm();
    await feedbackPage.assertReset();
  });

  test('Submit Feedback Form', async ({ page }) => {
    await feedbackPage.fillForm(
      'john smith',
      'user@gmail.com',
      'test subject',
      'some comments'
    );
    await feedbackPage.submitForm();
    await feedbackPage.feedbackFormSent();
  });
});
