import { expect, test } from '@playwright/test';

test('opens the homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /modern essentials/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Shop products' })).toBeVisible();
  await expect(page.getByText('Free shipping over $75')).toBeVisible();
});
