# Getting Started:

- The [configs](configs) folder contains the configurations for various sets of tests.
  - These configs are fairly similar, the only major differences are the test directory file path & whether or not videos/screenshots are turned on.
- The [notes](notes) folder contains basic notes on some topics _(as setting up a basic framework, Playwright Reporters, etc.)_
- The [page-objects](page-objects) folder is explained in [notes/16-page-objects.md](notes/16-page-objects.md)
- The only purpose for the [test-generated-files](test-generated-files) folder is to store some PDF & PNG files generated after running some commands.
  - The commands that generate these files can be found in [notes/15-tips.md](notes/15-tips.md).
  - This folder is not used for storing test failure screenshots or videos.
- The [utils](utils) folder is explained in [notes/11-custom-functions.md](notes/11-custom-functions.md) & [notes/15-tips.md](notes/15-tips.md).

# Test Files/Folders:

- API tests - [tests/api](tests/api)
- E2E tests for http://zero.webappsecurity.com/ _(incl. POM examples)_ - [tests/e2e](tests/e2e)
- Playwright tips - [tests/tips](tests/tips)
- Visual tests - [tests/visual](tests/visual)
- Basic tests for http://zero.webappsecurity.com/ - [tests/example.spec.ts](tests/example.spec.ts)

# PlayWright Installation & writing your first test:

- See [notes/01-set-up-steps.md](notes/01-set-up-steps.md)

# How to run this test framework:

1. Run `npm install` to install the project dependencies.
2. Run one of the test commands _(i.e. `npm run test:chrome`)_. See [package.json](package.json) for more sample commands.

# Test Results / Test Reporting:

- Running this test framework as-is using `npm run test:chrome` will run all tests in the Chrome browser & capture screenshots and videos of all test failures. However, a HTML report will not be generated by default.
- See [notes/07-reporters.md](notes/07-reporters.md) for more information on reporting.

# Artifacts on Fail (Videos & Screenshots):

- See [notes/08-screenshots-on-failure.md](notes/08-screenshots-on-failure.md).

# Visual Testing:

- See [notes/09-screenshots-visual-testing.md](notes/09-screenshots-visual-testing.md).
