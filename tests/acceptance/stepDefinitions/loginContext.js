const { Given, When, Then } = require("@cucumber/cucumber");
Given('the user has browsed to the login page', async function () {
    await page.goto('http://localhost:3000/');
    const locator = page.locator('.loginlogo')
    await expect(locator).toBeVisible();
});



When('the user logs in with username {string} and password {string} using webUI', async function (username, password) {
    await page.fill('.username', username);
    await page.fill('.password', password);
    await page.click('.submitbutton');

});


Then('the user should be in homepage', async function () {
    const locator = page.locator('.homeLogo')
    expect(locator).toBeVisible();
});


Then('the error message {string} should be displayed on the webUI', async function (message) {
    
    const paragraph = page.locator('.modaldiv > p')
    let actualText = await paragraph.innerText()

    console.log(actualText);
    console.log(message);
    message = `"${message}"`
    expect(actualText).toBe(message)
    
});








