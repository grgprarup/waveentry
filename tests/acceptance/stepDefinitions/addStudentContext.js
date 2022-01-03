const { Given, When, Then } = require('@cucumber/cucumber');
const { AddStudentPage } = require('../pageObjects/AddStudentPage');
const { HomePage } = require('../pageObjects/HomePage');
const { LoginPage } = require('../pageObjects/LoginPage');
const loginPage = new LoginPage()
const homePage = new HomePage()
const addStudentPage = new AddStudentPage()

Given('the user has logged in with username {string} and password {string} using the webUI', async function (username, password) {
    await loginPage.navigate()
    await loginPage.login(username, password)
});

Given('the user has browsed to home page and add student page', async function () {
    await homePage.isOnHomePage()
    await homePage.clickAddStudentButton()
    await addStudentPage.confirmStudentPage()
});

When('the user adds student with following information', async function (dataTable) {
    // const information = dataTable.rowsHash()
    await addStudentPage.fillStudentDetails(dataTable.rowsHash())
});

Then('the message {string} should be displayed', async function (message) {
    await addStudentPage.displaySuccessMessage(message)
});