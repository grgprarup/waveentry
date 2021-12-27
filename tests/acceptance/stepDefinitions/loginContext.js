const { Given, When, Then } = require("@cucumber/cucumber");
Given("the user has browsed to the login page", async function () {
  await page.goto("http://localhost:3000/");
  const locator = page.locator(".loginlogo");
  await expect(locator).toBeVisible();
});

When(
  "the user logs in with username {string} and password {string} using webUI",
  async function (username, password) {
    await page.fill(".username", username);
    await page.fill(".password", password);
    await page.click(".submitbutton");
  }
);

Then("the user should be in homepage", async function () {
  const locator = await page.locator(".homeLogo");
  // console.log(locator);
  await expect(locator).toBeVisible();
});

Then(
  "the error message {string} should be displayed on the webUI",
  async function (message) {
    const paragraph = page.locator(".modaldiv > p");
    let actualText = await paragraph.innerText();
    // console.log(actualText);
    // console.log(message);
    message = `"${message}"`;
    expect(actualText).toBe(message);
  }
);

// step defination for add students

Given(
  "the user has logged in with username {string} and password {string}",
  async function (username, password) {
    await page.goto("http://localhost:3000/");
    const locator = page.locator(".loginlogo");
    await expect(locator).toBeVisible();
    await page.fill(".username", username);
    await page.fill(".password", password);
    await page.click(".submitbutton");
  }
);

Given("the user has browsed to homepage and registerpage", async function () {
  const locator = await page.locator(".homeLogo");
  await expect(locator).toBeVisible();
  await page.click(".registerButton");
  const locatorForRegisterButton = await page.locator(".register-Button");
  await expect(locatorForRegisterButton).toBeVisible();
});

// When(
//   "the user add students with name {string} email {string} address {string} phone {string} qulification {string} percentage {string} destination {string} and ielts {string}",
//   async function (
//     name,
//     email,
//     address,
//     phone,
//     qualification,
//     percentage,
//     destination,
//     ielts
//   ) {
//     const optionsMap = {
//       "+2": "#react-select-3-option-0",
//       bachelors: "#react-select-3-option-1",
//       masters: "#react-select-3-option-2",
//     };

//     const optionDestination = {
//       australia: "#react-select-5-option-0",
//       japan: "#react-select-5-option-3",
//       usa: "#react-select-5-option-1",
//       canada: "#react-select-5-option-2",
//     };

//     const optionIelts = {
//       yes: "#react-select-7-option-1",
//       no: "#react-select-7-option-0",
//     };

//     const availableKeys = Object.keys(optionsMap);
//     if (!availableKeys.includes(qualification)) {
//       throw new Error(
//         `Invalid qualification option provided.\nAvailable options:\n${availableKeys.join(
//           ", "
//         )}`
//       );
//     }

//     const destinationKeys = Object.keys(optionDestination);

//     if (!destinationKeys.includes(destination)) {
//       throw new Error(
//         `Invalid qualification option provided.\nAvailable options:\n${destinationKeys.join(
//           ", "
//         )}`
//       );
//     }

//     const ieltsKeys = Object.keys(optionIelts);
//     if (!ieltsKeys.includes(ielts)) {
//       throw new Error(
//         `Invalid qualification option provided.\nAvailable options:\n${ieltsKeys.join(
//           ", "
//         )}`
//       );
//     }

//     await page.fill(".name-input", name);
//     await page.fill(".email-input", email);
//     await page.fill(".address-input", address);
//     await page.fill(".phone-input", phone);
//     // await page.fill(".percentage-input", percentage);
//     // await page.fill("react-select-3-input", percentage);
//     // await page.fill(".percentage-input", percentage);
//     // await page.fill(".percentage-input", percentage);
//     const selectOptionLocator = await page.locator(".qualification-select");
//     await selectOptionLocator.click();

