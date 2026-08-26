import {Page, Locator} from '@playwright/test';

export class Header {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly LoginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.getByRole('link', { name: /Cart/ });
        this.LoginLink = page.getByRole('link', { name: 'Login or register' })
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async goToLogin() {
        await this.LoginLink.click();
    }
}