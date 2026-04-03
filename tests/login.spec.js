import { test, expect } from '@playwright/test';

test('login page renders correctly', async ({ page }) => {
  await page.goto('/login');
  await expect(page.locator('h2')).toContainText('SIAT - Login');
  await expect(page.getByPlaceholder('E-mail')).toBeVisible();
  await expect(page.getByPlaceholder('Senha')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible();
});

test('shows error message on failed login', async ({ page }) => {
  await page.goto('/login');
  await page.getByPlaceholder('E-mail').fill('wrong@example.com');
  await page.getByPlaceholder('Senha').fill('wrongpassword');
  await page.getByRole('button', { name: 'Entrar' }).click();

  // Since we don't have real Firebase config, it should fail
  await expect(page.locator('text=Falha ao entrar')).toBeVisible();
});

test('redirects from dashboard to login if not authenticated', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page).toHaveURL(/.*login/);
});
