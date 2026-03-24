export default class LoginPageObject {
  constructor(page) {
    this.page = page;
    this.loginForm = page.locator('.ico-login');
    this.emailField = page.locator('#Email');
    this.passwordField = page.locator('#Password');
    this.rememberMe = page.locator('#RememberMe');
    this.loginButton = page.locator("//button[@type='submit']");
    this.logoutButton = page.locator('.ico-logout');
  }
}
