const { When, Then } = require("@cucumber/cucumber");

When("the user selects {string} for ielts", async function (string) {
  const ieltsLocator = await page.locator(".ielts-select");
  await ieltsLocator.click();

  await page.pause();

  const locatorForYes = await page.locator(
    '//div[@class = " css-4ljt47-MenuList"]/div[@id = "react-select-7-option-1"]'
  );
  await locatorForYes.click();
});

Then("title {string} should be displayed", async function (title) {
  const titleLocator = await page.locator(
    '//div[@class = "ielts-score-div"]/div[@class = "ielts-input-div"]/p'
  );
  const titleText = await titleLocator.innerText();
  expect(titleText).toBe(title);
});
