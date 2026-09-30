// @ts-check
const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './qa',
  timeout: 60000,
  retries: 0,
  use: { baseURL: 'http://localhost:8123', channel: 'chrome' },
  projects: [
    { name: 'mobile-390', use: { viewport: { width: 390, height: 844 } } },
    { name: 'mobile-320', use: { viewport: { width: 320, height: 700 } } },
    { name: 'desktop-1440', use: { viewport: { width: 1440, height: 900 } } },
  ],
});
