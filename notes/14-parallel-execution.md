# Parallel Test Execution:

- In order to run all tests within a test suite in parallel, all you need to do is add `.parallel` like so:

  ```
  test.describe.parallel('Hooks', ()....)
  ```

- Now, all tests inside this test suite will run concurrently rather than consecutively.
