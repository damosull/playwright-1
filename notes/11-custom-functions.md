# Custom Functions:

1. Add your helper/reusable functions to a file like [utils/page-helper.ts](utils/page-helper.ts)

```
export async function loadHomepage(page) {
  await page.goto('https://www.example.com');
}
```

2. Import these functions in your spec file:
   `import { assertHeader } from '../utils/page-helpers.ts'`
3. Use it:
   `await assertTitle(page)`
