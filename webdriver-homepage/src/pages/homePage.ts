export class HomePage {
    // ELEMENTS
    get brandIcon() {
        return browser.$('.navbar__brand')
    }

    get heroSubtitle() {
        return browser.$('.hero__subtitle')
    }

    // ACTIONS IN THE PAGE/VIEW
    public brandIconIsPresent(): boolean {
        return this.brandIcon.isExisting()
    }

    public getHeroSubtitleName() {
        this.heroSubtitle.waitForExist()
        return this.heroSubtitle.getText()
    }
}


