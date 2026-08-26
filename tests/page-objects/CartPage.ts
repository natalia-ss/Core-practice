import { Page, Locator } from '@playwright/test';

export class CartPage {
    page: Page;
    continueShoppingLink: Locator;
    emptyCartMessage: Locator;
    removeItem: Locator;
    totalPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueShoppingLink = page.getByRole('link', { name: 'Continue Shopping' });
        this.emptyCartMessage = page.getByRole('heading', { name: 'Your cart is empty' });
        this.removeItem = page.getByRole('button', { name: 'Remove' });
        this.totalPrice = page.locator('.total-price');
    }

    quantityCell(productName: string): Locator {
        return this.page.locator('tr').filter({
            has: this.page.locator('.cart-item-name', { hasText: productName })
        }).locator('td').nth(2);
    }
}