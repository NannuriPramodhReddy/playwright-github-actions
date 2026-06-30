import { expect, test } from '@playwright/test';

test('views the product list and product details', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Products', exact: true }).click();

  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  await expect(page.getByLabel('Product list')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Aurora Smart Watch' })).toBeVisible();

  await page
    .locator('article')
    .filter({ hasText: 'Aurora Smart Watch' })
    .getByRole('button', { name: 'View details' })
    .click();

  await expect(
    page.getByRole('heading', { name: 'Aurora Smart Watch' })
  ).toBeVisible();
  await expect(page.getByText(/week-long battery life/i)).toBeVisible();
});
