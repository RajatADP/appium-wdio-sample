import { iOSPredicateString } from '../helpers/Constants'

class WelcomeScreen {
  locators = {
    diveInBtn: {
      android: '~restoreMyAccount, ',
      ios: `${iOSPredicateString}label == "restoreMyAccount"`,
    },
  }

  get diveInApp() {
    return $(this.locators.diveInBtn)
  }
}

export const welcomeScreen = new WelcomeScreen()
