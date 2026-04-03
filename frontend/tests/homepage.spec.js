import { test, expect } from '@playwright/test';

test('homepage has expected content', async ({ page }) => {
  await page.goto('/');
  // Next.js default page has "To get started, edit the page.js file" text
  await expect(page.locator('body')).toContainText('To get started');
});
