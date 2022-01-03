const { Given, When, Then } = require('@cucumber/cucumber');
const { DetailsPage } = require('../pageObjects/DetailsPage');
const { HomePage } = require('../pageObjects/HomePage');

const homePage = new HomePage()
const detailsPage = new DetailsPage()
When('the user views student details information using the webUI', async function () {
    await homePage.clickDetailsButton()
});

Then('the individual details should be visible', async function () {
    await detailsPage.isOnDetailsPage()
});
