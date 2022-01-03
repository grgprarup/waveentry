class EditStudentPage {
    constructor() {
        this.updateHeading = '.register-heading'
        this.updateButton = '.register-Button'
        this.name = '.name-input'
        this.email = '.email-input'
        this.address = '.address-input'
        this.phone = '.phone-input'
        this.successMessage = '.modaldiv > p'
        this.listening = '.listening-input'
        this.reading = '.reading-input'
        this.writing = '.writing-input'
        this.speaking = '.speaking-input'
        this.overallBand = '.overallband-input'
        this.qualification = '.qualification-select'
        this.percentage = '.percentage-input'
        this.destination = '.destination-select'
        this.ielts = '.ielts-select'
        this.dropDown = '//div[@class=" css-4ljt47-MenuList"]'
        this.updateSuccessMessage = '//div[@class="modaldiv text-center"]/p[contains(text(),"User Update Successfull")]'
    }

    getDropdownOptionSelector(option) {
        return `${this.dropDown}//div[contains(text(),'${option}')]`
    }

    async confirmEditStudentPage() {
        const editStudentPageMessage = await page.locator(this.updateHeading).innerText()
        expect(editStudentPageMessage).toBe('Update Student Details')
    }

    async updateStudentDetails(information) {
        await page.fill(this.name, information.Name)
        await page.fill(this.email, information.Email)
        await page.fill(this.address, information.Address)
        await page.fill(this.phone, information.Phone)

        // Qualification
        const qualificationLocator = await page.locator(this.qualification);
        await qualificationLocator.click();

        const qualificationSelect = await page.locator(
            this.getDropdownOptionSelector(information.Qualification)
        );
        await qualificationSelect.click();

        // Percentage/GPA
        await page.fill(this.percentage, information.Percentage)

        // Destination
        const destinationLocator = await page.locator(this.destination);
        await destinationLocator.click();

        const destinationSelect = await page.locator(
            this.getDropdownOptionSelector(information.Destination)
        );
        await destinationSelect.click();

        // IELTS
        const ieltsLocator = await page.locator(this.ielts);
        await ieltsLocator.click();

        const ieltsSelect = await page.locator(
            this.getDropdownOptionSelector(information.IELTS)
        );
        await ieltsSelect.click();

        if (information.IELTS === "yes") {
            await page.fill(this.listening, information.Listening)
            await page.fill(this.reading, information.Reading)
            await page.fill(this.writing, information.Writing)
            await page.fill(this.speaking, information.Speaking)
            await page.fill(this.overallBand, information.OverallBand)
        }
        await page.click(this.updateButton)
    }

    async isStudentUpdated() {
        const locator = await page.locator(this.updateSuccessMessage);
        await expect(locator).toBeVisible();
    }
}

module.exports = { EditStudentPage }