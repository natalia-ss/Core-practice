import {Page, Locator} from '@playwright/test';
//import { Header } from './components/header';

export class CartPage {
    page: Page;
    //header: Header;
    continueShoppingLink: Locator;
    emptyCartMessage: Locator;
    removeItem: Locator;
    quantityCell: Locator;

    constructor(page: Page) {
        this.page = page;
        //this.header = new Header(page);
        this.continueShoppingLink = page.getByRole('link', { name: 'Continue Shopping' });
        this.emptyCartMessage = page.getByRole('heading', { name: 'Your cart is empty' });
        this.removeItem = page.getByRole('button', { name: 'Remove' });
        this.quantityCell = page.getByRole('cell', { name: '1' });
    }

}