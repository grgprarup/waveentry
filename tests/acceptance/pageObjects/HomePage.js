class HomePage{
    constructor(){
        this.homeLogo = '.homeLogo'
        this.addStudentButton = '.registerButton'
        this.detailsButton = '//a[@class="details"]'
        this.deleteButton = '.delete'
        this.deleteSuccessMessage = '//div[@class="modaldiv text-center"]/p[contains(text(),"User Delete Successfull !!")]'
        this.editButton = '.edit'
    }
    async isOnHomePage() {
        const locator = await page.locator(this.homeLogo);
        await expect(locator).toBeVisible();
    }

    async clickAddStudentButton(){
        await page.click(this.addStudentButton)
    }

    async clickDetailsButton(){
        await page.click(this.detailsButton)
    }

    async clickDeleteButton(){
        await page.click(this.deleteButton)
    }

    async isStudentDeleted() {
        const locator = await page.locator(this.deleteSuccessMessage);
        await expect(locator).toBeVisible();
    }

    async clickEditButton(){
        await page.click(this.editButton)
    }
}
module.exports = { HomePage }