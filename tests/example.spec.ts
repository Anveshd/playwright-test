import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter username
  await page.fill('input[name="username"]', 'tomsmith');

  // Enter password
  await page.fill('input[name="password"]', 'SuperSecretPassword!');

  // Click the login button
  await page.click('button[type="submit"]');

  // Check if the user is redirected to the secure area
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

  // Verify that the success message is displayed
  const successMessage = await page.textContent('#flash');
  expect(successMessage).toContain('You logged into a secure area!');
});
