import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';
import { CartPage } from './page-objects/CartPage';

test.describe('Add to Cart ', () => {

    let homePage: HomePage;
    let cartPage: CartPage;
    
test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page, 'Skinsheen Bronzer Stick');
    cartPage = new CartPage(page);

    await homePage.goto();

    await homePage.productCard.addToCart();

});

test('Product can be added to cart from Home Page', async () =>{

    await expect(homePage.header.cartLink).toContainText('1 item(s)')
})

test('Product is visible in cart', async () =>{

    await homePage.header.cartLink.click();
    
    await expect(cartPage.quantityCell).toBeVisible();
})

test('Product can be removed from cart', async () =>{

    await homePage.header.cartLink.click();

    await cartPage.removeItem.click();

    await expect(cartPage.emptyCartMessage).toBeVisible();
})
})