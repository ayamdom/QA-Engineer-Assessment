const { test, expect } = require('@playwright/test');

test('Login and Navigation Test', async ({ page }) => {
  //Go to the Website
  await page.goto('https://www.saucedemo.com/');

  //Login using credentials assign
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //Check if the credentials successfully login
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');

  //Click a product 
  await page.locator('.inventory_item_name').first().click();
  await expect(page.locator('.inventory_details_name')).toBeVisible();
});