import { RegPageObject } from '../pageObjects/RegPageObject';

export default class RegPage {
  constructor(page) {
    this.page = page;
    this.locate = new RegPageObject(page);
  }

  async openRegForm() {
    await this.locate.regForm.click();
  }

  async inputRegDetails(
    gender,
    firstName,
    lastName,
    date,
    month,
    year,
    email,
    company,
    newsLetter,
    password,
  ) {
    if (gender === 'Male') {
      await this.locate.genderMale.click();
    } else {
      await this.locate.genderFemale.click();
    }

    await this.locate.firstName.fill(firstName);
    await this.locate.lastName.fill(lastName);

    const dateDropdown = await this.locate.dateDOB;
    await dateDropdown.selectOption(date);

    const monthDropdown = await this.locate.monthDOB;
    await monthDropdown.selectOption(month);

    const yearDropdown = await this.locate.yearDOB;
    await yearDropdown.selectOption(year);

    await this.locate.email.fill(email);
    await this.locate.company.fill(company);

    if (!newsLetter) {
      await this.locate.newsLetter.click();
    }

    await this.locate.password.fill(password);
    await this.locate.confirmPassword.fill(password);
  }

  async registerUser() {
    await this.locate.regButton.click();
  }
}
