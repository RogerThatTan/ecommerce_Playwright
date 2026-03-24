import { test, expect } from '@playwright/test';
import RegPage from '../pages/RegPage';
import testData from '../../utils/data.json' assert { type: 'json' };
const dataSet = JSON.parse(JSON.stringify(testData));

for (const data of dataSet) {
  test.describe('NopCommerce Registration Testing', () => {
    test(`Go to website & Login: ${data.email}`, async ({ page }) => {
      const regPage = new RegPage(page);

      await page.goto('https://test450.nop-station.com/');
      await regPage.openRegForm();
      await regPage.inputRegDetails(
        data.gender,
        data.firstName,
        data.lastName,
        data.date,
        data.month,
        data.year,
        data.email,
        data.company,
        data.newsLetter,
        data.password,
      );

      await regPage.registerUser();

      const successMsg = await regPage.locate.regSuccessMessage.textContent();
      expect(successMsg).toContain('Your registration completed');
      //assertions
      //   await expect(loginPage.locate.emailField).toHaveValue(data.email);
      //   await expect(loginPage.locate.passwordField).toHaveValue(data.password);
      //   await loginPage.login();
      //   await expect(loginPage.locate.logoutButton).toBeVisible();
      //   await expect(loginPage.locate.logoutButton).toHaveText('Log out');
    });
  });
}
