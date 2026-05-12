import { test, expect } from '@playwright/test';


test('Product can be added to cart from Home Page', async ({page}) =>{

    await page.goto('https://raider-test-site.onrender.com/');

    await page.locator('.product-card').filter({ hasText: 'Skinsheen Bronzer Stick' }).getByRole('button', { name: 'Add to Cart' }).click();

    await expect(page.getByRole('link', { name: /Cart/ })).toContainText('1 item(s)')
})
