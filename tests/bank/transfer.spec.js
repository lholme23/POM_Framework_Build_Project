import { test } from '@playwright/test';
import { BankLoginPage } from '../../pages/bank/LoginPage.js';
import { BankDashboardPage } from '../../pages/bank/DashboardPage.js';
import { BankTransferPage } from '../../pages/bank/TransferPage.js';
import { credentials, users } from '../../test-data/credentials.js'; 
import { logger } from '../../utils/logger.js';

test('Mini Bank Test- Log In to Transfer Page', async ({ page }) => {

const bankLogin = new BankLoginPage(page);
const bankTransfer = new BankTransferPage(page);
const bankDashboard = new BankDashboardPage(page);

await bankLogin.goto();
await bankLogin.assertLoaded();
logger.info('Go to Log In page');

await bankLogin.login(credentials.email, credentials.password);
console.log('2. Logging In');

await bankDashboard.assertDashboard();
console.log("3. Dashboard Page Confirmed");

await bankTransfer.startTransaction ();
console.log ('4. Clicked Start Transaction');

await bankTransfer.transferMoney();
console.log ('5. Clicked Transfer Money');

await bankTransfer.gotoTransPage();
console.log ('6. Verified on Transfer Page');

await page.screenshot ({
    path:'test-results/TransferPage.png',
    fullPage: true});
console.log('7. Screenshot Taken');

console.log('Mini Bank Test Complete!!')

})