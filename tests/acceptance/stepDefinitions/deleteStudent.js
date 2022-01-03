const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pageObjects/HomePage');

const homePage = new HomePage()
When('the user deletes student using the webUI', async function () {
    await homePage.clickDeleteButton()
});

Then('the success message should be visible', async function () {
    await homePage.isStudentDeleted()
});
