import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  testDir: './tests',
});
