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

# Test Generated Files:

- The only purpose for the `test-generated-files` folder is to store some PDF & PNG files generated after running some commands.
- The commands that generate these files can be found in notes/15-tips.md.
- This folder is not used for storing test failure screenshots/videos.

# Todo List:

1. Need to go through the sub folders within the tests folder in the README, just give a brief explanation on what's inside each, which configuration is linked to it, etc., & if there's anything specific about certain sub folders (i.e. having to run the visual tests once before they actually pass. For this example, instead of repeating, just add a link to the MD file in the notes section that explains it, rather than repeating yourself).
2. Use the README file to explain installation steps how to run the framework & where to find the test results. We need to stick to 1 reporting format so we can confirm the framework is working correctly. Might make sense to stick to the basic one as the base. We can then add a notes MD file that explains the steps needed in order to use other reporters (see if we can maybe update the existing 07-reporters.md for this?)

# E2E Tests:

- To be covered:
  - configs/e2e.config.ts file
  - page-objects folder, & components folder
  - e2e folder, & using-pom folder
- In your config file, you can use `testDir` to specify the path to your tests. This is useful if you only want to run certain tests.
- For the e2e tests, we created `configs/e2e.config.ts`. There aren't any changes except we turned off video/screenshots & updated the test directory to `tests/e2e`
- Inside `e2e`, there are several spec files for the test website.
- Inside `e2e`, there's also a `using-pom` folder that runs the same tests. The only difference is that these use POM. It's good to seperate them to show the differences & why POM is useful.
- Some of the POM specs aren't 100% converted to use POM, but they're good enough to show the benefits.
- There's also an Abstract Page POM file that was used alongside the LoginPage POM to show how to extend classes. If explaining this, show this one at the end so they're familiar with POMs first, as starting with the Abstract Page will confuse people.
- In the `page-objects` folder, there's a `components` folder where we can store components that are shared across several pages (navbar, etc.)
