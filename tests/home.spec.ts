import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';
import AxeBuilder from '@axe-core/playwright';


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


test('should have no accessibility violations', {tag: '@accessibility'}, async ({ page }) => {
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

})
 
//focus only on a specific rule
test.only('should have no color contrast issues', {tag: '@accessibility'}, async ({ page }) => {
    const scanResults = await new AxeBuilder({ page }).withRules(['color-contrast']).exclude('.product-card').analyze();
    expect(scanResults.violations).toEqual([]);
});

});