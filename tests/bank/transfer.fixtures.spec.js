import { test, expect } from '../fixtures/bankFixtures.js';
import { credentials } from '../../test-data/credentials.js';

test('Mini Bank Test w/ Fixtures and Loggers', async ({ 
  bankLogin, 
  bankDashboard, 
  bankTransfer,
  logger,
  page 
}) => {

  await bankLogin.goto();
  await bankLogin.assertLoaded();
  logger.info('1. Go to Log In page');

  await bankLogin.login(credentials.email, credentials.password);
  logger.info('2. Logging In');

  await bankDashboard.assertDashboard();
  logger.info("3. Dashboard Page Confirmed");

  await bankTransfer.startTransaction();
  logger.info('4. Clicked Start Transaction');

  await bankTransfer.transferMoney();
  logger.info('5. Clicked Transfer Money');

  await bankTransfer.gotoTransPage();
  logger.info('6. Verified on Transfer Page');

  await page.screenshot({
    path: 'test-results/TransferPage.png',
    fullPage: true
  });
  logger.info('7. Screenshot Taken');

  logger.info('Mini Bank Test Complete!!');
});