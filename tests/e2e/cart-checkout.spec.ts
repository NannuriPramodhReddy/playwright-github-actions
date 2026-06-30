import { expect, test } from '@playwright/test';

test('adds a product to cart and completes checkout', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Products', exact: true }).click();

  await page
    .locator('article')
    .filter({ hasText: 'Aurora Smart Watch' })
    .getByRole('button', { name: 'Add to cart' })
    .click();

  await expect(page.getByRole('heading', { name: 'Cart' })).toBeVisible();
  await expect(page.getByText('Qty 1 x $149')).toBeVisible();
  await expect(page.getByLabel('1 items in cart')).toBeVisible();

  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page.getByRole('heading', { name: 'Checkout', exact: true })).toBeVisible();

  await page.getByLabel('Full name').fill('Pramodh Kumar');
  await page.getByLabel('Email').fill('pramodh@example.com');
  await page.getByLabel('Shipping address').fill('123 Market Street');
  await page.getByLabel('City').fill('Hyderabad');
  await page.getByLabel('Card number').fill('4242 4242 4242 4242');
  await page.getByRole('button', { name: 'Place order' }).click();

  await expect(page.getByRole('heading', { name: 'Thank you for your order' })).toBeVisible();
  await expect(page.getByText('Your Pramodh Personal order has been confirmed.')).toBeVisible();
});
