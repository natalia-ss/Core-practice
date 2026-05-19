import { test, expect } from '@playwright/test';

test.describe('Add to Cart ', () => {
    
test.beforeEach(async ({ page }) => {

    await page.goto('https://raider-test-site.onrender.com/');
    await page.locator('.product-card').filter({ hasText: 'Skinsheen Bronzer Stick' }).getByRole('button', { name: 'Add to Cart' }).click();

});

test('Product can be added to cart from Home Page', async ({page}) =>{

    await expect(page.getByRole('link', { name: /Cart/ })).toContainText('1 item(s)')
})

test('Product is visible in cart', async ({page}) =>{

    await page.getByRole('link', { name: /Cart/ }).click(); 
    
    await expect(page.getByRole('cell', { name: '1' })).toBeVisible();
})

test('Product can be removed from cart', async ({page}) =>{

    await page.getByRole('link', { name: /Cart/ }).click();

    await page.getByRole('button', { name: 'Remove' }).click();

    await expect(page.getByRole('heading', { name: 'Your cart is empty' })).toBeVisible();
})
})