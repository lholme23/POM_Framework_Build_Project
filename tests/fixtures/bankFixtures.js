import { test as base } from '@playwright/test';
import { BankLoginPage } from '../../pages/bank/LoginPage.js';
import { BankDashboardPage } from '../../pages/bank/DashboardPage.js';
import { BankTransferPage } from '../../pages/bank/TransferPage.js';
import { logger } from '../../utils/logger.js';

export const test = base.extend({
  bankLogin: async ({ page }, use) => {
    const bankLogin = new BankLoginPage(page);
    await use(bankLogin);
  },

  bankDashboard: async ({ page }, use) => {
    const bankDashboard = new BankDashboardPage(page);
    await use(bankDashboard);
  },

  bankTransfer: async ({ page }, use) => {
    const bankTransfer = new BankTransferPage(page);
    await use(bankTransfer);
  },

  logger: async ({}, use) => {
    await use(logger);
  }
});

export { expect } from '@playwright/test';