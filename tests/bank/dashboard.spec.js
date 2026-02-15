import { test } from '@playwright/test';
import { BankDashboardPage } from '../../pages/bank/DashboardPage.js';

 test('Mini Bank Dashbord', async ({ page }) => {
  const bankDashboard = new BankDashboardPage(page);
  

// Step 4: Land on Dashboard page
await bankDashboard.assertDashboard;
console.log("Dashboard Page Confirmed");

 });