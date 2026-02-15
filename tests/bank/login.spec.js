import { test } from '@playwright/test';
import { BankLoginPage} from '../../pages/bank/LoginPage.js';
import { credentials} from '../../test-data/credentials';

test('Login flow for Mini Bank', async ({ page }) => {

const bankLogin = new BankLoginPage(page);

await bankLogin.goto();
await bankLogin.assertLoaded();
console.log('1. Go to Log In page')


await bankLogin.login(credentials.email, credentials.password);
console.log('2. Logging In')


await bankLogin.assertDashboardLoaded();
console.log('3. Landed on Dashboard page')
});