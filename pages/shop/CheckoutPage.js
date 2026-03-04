import { expect } from '@playwright/test';
import { URLs } from '../../test-data/credentials';


export class CheckoutPage {

    constructor (page) {
    this.page = page;
    this.billingHeading = page.locator("//h1[normalize-space()='Billing Details']");
    this.firstNameField = page.locator("//label[contains(.,'First name')]/following-sibling::input");
    this.lastNameField = page.locator("//label[contains(.,'Last name')]/following-sibling::input");
    this.addressField = page.locator("//input[@placeholder='House number and street name']");
    this.cityField = page.locator("//input[@name='town']");
    this.stateField = page.locator("input[name='state']");
    this.stateSelect = page.getByText('Georgia', { exact: true });
    this.zipCodeField = page.locator("//input[@name='zip']");
    this.phoneField= page.locator("//input[@name='phone']");
    this.emailField = page.locator("//input[@name='email']");
    this.cardNoField = page.locator("//input[@name='cardNo']");
    this.expDateField = page.locator("input[name='expiryDate']");
    this.ccvField = page.locator("//input[@name='ccv']");
    this.nameCardField = page.locator("input[name='cardName']");
    this.contPaymentBtn = page.getByRole('button', {name: 'continue to payment'});
    this.successPage = page.getByText('Your order is successful', {exact: false});
}

async billingPage() {
    await expect(this.billingHeading).toBeVisible();
    await expect(this.page).toHaveURL(URLs.checkOutPage);
}


async enterDetails() {
    await this.firstNameField.fill('Latrice');
    await this.lastNameField.fill('Test');
    await this.addressField.fill('123 Main St');
    await this.cityField.fill('Los Angeles');
    await this.stateField.click();
    await this.stateSelect.click();
    await this.zipCodeField.fill('90256');
    await this.phoneField.fill('7089999999');
    await this.emailField.fill('ltest@gmail.com');
    await this.cardNoField.fill('4242 4242 4242 4242');
    await this.expDateField.fill('10/26');
    await this.ccvField.fill('200');
    await this.nameCardField.fill('Latrice Test');
}

async continuetoPayment() {
    await expect(this.contPaymentBtn).toBeVisible();
    await this.contPaymentBtn.click();
}

async successLoaded() {
    await expect(this.successPage).toBeVisible();
}


}