export class RegPageObject {
  constructor(page) {
    this.page = page;
    this.regForm = page.locator('.ico-register');
    this.genderMale = page.locator('#gender-male');
    this.genderFemale = page.locator('#gender-female');
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    this.dateDOB = page.locator("//select[@name='DateOfBirthDay']");
    this.monthDOB = page.locator("//select[@name='DateOfBirthMonth']");
    this.yearDOB = page.locator("//select[@name='DateOfBirthYear']");
    this.email = page.locator('#Email');
    this.company = page.locator('#Company');
    this.newsLetter = page.locator("//input[@type='checkbox']");
    this.password = page.locator('#Password');
    this.confirmPassword = page.locator('#ConfirmPassword');
    this.regButton = page.locator('#register-button');
    this.regSuccessMessage = page.locator("//div[@class='result']");
  }
}
