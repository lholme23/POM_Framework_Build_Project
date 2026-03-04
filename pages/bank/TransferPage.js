import { expect } from '@playwright/test';
import { URLs } from '../../test-data/credentials';


export class BankTransferPage {
  constructor(page) {
    this.page = page;
    this.startTransBtn = page. getByRole('button', {name: 'Start a transaction'});
    this.transMoneyBtn = page.locator('a[href="/dashboard/transfer"]'); 
    this.transPageHeading = page.getByRole('heading', {name: /transfer money/i});
  }


   async startTransaction() {
    await expect(this.startTransBtn).toBeEnabled();
    await this.startTransBtn.click();
  }

  async transferMoney() {
    await expect(this.transMoneyBtn).toBeEnabled();
    await this.transMoneyBtn.click();
  }

 async gotoTransPage() {
    await expect(this.transPageHeading).toBeVisible();
    await expect(this.page).toHaveURL(URLs.bankTransfer);
 }
}