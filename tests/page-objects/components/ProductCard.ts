import {Locator} from '@playwright/test';

export class ProductCard {
    container: Locator;
    addToCartButton: Locator;
    productName: Locator;
    productPrice: Locator;
    productImage: Locator;

    constructor(container: Locator) {
        this.container = container;
        this.addToCartButton = container.getByRole('button', { name: 'Add to cart' });
        this.productName = container.getByRole('heading', { name: /.+/ });
        this.productPrice = container.getByText(/\$\d+(\.\d{2})?/); 
        this.productImage = container.getByRole('img');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async viewDetails() {
        await this.productName.click();
    }
}

