
class LoginPage {
    constructor() {
        this.username = '.username'
        this.password = '.password'
        this.submitButton = '.submitbutton'
        this.loginLogo = '.loginlogo'
        this.errorMessage = '.errorMessage'
    }

    async navigate() {
        await page.goto("http://localhost:3000/");
        const locator = page.locator(this.loginLogo);
        expect(locator).toBeVisible();
    }

    async login(username, password) {
        await page.fill(this.username, username)
        await page.fill(this.password, password)
        await page.click(this.submitButton)
    }

    async loginErrorMessage(message) {
        // const actualErrorMessage = await page.locator('.model-div > p').innerText()
        const actualErrorMessage = await page.innerText(this.errorMessage);
        // actualErrorMessage = actualErrorMessage.replace(/"/g,"");
        expect(actualErrorMessage).toBe(message);
    }
}

module.exports = { LoginPage }