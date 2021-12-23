const { Given, When, Then } = require('@cucumber/cucumber')

Given('the user has browsed to login page', async function () {
    await page.goto("http://localhost:3000/");
    const locator = page.locator('.loginlogo');
    expect(locator).toBeVisible();
});

When('the user logs in with username {string} and password {string} using the webUI', async function (username, password) {
    await page.fill('.username', username)
    await page.fill('.password', password)
    await page.click('.submitbutton')
});

Then('the user should be in homepage', async function () {
    const locator = page.locator('.homelogo');
    expect(locator).toBeVisible();
});

Then('the error message {string} should be displayed on the webUI',async function (message) {
    let actualErrorMessage = await page.innerText('.errorMessage');
    actualErrorMessage = actualErrorMessage.replace(/"/g,"");
    expect(actualErrorMessage).toBe(message);
});

