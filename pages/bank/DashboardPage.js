import { expect } from '@playwright/test';

export class BankDashboardPage {
  constructor(page) {
    this.page = page;
    this.overviewHeading = page.getByRole('heading', { name: /overview/i });
  }

  async assertDashboard() {
    await expect (this.overviewHeading).toBeVisible();
      }
  }

