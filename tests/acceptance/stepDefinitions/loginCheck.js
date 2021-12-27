const { Given, When, Then } = require("@cucumber/cucumber");

Given("the user has browsed to the loginpage", async function () {
  await page.goto("http://localhost:3000/");
  const locator = page.locator(".loginlogo");
  await expect(locator).toBeVisible();
});

When(
  "the user logs in with username {string} and password {string} using webui",
  async function (username, password) {
    await page.fill('//input[@type="text"]', username);
    await page.fill('//input[@type="password"]', password);
    await page.pause();
    await page.click('//input[@type="submit"]');
  }
);

Then("the user should be in home page", async function () {
  const locator = await page.locator(".homeLogo");
  // console.log(locator);
  await expect(locator).toBeVisible();
});
