import {Page, Locator} from '@playwright/test';
import { ProductCard } from './components/ProductCard';
import { Header } from './components/HeaderComponent';

export class HomePage {
page: Page;
header: Header;
productCard: ProductCard;

constructor(page: Page, productName: string) {
    this.page = page;
    this.header = new Header(page);
    this.productCard = new ProductCard(page.locator('.product-card').filter({ hasText: productName }));
}
}