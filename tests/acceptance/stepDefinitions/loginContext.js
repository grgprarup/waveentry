const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pageObjects/HomePage');
const { LoginPage } = require('../pageObjects/LoginPage');

const loginPage = new LoginPage()
const homePage = new HomePage()
Given('the user has browsed to login page', async function () {
    await loginPage.navigate()
});

When('the user logs in with username {string} and password {string} using the webUI', async function (username, password) {
    await loginPage.login(username, password)
});

Then('the user should be in homepage', async function () {
    await homePage.confirmLoggedIn()
});

Then('the error message {string} should be displayed on the webUI', async function (message) {
    await loginPage.loginErrorMessage(message)
});

