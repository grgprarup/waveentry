const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../pageObjects/loginPage");
const { HomePage } = require("../pageObjects/homePage");
const { RegisterPage } = require("../pageObjects/registerPage");

const loginPage = new LoginPage();
const homePage = new HomePage();
const registerPage = new RegisterPage();
Given("the user has browsed to the login page", async function () {
  await loginPage.browseToLoginPage();
});

When(
  "the user logs in with username {string} and password {string} using webUI",
  async function (username, password) {
    await loginPage.fillLoginField(username, password);
  }
);

Then("the user should be in homepage", async function () {
  await homePage.browseToHomePage();
});

Then(
  "the error message {string} should be displayed on the webUI",
  async function (message) {
    await loginPage.displayMessage(message);
  }
);

// step defination for add students

Given(
  "the user has logged in with username {string} and password {string}",
  async function (username, password) {
    await loginPage.browseToLoginPage();
    await loginPage.fillLoginField(username, password);
  }
);

Given("the user has browsed to homepage and registerpage", async function () {
  await homePage.browseToRegisterPage();
  await registerPage.isRegisterPageVisible();
});

When("the user enters following data", async (dataTable) => {
  const data = dataTable.rowsHash();
  
  await registerPage.registerStudent(data);
});

Then("the message {string} should be displayed", async function (message) {
  await registerPage.registerMessageModal(message);
});
