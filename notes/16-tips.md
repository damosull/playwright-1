# Test Info Object:

- Contains lots of info about your test _(output directories, configs, settings, etc.)_.
- This is useful if you have an internal monitoring/logging system, as we can take info from the `testInfo` object & pass it to the monitoring system to collect metrics, etc.
- If you want a specific piece of info you can use something like `testInfo.title`, `testInfo.file`, etc.
- See [tests/tips/tips.spec.ts](tests/tips/tips.spec.ts) for an example.

# Skip Browser Annotation

- Useful if you have a feature that's not been implemented yet for a specific browser _(i.e. it works in Webkit, but not in Firefox)_
- See [tests/tips/tips.spec.ts](tests/tips/tips.spec.ts) for an example.

# `Fixme` Annotation

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

- Useful if you want to convert a webpage or form into PDF: `npx playwright pdf https://www.example.com test-generated-files/my-file.pdf`

# Generate Customised Screenshots

- You can also generate customised screenshots by using commands like `npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 twitter.com test-generated-files/twitter-iphone-image.png`

# Emulate Browser Language & Timezone

- `npx playwright open --timezone="Europe/Rome" --lang="it-IT" google.com`

# Test Data Helpers - Get Random Number

- See `utils/data-helpers.ts` file in the root of your project for examples (these examples are also used in `tips.spec.ts`)
