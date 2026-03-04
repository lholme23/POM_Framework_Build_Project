import { expect } from '@playwright/test';
import { URLs } from '../../test-data/credentials.js';

export class BankLoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }
  async goto(){
    await this.page.goto(URLs.bankLogin);
  }
  
  async assertLoaded() {
    await expect(this.page).toHaveURL(URLs.bankLogin);
    await expect(this.loginBtn).toBeVisible();
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
}}