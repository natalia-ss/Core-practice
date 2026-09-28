import type { Page } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { LoginPage } from '../page-objects/LoginPage';

export async function openLoginPage(page: Page): Promise<LoginPage> {
  const homePage = new HomePage(page, '');
  await homePage.goto();
  await homePage.header.goToLogin();
  return new LoginPage(page);
}