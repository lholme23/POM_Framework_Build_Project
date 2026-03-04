import { expect } from '@playwright/test';
import {URLs} from '../../test-data/credentials.js';

export class ShopLandingPage {

    constructor (page) {
    this.page = page;
    this.miniShopHeading  = page.getByRole('heading', { name: /mini shop/i });
    this.addToCart = page.locator("(//button[normalize-space()='Add to cart'])[1]");
    this.topCartBtn = page.locator("//a[@href='/cart']");
    }
    
    async goto(){
        await this.page.goto(URLs.shopLanding);
    }

    async assertLoaded() {
       await expect(this.page).toHaveURL(URLs.shopLanding);
       await expect(this.miniShopHeading).toBeVisible();
    }

    async addToCartButton() {
        await expect(this.addToCart).toBeVisible();
        await this.addToCart.click();   
    }

    async gotoCart() {
        await expect(this.topCartBtn).toBeVisible();
        await this.topCartBtn.click();
    }
}
