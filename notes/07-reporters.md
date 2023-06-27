# Playwright Reporters:

`--reporter=line` - Displays 1 line that's updated for each test (browser, test name, status, duration).
`--reporter=list` - Lists out each test (browser, test name, status, duration).
`--reporter=dot` - Displays a green dot or red F for each test result.
`--reporter=junit` - Generates test results in XML format which can be consumed by CI/CD systems or reporting tools, allowing for easy integration with other test frameworks.
`--reporter=html` - Generates a detailed HTML test report (summary of the test run, test case results, status, duration, error details, etc.)

# Professional Custom Reporting

- As mentioned previously, Playwright comes with some built-in reporting tools.
- However, some organisations find it useful to take a JSON file of the test results & plug that into their own tools.
- Therefore, we created `reporter.ts` in this project that generates a custom JSON report of the test run, which can be fed into other tools to generate test results.
- To use this, run `npx playwright test --reporter=reporter.ts`
- Issue: A major issue with the current implementation of reporter.ts is that - if you run 10 tests with the above command, each result overwrites the previous one. so I need to see how we can stop that.
- This issue is not the case when using the default Playwright reporters, so I think we should stick to those for now
