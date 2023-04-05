import { verifyElementPresent, goBack } from '../helpers/commonMethods'

class ChallengeProgress {
  locators = {
    scanAndWin: {
      android: '//android.widget.TextView[contains(@text, "scans")]',
      ios: '-ios predicate string:name == ""',
    },
  }

  get scanAndWin() {
    return $(this.locators.scanAndWin)
  }

  get stepsNSC() {
    return $('//android.widget.TextView[contains(@text, "10,000 steps")]')
  }

  get mvpaNSC() {
    return $('//android.widget.TextView[contains(@text, "MVPA")]')
  }

  get QRScanTag() {
    return $('//android.widget.TextView[@text="QR Scans"]')
  }

  get scanLocation() {
    return $('//android.widget.TextView[@text="Scan & Win QR Code Locations"]')
  }

  get challengeWork() {
    return $('//android.widget.TextView[@text="How does this challenge work?"]')
  }

  get locationLink() {
    return $('//android.widget.TextView[@text="View locations"]')
  }

  get scanHistoryLink() {
    return $('//android.widget.TextView[@text="View scan history"]')
  }

  get scanHistory() {
    return $(
      '//android.widget.TextView[@text="Here are your completed scans at the Scan & Win locations in the past 3 months."]'
    )
  }

  get todayHP() {
    return $('//android.widget.TextView[@text="Today"]')
  }

  get yesterdayHP() {
    return $('//android.widget.TextView[@text="Yesterday"]')
  }

  get coorporateChallenge() {
    return $('//android.widget.TextView[@text="0 min"]')
  }

  get overAllSection() {
    return $('//android.widget.TextView[@text="Overall"]')
  }

  get intraCompanySection() {
    return $('//android.widget.TextView[@text="Intra-company"]')
  }

  get publicSectorSection() {
    return $('//android.widget.TextView[@text="Public Sector"]')
  }

  get openEDSHChallenge() {
    return $(
      '//android.widget.TextView[@text="Appium Eat Drink Shop Healthy"]/parent::android.view.ViewGroup/parent::android.view.ViewGroup/descendant::*[contains(@text,"stamps")][1]'
    )
  }
  get food() {
    return $('//android.widget.TextView[@text="My Food Passport"]')
  }

  get drinkLabel() {
    return $('~drink-id, ')
  }

  get drink() {
    return $('//android.widget.TextView[@text="My Drink Passport"]')
  }

  get grocery() {
    return $('//android.widget.TextView[@text="My Grocery Passport"]')
  }

  get groceryLabel() {
    return $('~grocery-id, ')
  }

  get mealLabel() {
    return $('~meal_log-id, ')
  }

  get meal() {
    return $('//android.widget.TextView[@text="My Meal Log Passport"]')
  }

  async scanAndWinChallengeProgress() {
    await driver.scrollAndClick(this.scanAndWin)
    await this.verifyScanAndWinChallengePage()
  }

  async verifyScanAndWinChallengePage() {
    await verifyElementPresent(this.QRScanTag)
    await verifyElementPresent(this.scanLocation)
    await verifyElementPresent(this.challengeWork)
    await this.verifyLocationList()
  }

  async verifyLocationList() {
    await driver.scrollAndClick(this.locationLink)
    await driver.scrollAndClick(this.scanHistoryLink)
    await verifyElementPresent(this.scanHistory)
    await goBack()
    await goBack()
    await goBack()
  }

  async stepChallengeProgress() {
    await driver.scrollAndClick(this.stepsNSC)
    await verifyElementPresent(this.todayHP)
    await verifyElementPresent(this.yesterdayHP)
    await driver.scrollAndClick(this.mvpaNSC)
    await verifyElementPresent(this.todayHP)
    await verifyElementPresent(this.yesterdayHP)
    await goBack()
  }

  async stepCorporateChallengeProgress() {
    await driver.scrollAndClick(this.coorporateChallenge)
    await verifyElementPresent(this.overAllSection)
    await verifyElementPresent(this.intraCompanySection)
    await verifyElementPresent(this.publicSectorSection)
    await goBack()
  }

  async edshCards() {
    await driver.scrollAndClick(this.openEDSHChallenge)
    await verifyElementPresent(this.food)
    await driver.scrollAndClick(this.drinkLabel)
    await verifyElementPresent(this.drink)
    await driver.scrollAndClick(this.groceryLabel)
    await verifyElementPresent(this.grocery)
    await driver.scrollAndClick(this.mealLabel)
    await verifyElementPresent(this.meal)
    await goBack()
  }
}

export const challengeProgress = new ChallengeProgress()
