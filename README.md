# notes Folder:

- This folder contains very basic notes on topics such as setting up a basic Framework to Playwright Reporters, etc.

# PlayWright Installation & writing your first test:

- See [notes/01-set-up-steps.md](notes/01-set-up-steps.md)

# How to run this framework:

1. Run `npm install` to install the project dependencies.
2. Run one of the test commands (i.e. `npm run test:chrome`)

# Test Results / Test Reporting:

- See notes/07-reporters.md.
  Todo: add link in above

# configs Folder:

- This folder contains the configurations for various sets of tests.
- These configs are fairly similar, the only major differences are the test directory file path & whether or not videos/screenshots are turned on.

# Artifacts on Fail (Videos & Screenshots):

- See notes/08-screenshots-on-failure.md.
  Todo: add link in above

# Test Files/Folders:

- api - sample API tests
- e2e - sample E2E tests of the 'zero.webappsecurity.com' test application, including POM examples.
- tips - sample Playwright tips
- visual - sample Visual tests
- example.spec.ts - basic tests of the 'zero.webappsecurity.com' test application.

# Visual Testing:

- See notes/09-screenshots-visual-testing.md.
  Todo: add link in above

# utils Folder:

- See notes/10-custom-functions.md & notes/15-tips.md
  Todo: add link in above

# page-objects Folder

- This stores the usual page object model (POM) files.
- The `components` subfolder stores components which are shared across multiple pages (i.e. navbar)
- These POMS are used in the `tests/e2e/using-pom` folder. The only difference between these tests & the `tests/e2e` tests is that these ones use POM. It's useful to separate these to show the differences & why POM is useful.
- There's also an 'Abstract Page' POM file that is used alongside the LoginPage POM to show how to extend classes. When explaining this, show this at the end so they're familiar with POMs first, as starting with the Abstract Page will confuse people.

# Test Generated Files:

- The only purpose for the `test-generated-files` folder is to store some PDF & PNG files generated after running some commands.
- The commands that generate these files can be found in notes/15-tips.md.
- This folder is not used for storing test failure screenshots/videos.
