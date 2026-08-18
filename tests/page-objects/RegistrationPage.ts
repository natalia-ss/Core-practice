// tests/pages/RegistrationPage.ts
import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly loginNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly continueButton: Locator;
  readonly loginLink: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('input[name="firstname"]');
    this.lastNameInput = page.locator('input[name="lastname"]');
    this.loginNameInput = page.locator('input[name="loginname"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="password_confirm"]');
    this.continueButton = page.locator('button:has-text("Continue")');
    this.loginLink = page.locator('a:has-text("Login here")');
    this.errorMessage = page.locator('[role="alert"], .error, .alert-danger');
  }

  async goto() {
    await this.page.goto('/index.php?rt=account/create');
  }

  async fillFirstName(name: string) {
    await this.firstNameInput.fill(name);
  }

  async fillLastName(name: string) {
    await this.lastNameInput.fill(name);
  }

  async fillLoginName(name: string) {
    await this.loginNameInput.fill(name);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillConfirmPassword(password: string) {
    await this.confirmPasswordInput.fill(password);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  getErrorMessage(): Locator {
    return this.errorMessage;
  }

  async registerUser(userData: UserData) {
    await this.goto();
    await this.fillFirstName(userData.firstName);
    await this.fillLastName(userData.lastName);
    await this.fillLoginName(userData.loginName);
    await this.fillPassword(userData.password);
    await this.fillConfirmPassword(userData.password);
    await this.clickContinue();
  }
}