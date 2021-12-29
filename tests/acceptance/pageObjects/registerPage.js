class RegisterPage {
  constructor() {
    this.registerStudentButton = ".register-Button";
    this.nameField = ".name-input";
    this.emailField = ".email-input";
    this.addressField = ".address-input";
    this.phoneField = ".phone-input";
    this.percentageField = ".percentage-input";
    // this.dropdownInitialID = ".css-4ljt47-MenuList >";
    this.dropdown = "//div[@class = ' css-4ljt47-MenuList']";
    this.qualificationSelect = ".qualification-select";
    this.destinationSelect = ".destination-select";
    this.ieltsSelect = ".ielts-select";
    this.listening = '//input[@class = "listening-input"]';
    this.reading = '//input[@class = "reading-input"]';

    this.writing = '//input[@class = "writing-input"]';

    this.speaking = '//input[@class = "speaking-input"]';
    this.overallband = '//input[@class = "overallband-input"]';
    this.messageFromModal = ".modaldiv > p";
  }

  //for dynamic parameters use a function
  getDropdownOptionSelector(option) {
    const optionSelector = `${this.dropdown}//div[contains(text(), '${option}')]`;
    return optionSelector;
  }

  async isRegisterPageVisible() {
    const locatorForRegisterButton = await page.locator(
      this.registerStudentButton
    );
    await expect(locatorForRegisterButton).toBeVisible();
  }

  async registerStudent(data) {
    await page.fill(this.nameField, data.name);
    await page.fill(this.emailField, data.email);
    await page.fill(this.addressField, data.address);
    await page.fill(this.phoneField, data.phone);

    const selectOptionLocator = await page.locator(this.qualificationSelect);
    await selectOptionLocator.click();

    // await page.pause();

    const optionOne = await page.locator(
      this.getDropdownOptionSelector(data.qualification)
    );

    await optionOne.click();

    await page.fill(this.percentageField, data.percentage);

    const destinationLocator = await page.locator(this.destinationSelect);
    await destinationLocator.click();

    const destinationOne = await page.locator(
      this.getDropdownOptionSelector(data.destination)
    );

    await destinationOne.click();

    const selectIeltsOption = await page.locator(this.ieltsSelect);
    await selectIeltsOption.click();

    const ieltsOptionOne = await page.locator(
      this.getDropdownOptionSelector(data.ielts)
    );

    await ieltsOptionOne.click();

    if (data.ielts === "yes") {
      await page.fill(this.listening, data.listening);
      await page.fill(this.reading, data.reading);

      await page.fill(this.writing, data.writing);

      await page.fill(this.speaking, data.speaking);

      await page.fill(this.overallband, data.overallband);
    }

    // await page.pause();

    const registerButtonLocator = await page.locator(
      this.registerStudentButton
    );
    await registerButtonLocator.click();
  }

  async registerMessageModal(message) {
    const messageLocator = await page.locator(this.messageFromModal);
    const registrationResult = await messageLocator.innerText();
    const resultText = `"${message}"`;
    await expect(registrationResult).toBe(resultText);
  }
}

module.exports = { RegisterPage };
