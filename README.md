# notes Folder:

- This folder contains very basic notes on topics such as setting up a basic Framework to Playwright Reporters, etc.

# configs Folder:

- This folder contains the configurations for various sets of tests.
- These configs are fairly similar, the only major differences are the test directory file path & whether or not videos/screenshots are turned on.

# Test Results / Test Reporting:

- See notes/07-reporters.md.
  Todo: add link in above

# Artifacts on Fail (Videos & Screenshots):

- See notes/08-screenshots-visual-testing.md.
  Todo: add link in above

# Scripts:

# page-objects Folder

- This stores the usual page object model (POM) files.
- The `components` subfolder stores components which are shared across multiple pages (i.e. navbar)
- These POMS are used in the `tests/e2e/using-pom` folder. The only difference between these tests & the `tests/e2e` tests is that these ones use POM. It's useful to separate these to show the differences & why POM is useful.
- There's also an 'Abstract Page' POM file that is used alongside the LoginPage POM to show how to extend classes. When explaining this, show this at the end so they're familiar with POMs first, as starting with the Abstract Page will confuse people.

# Test Generated Files:

- The only purpose for the `test-generated-files` folder is to store some PDF & PNG files generated after running some commands.
- The commands that generate these files can be found in notes/15-tips.md.
- This folder is not used for storing test failure screenshots/videos.

# Todo List:

1. Need to go through the sub folders within the tests folder in the README, just give a brief explanation on what's inside each, which configuration is linked to it, etc., & if there's anything specific about certain sub folders (i.e. having to run the visual tests once before they actually pass. For this example, instead of repeating, just add a link to the MD file in the notes section that explains it, rather than repeating yourself).
2. Use the README file to explain installation steps how to run the framework & where to find the test results. We need to stick to 1 reporting format so we can confirm the framework is working correctly. Might make sense to stick to the basic one as the base. We can then add a notes MD file that explains the steps needed in order to use other reporters (see if we can maybe update the existing 07-reporters.md for this?)
