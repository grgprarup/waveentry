class DetailsPage {
    constructor() {
        this.individualDetails = '.heading'
    }

    async isOnDetailsPage() {
        const locator = await page.locator(this.individualDetails);
        await expect(locator).toBeVisible();
    }
}

module.exports = { DetailsPage }