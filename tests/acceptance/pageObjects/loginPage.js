const config = require("../config");

class LoginPage {
  constructor() {
    this.loginlogo = ".loginlogo";
    this.username = ".username";
    this.password = ".password";
    this.submitbutton = ".submitbutton";
    this.serverMessage = ".modaldiv > p";
    this.url = "/";
  }

  async browseToLoginPage() {
    await page.goto(`${config.baseUrl}/`);
    const locator = page.locator(this.loginlogo);
    await expect(locator).toBeVisible();
  }

  async fillLoginField(user, pass) {
    await page.fill(this.username, user);
    await page.fill(this.password, pass);
    await page.click(this.submitbutton);
  }

  async displayMessage(message) {
    const paragraph = await page.locator(this.serverMessage);
    let actualText = await paragraph.innerText();
    message = `"${message}"`;
    expect(actualText).toBe(message);
  }
}

module.exports = { LoginPage };
