import {Page, Locator} from '@playwright/test';

export class Header {
    readonly page: Page;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.getByRole('link', { name: /Cart/ });
    }

    async goToCart() {
        await this.cartLink.click();
    }
}