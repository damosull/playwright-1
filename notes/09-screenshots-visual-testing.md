# Taking a Screenshot during a test:

- You can take screenshots of the entire screen or an element on the screen.

  - Full page: `await page.screenshot({ path: 'screenshot.png', fullPage: true })`
  - Specific element on the page:

    ```
    const el = await page.$('h1')
    await el.screenshot({ path: 'screenshot.png' })
    ```

# Visual Testing - Full Page Screenshot

- Related files: [configs/visual.config.ts](configs/visual.config.ts) & [tests/visual](tests/visual) folder. _The only config changes are turning video & screenshots off & updating the test directory._

- Code snippet: `expect(await page.screenshot()).toMatchSnapshot('homepage.png');`

- 1st test run:
  - The test will fail, as there are no base snapshots to compare to.
  - Base screenshots will be generated _(i.e. `homepage-Chromium-win32.png`)_ under the [tests/visual](tests/visual) folder.
- 2nd test run:

  - The UI will be compared against the base screenshots mentioned above.

- _Note: When you run this test for the 1st time, a snapshot is only generated for **that browser**. Therefore, you have to run the test once for **each** of your browsers first, before the comparison will work (in order to generate the base screenshots for each browser)_.

- _Note: If you want to avoid the failure on the 1st test run above, pass the `--update-snapshots` flag to your run command. This will create your base snapshots & not fail your 1st test run._

# Visual Testing - Single Element Screenshot

- Code snippet:

  ```
  const pageElement = await page.$('h1');
  expect(await pageElement?.screenshot()).toMatchSnapshot('page-title.png');
  ```

- This testing behaves the exact same way as the Full Page screenshots above _(i.e. on first run, etc.)_

# Visual Testing - Updating Base Screenshots

- At some stage, you will need to update the base snapshots that are used as your expected results.
- How to create new base screenshots:
  - **Option 1**: Delete the existing .PNG files & run the test again.
  - **Option 2**: Pass the `--update-snapshots` flag to your run command if you want to update snapshots with actual results instead of comparing them. Use this when snapshot expectations have changed.
    - `npx playwright test --config=configs/visual.config.ts --project=Webkit --update-snapshots`

# Visual Testing Tool - Percy.io

- If you don't want to use the above visual testing, you can integrate Percy. Docs - https://docs.percy.io/docs/playwright
