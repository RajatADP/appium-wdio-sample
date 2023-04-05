import { iOSPredicateString } from '../helpers/Constants'

class SignInScreen {
  locators = {
    nricField: {
      android: '~nricInput, ',
      ios: `${iOSPredicateString}label == "nricInput"`,
    },
    mobileField: {
      android: '~mobileNumberInput, ',
      ios: `${iOSPredicateString}label == "mobileNumberInput"`,
    },
    signInBtn: {
      android: '~submitButton, ',
      ios: `${iOSPredicateString}name == "submitButton"`,
    },
  }

  get NRIC() {
    return $(this.locators.nricField)
  }
  get MobileNumber() {
    return $(this.locators.mobileField)
  }

  get SignIn() {
    return $(this.locators.signInBtn)
  }
}

export const signInScreen = new SignInScreen()
