const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

test('home: no automatic WCAG A/AA violations', async ({ page }) => {
  await page.goto('/index.html');
  await page.waitForTimeout(800);
  const r = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
  if (r.incomplete.length) console.log('incomplete (manual review):', r.incomplete.map(i => i.id));
  expect(r.violations).toEqual([]);
});

test('demo form confirmation state: no violations', async ({ page }) => {
  await page.goto('/index.html');
  await page.fill('#fname', 'Test');
  await page.fill('#lname', 'Person');
  await page.fill('#email', 'test@example.com');
  await page.check('#nature');
  await page.click('.submit-button');
  await expect(page.locator('#form-confirmation')).toBeVisible();
  const r = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
  if (r.incomplete.length) console.log('incomplete (manual review):', r.incomplete.map(i => i.id));
  expect(r.violations).toEqual([]);
});

test('no horizontal overflow', async ({ page }) => {
  await page.goto('/index.html');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
