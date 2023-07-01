# Installation Steps:

1. `npm i prettier`
2. Create `.prettierrc` file in the root directory:

```
{
"semi": true,
"singleQuote": true
}
```

3. `npm i @playwright/test`

4. `npx playwright install` - to install the required browsers

# First Test:

1. Create a `tests` folder in the root directory.
2. Create `example.spec.ts` in this folder
3. Add the following code:

```
import { test, expect } from '@playwright/test';

test('Simple basic test', async ({ page }) => {
  await page.goto('https://www.example.com');
  const pageTitle = await page.locator('h1');
  await expect(pageTitle).toContainText('Example Domain');
});
```
