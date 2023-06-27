# Installation Steps:

1. `npm i prettier`
   a. Create `.prettierrc` file in the root:

```
{
"semi": true,
"singleQuote": true
}
```

2. `npm i @playwright/test`

3. `npx playwright install` - to install the required browsers

# First Test:

1. Create a `tests` folder
2. Create `example.spec.ts` in this folder
3. Add the following code:

```
import { test, expect } from '@playwright/test';

test('Simple basic test', async ({ page }) => {
  await page.goto('https://www.example.com');
  const pageTitle = await page.locator('h1');
  await expect(pageTitle).toContainText('Example Domain');
});
```

# Some CLI Options:

- `--headed` (run in headed mode)
- `--browser=firefox` (run in specific browser)
- `--browser=all` (run in all browsers)
- `npx playwright test tests/example.spec.ts` (path to your test)

# Locators / Selectors:

- Text: `await page.click('text=some text')`
- CSS selectors:
  - Element type: `await page.click('button')`
  - ID: `await page.click('#id')`
  - Class: `await page.click('.class')`
- Only Visible CSS selector: `await page.click('.submit-button:visible')` - Note: this clicks the 1st visible element with this class. If there are multiple matching elements, only the 1st one is clicked.
- Combinations: `await page.click('#username .first')`
- XPath: `await page.click('//button')`

# Annotations:

- `test.skip` skips this test.
- `test.only` only run this test. Note: If you add this annotation to multiple tests, all of the tests with this annotation will run.
- `test.describe` helps us group test cases together into logical groups or test suites. Simply place your `test`s into the `describe` function

# Tags (used to specify which tests to run):

- Add your tag inside the test case or describe block name: `test('Assertion @myTag', ...)`
- `npx playwright test --grep @myTag` runs only the tests with this tag.
- `npx playwright test --grep-invert @myTag` runs all tests except those with this tag.
- The `grep` flag specifies a regular expression pattern that's used to filter the tests.

# Playwright Configuration:

- We'll likely need different configurations for different environments.
- Customising the config options in this file allows us to control various aspects of the test execution (browser settings, timeouts, retries, etc.), allowing us to tailor the test execution environment to our specific requirements.
- Create a `playwright.config.ts` file in the project root.
- Example:

```
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
};

export default config;
```

'Use' option:

- The `use` options define the settings to be used during the test execution.
- The top level `use` option defines the default config settings that apply to all projects in the `projects` array. These settings are the baseline for all projects.
- The project-specific `use` option overrides or supplements the default config defined at the top level. It allows us to customer the browser settings for each project individually (i.e. different browser names)
- The project-specific `use` option takes precedence over the default settings defined at the top level. If a setting isn't specified in the projects `use` option, the default value from the top-level option will be used.
- These options give us the flexibility to define common config settings for all projects while also being able to customise settings for individual projects.

'Projects' option:

- Typically, we want a seperate `project` for each browser.
- The `projects` option allows us to define multiple browser environments to run our tests against.

How to specify a config:
`npx playwright test --config=playwright.config.ts --project=Webkit`

# Reporters:

`--reporter=line` - Displays 1 line that's updated for each test (browser, test name, status, duration).
`--reporter=list` - Lists out each test (browser, test name, status, duration).
`--reporter=dot` - Displays a green dot or red F for each test result.
`--reporter=junit` - Generates test results in XML format which can be consumed by CI/CD systems or reporting tools, allowing for easy integration with other test frameworks.
`--reporter=html` - Generates a detailed HTML test report (summary of the test run, test case results, status, duration, error details, etc.)

# Screenshots:

- You can take screenshots of the entire screen or an element on the screen.
- Full page: `await page.screenshot({ path: 'screenshot.png', fullPage: true })`
- Specific element on the page:

```
const el = await page.$('h1')
await el.screenshot({ path: 'screenshot.png' })
```

# Before & After Hooks:

- As usual, there are `beforeAll`, `beforeEach`, `afterAll`, & `afterEach` hooks.

```
test.beforeEach(async ({ page }) => {
  console.log('In a beforeEach() hook');
});
```

# Custom Functions:

1. Add your helper/reusable functions to a file like `helpers.ts`:

```
export async function loadHomepage(page) {
  await page.goto('https://www.example.com');
}
```

2. Import these functions in your spec file: `import { assertHeader } from '../helpers'`
3. Use it: `await assertTitle(page)`

# Node Scripts:

- You can create scripts to run tests in each browser, different environments, etc.
- See 'scripts' in `package.json`

# UI Inspector (very useful):

- Allows us to stop execution at any point & interactively inspect/debug the UI.
- Gives us a visual representation of the page's DOM, allowing us to explore elements, inspect their properties, & test CSS/XPath locators.
- You can hover over elements to get locators, & enter locators to test they pick up the correct elements.
- Add `await page.pause()` to your test & run in headed mode (`-- --headed`).
- The test will run, it will stop when it hits this line, & the inspector will appear.
- Click the Play button to resume the test.

# Artifacts on Fail (videos & screenshots):

- In `playwright.config.ts`, we've previously set video & screenshot to `off`.
- All you need to do is set the following:

```
video: 'retain-on-failure',
screenshot: 'only-on-failure',
```

- Now, when a test fails a `test-results` folder will be generated by default, & videos/screenshots will be added inside that.

# Parallel Test Execution:

mark test suite as parallel

`test.describe.parallel('Hooks', ()....)`

- Now, all tests inside this test suite will run concurrently rather than consecutively.

# E2E Tests:

- To be covered:
  - e2e.config.ts file
  - page-objects folder, & components folder
  - e2e folder, & using-pom folder