//     // await page.pause();
//     const optionOne = await page.locator(
//       `.css-4ljt47-MenuList > ${optionsMap[qualification]}`
//     );
//     await optionOne.click();
//     await page.fill(".percentage-input", percentage);

//     const destinationLocator = await page.locator(".destination-select");
//     await destinationLocator.click();

//     const destinationOne = await page.locator(
//       `.css-4ljt47-MenuList > ${optionDestination[destination]}`
//     );

//     await destinationOne.click();

//     const selectIeltsOption = await page.locator(".ielts-select");
//     await selectIeltsOption.click();

//     const ieltsOptionOne = await page.locator(
//       `.css-4ljt47-MenuList > ${optionIelts[ielts]}`
//     );

//     await ieltsOptionOne.click();
//     await page.pause();

//     const registerButtonLocator = await page.locator(".register-Button");
//     await registerButtonLocator.click();
//   }
// );

// Given("I provide below information during registeration", (dataTable) => {
//   console.log(dataTable.rowsHash());
// });

When("the user enters following data", async (dataTable) => {


  const data = dataTable.rowsHash();



  const optionsMap = {
    "+2": "#react-select-3-option-0",
    bachelors: "#react-select-3-option-1",
    masters: "#react-select-3-option-2",
  };

  const optionDestination = {
    australia: "#react-select-5-option-0",
    japan: "#react-select-5-option-3",
    usa: "#react-select-5-option-1",
    canada: "#react-select-5-option-2",
  };

  const optionIelts = {
    yes: "#react-select-7-option-1",
    no: "#react-select-7-option-0",
  };

  const availableKeys = Object.keys(optionsMap);
  if (!availableKeys.includes(data.qualification)) {
    throw new Error(
      `Invalid qualification option provided.\nAvailable options:\n${availableKeys.join(
        ", "
      )}`
    );
  }

  const destinationKeys = Object.keys(optionDestination);

  if (!destinationKeys.includes(data.destination)) {
    throw new Error(
      `Invalid qualification option provided.\nAvailable options:\n${destinationKeys.join(
        ", "
      )}`
    );
  }

  const ieltsKeys = Object.keys(optionIelts);
  if (!ieltsKeys.includes(data.ielts)) {
    throw new Error(
      `Invalid qualification option provided.\nAvailable options:\n${ieltsKeys.join(
        ", "
      )}`
    );
  }



  await page.fill(".name-input", data.name);
  await page.fill(".email-input", data.email);
  await page.fill(".address-input", data.address);
  await page.fill(".phone-input", data.phone);

  const selectOptionLocator = await page.locator(".qualification-select");
  await selectOptionLocator.click();

  // await page.pause();
  const optionOne = await page.locator(
    `.css-4ljt47-MenuList > ${optionsMap[data.qualification]}`
  );
  await optionOne.click();
  await page.fill(".percentage-input", data.percentage);

  const destinationLocator = await page.locator(".destination-select");
  await destinationLocator.click();

  const destinationOne = await page.locator(
    `.css-4ljt47-MenuList > ${optionDestination[data.destination]}`
  );

  await destinationOne.click();

  const selectIeltsOption = await page.locator(".ielts-select");
  await selectIeltsOption.click();

  const ieltsOptionOne = await page.locator(
    `.css-4ljt47-MenuList > ${optionIelts[data.ielts]}`
  );

  await ieltsOptionOne.click();
  await page.pause();

  const registerButtonLocator = await page.locator(".register-Button");
  await registerButtonLocator.click();
  
});

Then("the message {string} should be displayed", async function (message) {
  const messageLocator = await page.locator(".modaldiv > p");
  const registrationResult = await messageLocator.innerText();
  const resultText = `"${message}"`;
  await expect(registrationResult).toBe(resultText);
});

Given("following users have been created:", (dataTable) => {
  console.log(dataTable.hashes());
  dataTable.hashes().forEach((item) => {
    console.log(item);
  });
});
