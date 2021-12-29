class HomePage {
  constructor() {
    this.homeLogo = ".homeLogo";
    this.homeRegisterButton = ".registerButton";
    this.searchInputField = ".searchInput";
    this.firstUserOnList =
      "//tbody[@class='MuiTableBody-root css-apqrd9-MuiTableBody-root']/tr[1]/td[last()]/a";
    this.modalMessage = "//div[@class='modaldiv text-center']/p";
  }

  async browseToHomePage() {
    const locator = await page.locator(this.homeLogo);
    await expect(locator).toBeVisible();
  }

  async browseToRegisterPage() {
    const locator = await page.locator(this.homeLogo);
    await expect(locator).toBeVisible();
    await page.click(this.homeRegisterButton);
  }

  async searchByName(name) {
    await page.fill(this.searchInputField, name);
  }

  async deleteFirstUserOnList() {
    const firstUserOnListLocator = await page.locator(this.firstUserOnList);
    // console.log(await firstUserOnListLocator.innerText());
    await firstUserOnListLocator.click();
  }

  async displayModalMessage(message) {
    console.log(message);

    const modalMessageLocator = await page.locator(this.modalMessage);
    await page.pause();
    // console.log(await modalMessageLocator.innerText());
    expect(await modalMessageLocator.innerText()).toBe(message);
  }
}

module.exports = { HomePage };
