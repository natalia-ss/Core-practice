import { expect, test } from '@playwright/test';

test('A book can be added to the cart from the Books section', async ({ page }) => {
    const bookName = 'The Catcher in the Rye';

    await page.goto('/');
    await page.getByRole('link', { name: 'Books', exact: true }).click();

    const bookCard = page.locator('.product-card').filter({ hasText: bookName });
    await expect(bookCard).toBeVisible();
    await bookCard.getByRole('button', { name: 'Add to the Cart' }).click();

    await expect(page.getByRole('link', { name: /Cart:/ })).toContainText('2 item(s)');
});
