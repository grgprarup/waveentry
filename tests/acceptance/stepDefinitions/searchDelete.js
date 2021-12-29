const { Given, When, Then } = require("@cucumber/cucumber");

const { LoginPage } = require("../pageObjects/loginPage");
const { HomePage } = require("../pageObjects/homePage");

const loginPage = new LoginPage();
const homePage = new HomePage();

Given(
  "the admin has logged in with username {string} and password {string}",
  async function (username, password) {
    await loginPage.browseToLoginPage();
    await loginPage.fillLoginField(username, password);
  }
);

Given("the admin is on homepage", async function () {
  await homePage.browseToHomePage();
});

When(
  "the admin enters {string} in the search input field in the webUI",
  async function (inputSearchName) {
    await homePage.searchByName(inputSearchName);
  }
);

When("the admin deletes the user using webUI", async function () {
  await homePage.deleteFirstUserOnList();
});

Then(
  "the admin should see a modal with message {string}",
  async function (message) {
    await homePage.displayModalMessage(message);
  }
);
