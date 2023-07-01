# Locators / Selectors:

- Text: `await page.click('text=some text')`
- CSS selectors:
  - Element type: `await page.click('button')`
  - ID: `await page.click('#id')`
  - Class: `await page.click('.class')`
- Only Visible CSS selector: `await page.click('.submit-button:visible')` _(Note: this clicks the 1st visible element with this class. If there are multiple matching elements, only the 1st one is clicked)_.
- Combinations: `await page.click('#username .first')`
- XPath: `await page.click('//button')`
