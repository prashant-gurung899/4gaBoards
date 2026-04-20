const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const login = new LoginPage();

Given(
  'admin user has navigated to the login page',
  async function () {
    await login.navigateToLoginPage();
    expect(page.url()).toBe(login.adminLoginUrl);
  }
);

When(
  'admin user logs in with following credentials',
  async function (credentials) {
    const loginCredentials = credentials.hashes();
    await login.login(loginCredentials);
  }
);

Then(
  'admin user should be navigated to admin panel dashboard',
  async function () {
    await expect(page.locator(login.dashboardSeletor)).toBeVisible();
  }
);
