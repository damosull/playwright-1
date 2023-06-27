# Tags (used to specify which tests to run):

- Add your tag inside the test case or describe block name: `test('Assertion @myTag', ...)`
- `npx playwright test --grep @myTag` runs only the tests with this tag.
- `npx playwright test --grep-invert @myTag` runs all tests except those with this tag.
- The `grep` flag specifies a regular expression pattern that's used to filter the tests.
