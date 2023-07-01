# Notes

- The notes folder contains very basic notes on topics like getting a framework up & running to Playwright reporters, etc.

# Configs

- The configs folder contains the configurations for various types of tests.
- These configs are fairly similar, the only major differences are the test directory file path & whether or not videos/screenshots are turned on.

# Todo List:

1. Move page-objects to a support folder or the utils folder. I think I might rename utils to support, but double check if it's somethign different.
2. Where to put helpers.ts?
3. Where to put the generated screenshots & PDFs? Maybe create a screenshots folder & PDFs folder @ project root & specify that path in all tests where screenshots are taken?
4. What to do w. the test-results folder? What to do w. the playwright-report folder? When are these generated? By what command? And is that the default one we're going with? Need to pick 1 reporter, stick with it & then outline steps required to use the others
5. Need to go through the sub folders within the tests folder in the README, just give a brief explanation on what's inside each, which configuration is linked to it, etc., & if there's anything specific about certain sub folders (i.e. having to run the visual tests once before they actually pass. For this example, instead of repeating, just add a link to the MD file in the notes section that explains it, rather than repeating yourself).
6. As part of Point 6 above, update the 'E2E Tests' section in the README below to follow that approach.
7. Use the README file to explain installation steps how to run the framework & where to find the test results. We need to stick to 1 reporting format so we can confirm the framework is working correctly. Might make sense to stick to the basic one as the base. We can then add a notes MD file that explains the steps needed in order to use other reporters (see if we can maybe update the existing 07-reporters.md for this?)

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
