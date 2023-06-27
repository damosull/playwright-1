# UI Inspector (very useful):

- Allows us to stop execution at any point & interactively inspect/debug the UI.
- Gives us a visual representation of the page's DOM, allowing us to explore elements, inspect their properties, & test CSS/XPath locators.
- You can hover over elements to get locators, & enter locators to test they pick up the correct elements.
- Add `await page.pause()` to your test & run in headed mode (`-- --headed`).
- The test will run, it will stop when it hits this line, & the inspector will appear.
- Click the Play button to resume the test.