- In your config file, you can use `testDir` to specify the path to your tests. This is useful if you only want to run certain tests.
- For the e2e tests, we created `e2e.config.ts`. There aren't any changes except we turned off video/screenshots & updated the test directory to `tests/e2e`
- Inside `e2e`, there are several spec files for the test website.
- Inside `e2e`, there's also a `using-pom` folder that runs the same tests. The only difference is that these use POM. It's good to seperate them to show the differences & why POM is useful.
- Some of the POM specs aren't 100% converted to use POM, but they're good enough to show the benefits.
- There's also an Abstract Page POM file that was used alongside the LoginPage POM to show how to extend classes. If explaining this, show this one at the end so they're familiar with POMs first, as starting with the Abstract Page will confuse people.
- In the `page-objects` folder, there's a `components` folder where we can store components that are shared across several pages (navbar, etc.)

# Visual Testing (Full Page Screenshot)

- Required:

  - `visual.config.ts` - only changes are turning video/screenshots off & updating the test directory.
  - `tests/visual` spec folder.

- Code snippet: `expect(await page.screenshot()).toMatchSnapshot('homepage.png');`

- 1st time you run this test, it will fail, as there is no base screenshot to compare to.
- Running the test for the 1st time, will generate a base screenshot (i.e. `homepage-Chromium-win32.png`) under the `visual` folder.
- Running the test for the 2nd time, it should compare against this base screenshot & pass.

- Note: The above code only generates a file for the browser you ran the 1st test in. Therefore you have to run the test once for each of your browsers first, before the comparison will work (in order to generate the base screenshots for each browser)

MY QUESTIONS:

1. But the base screenshot isn't named 'homepage.png', so how is the test passing?
2. There must be a better way to get this set up rather than fail the tests each time, no?

# Visual Testing (Single Element Screenshot)

- Code snippet:

```
const pageElement = await page.$('h1');
expect(await pageElement?.screenshot()).toMatchSnapshot('page-title.png');
```

- This testing behaves the exact same way as the Full Page screenshots above (i.e. on first run, etc.)

# Visual Testing (Updating Base Screenshots)

- How to create new base screenshots:
  - Option 1: Delete the existing .png files & run the test again.
  - Option 2: Pass the `--update-snapshots` flag to your run command
    - `npx playwright test --config=visual.config.ts --project-Webkit --update-snapshots`

MY QUESTION:

1. If you ran this update-snapshots command the first time,
   (a) Would the test fail?
   (b) Would the base screenshots be generated?

# Percy.io (Visual Testing Tool)

- If you don't want to use the above visual testing, you can integrate Percy.
- Docs: https://docs.percy.io/docs/playwright

# API Testing

- Required: `api.config.ts` config file (only change is setting testDir to `tests/api`)
- Everything else is included in Playwright by default.

#### Tips:

# Test Info Object:

- This contains lots of info about your test (output directories, configs, settings, etc.)
- How to access this inside your test:
- This is useful if you have an internal monitoring/logging system, as we can take info from testInfo object & pass it to the monitoring system to collect metrics, etc.
- if you want a specific part of testInfo, use `testInfo.title`, `testInfo.file`, etc.
- See tips.spec.ts for an example.

# Skip Browser Annotation

- Useful if you have a feature that's not been implemented yet for a specific browser (i.e. it works in Webkit, but not in Firefox)
- See tips.spec.ts for an example.

# Fixme Annotation

- Some tests are skipped because they're outdated, waiting for something, etc. (`test.skip(...)`)
- Some tests are skipped because they're flaky, or there's a bug in the automation code (`test.fixme(...)`).
  - For these, you could use the same `test.skip()` as we've done previously, but it's best practice to use `.fixme` if there's an issue with the test code.
- See tips.spec.ts for an example.

# Retries

- Useful if you have flaky tests, or want to re-run a test if it fails
- Multiple different ways to do this (i.e. setting it in your config file)
  - The easiest way is to pass `--retries=3` in your test command.
  - Now, if your test fails, it will retry 3 more times. If it fails on the final retry, the test will fail.

# Parameterized Tests

- You can use loops to parameterize test cases.
- You can use this for whatever you like. For example, to name your tests, to re-run the same test with different data (that's stored in the array), to run the same test a certain number of times, etc.
- See tips.spec.ts for an example.

# Mouse Movement

- See tips.spec.ts for an example.

# Multiple Browser Pages/Tabs

- Browser -> Context -> Page ----> TODO: Need to get more theory on this
  - 'Context' is similar to a Browser window. Therefore, you can add multiple pages/tabs to the same browser 'Context'

# Device Emulation

- If you need to emulate a device using Playwright: `npx playwright open --device="iPhone 11" wikipedia.org`

# Generate PDF Files

- Useful if you want to convert a webpage or form into PDF: `npx playwright pdf https://www.example.com my-file.pdf`

# Generate Customised Screenshots

- You can also generate customised screenshots by using commands like `npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone-image.png`

# Emulate Browser Language & Timezone

- `npx playwright open --timezone="Europe/Rome" --lang="it-IT" google.com`

# Test Data Helpers - Get Random Number

- See `utils/data-helpers.ts` file in the root of your project for examples (these examples are also used in `tips.spec.ts`)

### New Section: Professional Custom Reporting

- As mentioned previously, Playwright comes with some built-in reporting tools.
- However, some organisations find it useful to take a JSON file of the test results & plug that into their own tools.
- Therefore, we created `reporter.ts` in this project that generates a custom JSON report of the test run, which can be fed into other tools to generate test results.
- To use this, run `npx playwright test --reporter=reporter.ts`
- Issue: A major issue with the current implementation of reporter.ts is that - if you run 10 tests with the above command, each result overwrites the previous one. so I need to see how we can stop that.
- This issue is not the case when using the default Playwright reporters, so I think we should stick to those for now
