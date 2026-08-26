import {Page, Locator} from '@playwright/test';

export class LoginPage {
  page: Page;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  accountDetailsUsername: Locator;

    constructor(page: Page) { 
        this.page = page;   
        this.usernameInput = page.getByRole('textbox', { name: 'Login name' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.accountDetailsUsername = page.getByText('Username:');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}


