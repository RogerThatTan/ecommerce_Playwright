// import { test, expect } from '@playwright/test';
// import LoginPage from '../pages/LoginPage';
// import testData from '../../utils/data.json' assert { type: 'json' };
// const dataSet = JSON.parse(JSON.stringify(testData));

// for (const data of dataSet) {
//   test.describe('NopCommerce Testing', () => {
//     test(`Go to website & Login: ${data.email}`, async ({ page }) => {
//       const loginPage = new LoginPage(page);

//       await page.goto('https://test450.nop-station.com/');
//       await loginPage.openLoginForm();
//       await loginPage.inputLoginData(data.email, data.password);

//       //assertions
//       await expect(loginPage.locate.emailField).toHaveValue(data.email);
//       await expect(loginPage.locate.passwordField).toHaveValue(data.password);
//       await loginPage.login();
//       await expect(loginPage.locate.logoutButton).toBeVisible();
//       await expect(loginPage.locate.logoutButton).toHaveText('Log out');
//     });
//   });
// }
