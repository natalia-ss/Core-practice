import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';
import { LoginPage } from './page-objects/LoginPage';
import { validUserData, invalidUserData } from './userData';
import { openLoginPage } from './helpers/openLoginPage';


test('User can login with valid credentials', async ({page}) => {

    const loginPage = await openLoginPage(page);

    await loginPage.login(validUserData.customer.username, validUserData.customer.password);

    await expect(loginPage.welcomeMessage).toContainText(`Welcome back`);
})


test('User cannot login with invalid password', async ({page}) => {
    
    const loginPage = await openLoginPage(page);
    
    await loginPage.login(invalidUserData.wrongPassword.username, invalidUserData.wrongPassword.password);

    await expect(loginPage.alertMessage).toBeVisible();
})