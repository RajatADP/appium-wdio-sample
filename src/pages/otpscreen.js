class OTPScreen {
  locators = {
    otpField: {
      ios: '-ios predicate string:name == "OTPInputBox_0"',
    },
    otpScreenTitle: {
      android:
        '//android.widget.TextView[contains(@text, "Enter your security code")]',
      ios: '-ios predicate string:name == "Enter your security code"',
    },
  }

  get otpField() {
    return $(this.locators.otpField)
  }

  get otpVerificationScreenTitle() {
    return $(this.locators.otpScreenTitle)
  }

  async enterOTP() {
    await this.otpVerificationScreenTitle.waitForDisplayed()
    if (browser.isAndroid) {
      for (let index = 0; index < 4; index++) {
        await driver.pressKeyCode(8)
        await browser.pause(500)
      }
    } else {
      await $(`-ios predicate string:${'name == "OTPInputBox_0"'}`).addValue(
        1111
      )
      await browser.pause(500)
    }
  }
}

export const otpScreen = new OTPScreen()
