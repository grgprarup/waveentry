const { Given, When, Then } = require("@cucumber/cucumber");
When(
  "user selects {string} for ielts using webUI",
  async function (ieltsValue) {
    const ieltsLocator = await page.locator(".ielts-select");
    await ieltsLocator.click();
    await page.pause();
    const divLocatorForIelts = await page.locator(
      //   '//div[@class = " css-4ljt47-MenuList"]/div[@id = "react-select-7-option-1"]'
      `//div[@class = ' css-4ljt47-MenuList']//div[contains(text(), '${ieltsValue}')]`
    );

    // console.log(await divLocatorForIelts.innerText());

    await divLocatorForIelts.click();
  }
);

Then(
  "the user should see {string} value in the dropdown",
  async function (dropDownValue) {
    const inputValueLocator = await page.locator(
      "//div[@class=' css-319lph-ValueContainer']//input[@id = 'react-select-7-input']/preceding-sibling::div"
    );
    const selectedValue = await inputValueLocator.innerText();
    expect(selectedValue).toBe(dropDownValue);
  }
);
