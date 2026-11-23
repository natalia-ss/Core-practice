import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';


test.describe('Home Page', () => {

let homePage: HomePage;

test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page, 'Skinsheen Bronzer Stick');
    await homePage.goto();

});

test('has no visual regression', {tag: '@visual'},  async ({ page }) => {
    
    await expect(page).toHaveScreenshot('home-page.png');

})


test('product card renders correctly',  {tag: '@visual'}, async ({ page }) => {
  await homePage.productCard.haveScreenshot('product-card.png');
});

//HOMEWORK #7
test('product page has no visual regression', {tag: '@visual'}, async ({ page }) => {
    await homePage.productCard.viewDetails();
    await expect(page).toHaveScreenshot('product-page.png');   
 
});

});