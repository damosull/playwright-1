# Custom Functions:

1. Add your helper/reusable functions to a file like `helpers.ts`:

```
export async function loadHomepage(page) {
  await page.goto('https://www.example.com');
}
```

2. Import these functions in your spec file: `import { assertHeader } from '../helpers'`
3. Use it: `await assertTitle(page)`
