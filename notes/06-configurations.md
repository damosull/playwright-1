# Playwright Configuration:

- We'll likely need different configurations for different environments.
- Customising the config options in this file allows us to control various aspects of the test execution (browser settings, timeouts, retries, etc.), allowing us to tailor the test execution environment to our specific requirements.
- Create a `playwright.config.ts` file in the project root.
- Example:

```
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
};

export default config;
```

'Use' option:

- The `use` options define the settings to be used during the test execution.
- The top level `use` option defines the default config settings that apply to all projects in the `projects` array. These settings are the baseline for all projects.
- The project-specific `use` option overrides or supplements the default config defined at the top level. It allows us to customer the browser settings for each project individually (i.e. different browser names)
- The project-specific `use` option takes precedence over the default settings defined at the top level. If a setting isn't specified in the projects `use` option, the default value from the top-level option will be used.
- These options give us the flexibility to define common config settings for all projects while also being able to customise settings for individual projects.

'Projects' option:

- Typically, we want a seperate `project` for each browser.
- The `projects` option allows us to define multiple browser environments to run our tests against.

How to specify a config:
`npx playwright test --config=playwright.config.ts --project=Webkit`
