# Taking a Screenshot during a test:

- You can take screenshots of the entire screen or an element on the screen.

  - Full page: `await page.screenshot({ path: 'screenshot.png', fullPage: true })`
  - Specific element on the page:

    ```
    const el = await page.$('h1')
    await el.screenshot({ path: 'screenshot.png' })
    ```

# Visual Testing - Full Page Screenshot

- Required:

  - `configs/visual.config.ts` - only changes are turning video/screenshots off & updating the test directory.
  - `tests/visual` spec folder.

- Code snippet: `expect(await page.screenshot()).toMatchSnapshot('homepage.png');`

- 1st time you run this test, it will fail, as there is no base screenshot to compare to.
- Running the test for the 1st time, will generate a base screenshot (i.e. `homepage-Chromium-win32.png`) under the `tests/visual` folder.
- On the 2nd test run, the UI will be compared against this base screenshot.

- NB: The above code only generates a file for the browser you ran the 1st test in. Therefore you have to run the test once for each of your browsers first, before the comparison will work (in order to generate the base screenshots for each browser)

# Visual Testing - Single Element Screenshot

- Code snippet:

```
const pageElement = await page.$('h1');
expect(await pageElement?.screenshot()).toMatchSnapshot('page-title.png');
```

- This testing behaves the exact same way as the Full Page screenshots above (i.e. on first run, etc.)

# Visual Testing - Updating Base Screenshots

- At some stage, you will need to update the base snapshots that are used as your expected results.
- How to create new base screenshots:
  - Option 1: Delete the existing .png files & run the test again.
  - Option 2: Pass the `--update-snapshots` flag to your run command if you want to update snapshots with actual results instead of comparing them. Use this when snapshot expectations have changed.
    - `npx playwright test --config=configs/visual.config.ts --project-Webkit --update-snapshots`

TODO - MY QUESTION:

1. If you ran this update-snapshots command the first time,
   (a) Would the test fail?
   (b) Would the base screenshots be generated?

# Visual Testing Tool - Percy.io

- If you don't want to use the above visual testing, you can integrate Percy.
- Docs: https://docs.percy.io/docs/playwright
