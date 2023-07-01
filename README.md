# Getting Started:

- The [notes](notes) folder contains some basic notes on topics such as setting up a basic Framework to Playwright Reporters, etc.
- The [configs](configs) folder contains the configurations for various sets of tests.
  - These configs are fairly similar, the only major differences are the test directory file path & whether or not videos/screenshots are turned on.

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

# Test Files/Folders:

- API tests - [tests/api](tests/api)
- E2E tests for http://zero.webappsecurity.com/ _(incl. POM examples)_ - [tests/e2e](tests/e2e)
- Playwright tips - [tests/tips](tests/tips)
- Visual tests - [tests/visual](tests/visual)
- Basic tests for http://zero.webappsecurity.com/ - [tests/example.spec.ts](tests/example.spec.ts)

# Visual Testing:

- See [notes/09-screenshots-visual-testing.md](notes/09-screenshots-visual-testing.md).

# 'utils' Folder:

- See [notes/11-custom-functions.md](notes/11-custom-functions.md) & [notes/16-tips.md](notes/16-tips.md)

# 'page-objects' Folder

- This stores the usual page object model (POM) files.
- The [components](page-objects/components) sub-folder stores components which are shared across multiple pages _(i.e. navbar)_
- These POMs are used in the [tests/e2e/using-pom](tests/e2e/using-pom) tests. The only difference between these tests & the [tests/e2e/](tests/e2e/) tests is that these ones use POM. It's useful to separate these to show the differences & why POM is useful.
- There's also an [Abstract Page](page-objects/AbstractPage.ts) POM file that is used alongside the [Login Page](page-objects/LoginPage.ts) POM to show how to extend classes. When explaining this, show this at the end so they're familiar with POMs first, as starting with the _Abstract Page_ will confuse people.

# Test Generated Files:

- The only purpose for the [test-generated-files](test-generated-files) folder is to store some PDF & PNG files generated after running some commands.
- The commands that generate these files can be found in [notes/16-tips.md](notes/16-tips.md).
- This folder is not used for storing test failure screenshots or videos.
