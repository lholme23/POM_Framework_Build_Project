import { expect } from '@playwright/test';
import {URLs, credentials} from '../../test-data/credentials';


export class CartPage {

    constructor (page) {
    this.page = page;
    this.email = page.locator("//input[@type='email']");
    this.password = page.locator("//input[@type='password']");
    this.loginBtn = page.locator("//button[normalize-space()='Login']");
    this.totalItemsHeading= page.getByRole('heading', {name: /total items/i});
    this.contCheckoutBtn = page.locator("//button[normalize-space()='Continue to checkout']");
    }

async loginPage(){
    await expect (this.page).toHaveURL(URLs.shopLogin);
    await expect (this.loginBtn).toBeVisible();
}

async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
}

async assertCartPageLoaded() {
    await this.page.goto(URLs.shopCartPage);
    await expect (this.totalItemsHeading).toBeVisible();
 }
  async continuetoCheckout() {
    await this.contCheckoutBtn.click();
  }
 }