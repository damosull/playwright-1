# Playwright Reporters:

`--reporter=line` - Displays 1 line that's updated for each test (browser, test name, status, duration).
`--reporter=list` - Lists out each test (browser, test name, status, duration).
`--reporter=dot` - Displays a green dot or red F for each test result.
`--reporter=junit` - Generates test results in XML format which can be consumed by CI/CD systems or reporting tools, allowing for easy integration with other test frameworks.
`--reporter=html` - Generates a detailed HTML test report (summary of the test run including test case results, status, duration, error details, etc.) in the `playwright-report` folder

# Professional Custom Reporting

- Related files: `reporter.ts` & `test-results.json`
- As mentioned previously, Playwright comes with some built-in reporting tools.
- However, some companies like to take the test results (in JSON format) & plug that into their own tools.
- Therefore, we created `reporter.ts` in this project which = generates a custom JSON report of the test run. This JSON can then be fed into other tools to generate test reports.
- To use this reporter, run `npx playwright test --reporter=reporter.ts`
- After running this command, the test results can be found in `test-results.json` in the root directory.
- Issue: A major issue with the current implementation of reporter.ts is that - if you run 10 tests with the above command, each test overwrites the previous one's results. so I need to see how we can stop that.
- This issue is not the case when using the default Playwright reporters, so I think we should stick to those for now

WHEN ARE THEY GENERATED?
BY WHAT COMMAND?
WHAT'S THE DEFAULT ONE WE'RE GOING WITH? PICK 1 REPORTER & STICK WITH IT. THEN EXPLAIN THE CHANGES REQUIRED TO USE OTHERS
