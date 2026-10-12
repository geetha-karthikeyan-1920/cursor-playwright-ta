// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for the login suite.
 * Specs live under test/specs, matching the elitea_wdio_ta layout.
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './test/specs',
  timeout: 60_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  expect: {
    timeout: 15_000,
  },
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    navigationTimeout: 45_000,
    actionTimeout: 15_000,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
