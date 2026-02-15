import { test } from '@playwright/test';
import { ShopLandingPage } from '../../pages/shop/LandingPage';
import { CartPage } from '../../pages/shop/CartPage.js';
import { CheckoutPage } from '../../pages/shop/CheckoutPage.js';
import { credentials } from '../../test-data/credentials.js';

test('Mini Shop Full E2E Test', async ({ page }) => {
const shopLanding = new ShopLandingPage (page);
const shopCartPage = new CartPage(page);
const checkOutPage = new CheckoutPage (page);

await shopLanding.goto();
await shopLanding.assertLoaded();
console.log("1. Go to Mini Shop Landing page");

await shopLanding.addToCartButton();
console.log("2. Add 1st item to cart");

await shopLanding.gotoCart();
console.log("3. Go to Cart");

await shopCartPage.assertCartPageLoaded();
console.log("4. Verified Landing on Cart Page");

await shopCartPage.continuetoCheckout();
console.log("5. Clicked Continue to Checkout");

await shopCartPage.loginPage();
await shopCartPage.login(credentials.email, credentials.password);
console.log("6. Logged In");

await shopCartPage.continuetoCheckout();
console.log("7. Clicked Continue to Checkout Again");

await checkOutPage.billingPage();
console.log("8. Verfied Landing on Billing Page");

await checkOutPage.enterDetails();
console.log("9. Entered All Billing Details");

await checkOutPage.continuetoPayment();
console.log("10. Clicked Continue to Payment");

await checkOutPage.successLoaded();
console.log("11. Success Page Verified");

await page.screenshot({
    path:'test-results/successpage.png',
    fullPage: true});
console.log("12. Screenshot Taken"); 

console.log("End to End Test Complete!!");

 });