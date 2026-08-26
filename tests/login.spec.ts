import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';
import { LoginPage } from './page-objects/LoginPage';
import { validUserData } from './userData';


test('User can login with valid credentials', async ({page}) => {

    const homePage = new HomePage(page, '');
    await homePage.goto();
    
    await homePage.header.goToLogin();
    
    const loginPage = new LoginPage(page);
    await loginPage.login(validUserData.customer.username, validUserData.customer.password);

    await expect(loginPage.accountDetailsUsername).toHaveText(validUserData.customer.username);
});
