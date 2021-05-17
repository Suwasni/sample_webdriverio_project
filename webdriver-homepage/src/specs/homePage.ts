import { expect } from 'chai'
import { HomePage } from '../pages/homePage'
import  testData from '../support/TestData.json';

const homePage = new HomePage()

describe('Home Page', () => {
    it('should display the brand icon', () => {
        expect(homePage.brandIconIsPresent(), 'Error : Brand icon is  not present').to.be.true
    })

    it('should display the correct hero subtitle', () => {
        expect(homePage.getHeroSubtitleName(),'Error : Hero subtitle does not match',).to.equal(testData.homepageDetails.heroSubtitle)
    })
})
