import { verifyElementPresent } from '../helpers/commonMethods'
import { eventScreen } from './eventScreen'
import { iOSPredicateString } from '../helpers/Constants'

class ExploreScreen {
  locators = {
    eventsTab: {
      android: '//android.widget.TextView[contains(@text, "Events")]',
      ios: `${iOSPredicateString}name == "Events Get healthier everyday by participating in any health event of your choice for free."`,
    },
    partnerTab: {
      android: '//android.widget.TextView[contains(@text, "Partners")]',
      ios: `${iOSPredicateString}name == "Partners Link your partner accounts to earn more rewards and Healthpoints!"`,
    },
  }

  get events() {
    return $(this.locators.eventsTab)
  }

  get partners() {
    return $(this.locators.partnerTab)
  }

  async enterEventsSection() {
    await driver.scrollAndClick(this.events)
    await verifyElementPresent(eventScreen.eventSearchField)
  }
  async enterPartnersSection() {
    await driver.scrollAndClick(this.partners)
  }
}

export const exploreScreen = new ExploreScreen()
