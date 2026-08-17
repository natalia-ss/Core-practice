import {Page, Locator} from '@playwright/test';

export class Header {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly logo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.getByRole('link', { name: /Cart/ });
        this.logo = page.getByRole('link', { name: /Logo/ });
    }

    async goToCart() {
        await this.cartLink.click();
    }
}