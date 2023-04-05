import { verifyElementPresent, goBack } from '../helpers/commonMethods'
import { iOSPredicateString } from '../helpers/Constants'

class PartnerScreen {
  locators = {
    partnerWhyQ: {
      android: '//android.widget.TextView[contains(@text, "WhyQ")]',
      ios: `${iOSPredicateString}name == "WhyQ whyq tagline"`,
    },
    termConditionCheckBox: {
      android: '(//android.view.ViewGroup)[17]',
      ios: `${iOSPredicateString}name == "check-box-touchable"`,
    },
    partnerLogin: {
      android: '//android.widget.TextView[@text="Go to Partner Login"]',
      ios: `${iOSPredicateString}name == "linkButton"`,
    },
    partnerDetailsTitle: {
      android: '//android.widget.TextView[@text="Partner Details"]',
      ios: `${iOSPredicateString}label == "partnerName"`,
    },
    WhyQLoginHeader: {
      android: '~WhyQ',
      ios: '~WhyQ',
    },
  }

  get whyQPartner() {
    return $(this.locators.partnerWhyQ)
  }

  get termsCondition() {
    return $(this.locators.termConditionCheckBox)
  }

  get partnerLoginBtn() {
    return $(this.locators.partnerLogin)
  }

  get partnerDetailsPage() {
    return $(this.locators.partnerDetailsTitle)
  }

  get partnerLoginPage() {
    return $(this.locators.WhyQLoginHeader)
  }

  get partnerBackButton() {
    if (browser.isIOS)
      return $(`-ios predicate string:${'name == "back-button"'}`)
  }
  get partnerDetailsBackButton() {
    if (browser.isIOS)
      return $(
        `-ios predicate string:${'name == "back-button-partner-detail"'}`
      )
  }

  async verifyPartnerLoginPage() {
    await driver.scrollAndClick(this.whyQPartner)
    await this.acceptTermsAndCondition()
    await goBack(this.partnerBackButton)
    await goBack(this.partnerDetailsBackButton)
    await goBack(this.partnerBackButton)
  }

  async acceptTermsAndCondition() {
    await verifyElementPresent(this.partnerDetailsPage)
    await driver.scrollAndClick(this.termsCondition)
    await this.partnerLoginBtn.waitAndClick()
    //bug
    //await verifyElementPresent(this.partnerLoginPage)
  }
}

export const partnerScreen = new PartnerScreen()
