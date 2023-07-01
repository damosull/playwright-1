import { test } from '@playwright/test';
import { getRandomNumber, getRandomString } from '../../utils/data-helpers';

// Look at the README for more info on these tips

test.describe.parallel('Playwright Tips', () => {
  test('TestInfo Object', async ({ page }, testInfo) => {
    console.log(testInfo);
  });

  test('skip this test in Firefox', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it');
    // ...
  });

  test.fixme('test to be fixed', async ({ page }) => {
    await page.goto('http://localhost:3000/settings');
  });

  const people = ['Mike', 'Frank', 'Elon'];
  for (const name of people) {
    test(`Parameterized test running for ${name}`, async ({ page }) => {
      await page.goto('http://zero.webappsecurity.com/index.html');
      await page.type('#searchTerm', name);
    });
  }

  test('Mouse Movement', async ({ page }) => {
    await page.goto('https://www.example.com');
    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(0, 100);
    await page.mouse.up();
  });

  test('Multiple Pages/Tabs in 1 Browser Context', async ({ browser }) => {
    const context = await browser.newContext(); // 'context' is similar to a browser window
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();
    await page1.goto('https://www.example.com');
    await page2.goto('https://www.example.com');
    await page3.goto('https://www.example.com');
    await page1.waitForTimeout(50000);
  });

  test('Test Data Helpers - Get Random Number', async ({ page }) => {
    let newNumber = await getRandomNumber();
    console.log(newNumber);
  });

  test('Test Data Helpers - Get Random String', async ({ page }) => {
    let newString = await getRandomString();
    console.log(newString);
  });
});
