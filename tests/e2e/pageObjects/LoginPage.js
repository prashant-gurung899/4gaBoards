class LoginPage {
  constructor() {
    this.adminLoginUrl = `http://localhost:3000/login`;
    this.emailSelector = "input[name='emailOrUsername']";
    this.passwordSelector = "//input[@name='password']";
    this.loginBtnSelector = "button[title='Log in']";
    this.dashboardSeletor = "div[title='Dashboard']";
  }

  async navigateToLoginPage() {
    await page.goto(this.adminLoginUrl);
  }
  async login(inputData) {
    await page.fill(this.emailSelector, inputData[0].email);
    await page.fill(this.passwordSelector, inputData[0].password);
    await page.click(this.loginBtnSelector);
  }
}
module.exports = { LoginPage };
