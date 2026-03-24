import LoginPageObject from '../pageObjects/LoginPageObject';

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.locate = new LoginPageObject(page);
  }

  async openLoginForm() {
    await this.locate.loginForm.click();
  }

  async inputLoginData(email, password) {
    await this.locate.emailField.fill(email);
    await this.locate.passwordField.fill(password);
    await this.locate.rememberMe.click();
  }

  async login() {
    await this.locate.loginButton.click();
  }
}
