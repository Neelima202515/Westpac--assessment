import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  
  retries: 1,
  use: {
    headless: false,
    channel: 'chrome', // run with system Chrome
    baseURL: 'https://www.saucedemo.com/',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 300000,
    navigationTimeout: 20_000,
  },
  projects: [
    {      name: 'Google Chrome',
      use: { channel: 'chrome' } }
  ]
});
// npx playwright test