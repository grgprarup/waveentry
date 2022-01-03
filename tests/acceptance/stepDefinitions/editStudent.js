const { Given, When, Then } = require('@cucumber/cucumber');
const { EditStudentPage } = require('../pageObjects/EditStudentPage');
const { HomePage } = require('../pageObjects/HomePage');

const homePage = new HomePage()
const editPage = new EditStudentPage()
Given('the user has browsed to home page and edit student page', async function () {
    await homePage.isOnHomePage()
    await homePage.clickEditButton()
    await editPage.confirmEditStudentPage()
});

When('the user edits student with following information', async function (dataTable) {
    await editPage.updateStudentDetails(dataTable.rowsHash())
});

Then('the successfull update message should be visible', async function () {
    await editPage.isStudentUpdated()
});
