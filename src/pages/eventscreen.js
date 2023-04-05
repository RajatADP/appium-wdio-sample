import { verifyElementPresent } from '../helpers/commonMethods'

class EventsScreen {
  locators = {
    eventSearchField: {
      android:
        '//android.widget.TextView[@text="Search by event or location")]',
      ios: '-ios predicate string:name == "Search by event or location"',
    },
  }

  get eventSearchField() {
    return $(this.locators.eventSearchField)
  }

  get eventAppiumActivity() {
    return $('//android.widget.TextView[@text= "Appium_Activity"]')
  }

  get bookNowBtn() {
    return $('//android.widget.TextView[@text= "Book now"]')
  }

  get confirmBookingBtn() {
    return $('//android.widget.TextView[@text= "Confirm booking (1)"]')
  }

  get bookingSuccess_msg() {
    return $('//android.widget.TextView[@text= "Your booking is successful"]')
  }

  get goToHomeBtn() {
    return $('//android.widget.TextView[@text= "Go to Home"]')
  }

  get cancelBooking() {
    return $('//android.widget.TextView[@text= "Cancel my booking"]')
  }

  get cancelBookingPopup() {
    return $('id=android:id/button1')
  }

  get noBookedEvents() {
    return $(
      '//android.widget.TextView[@text= "You don’t have any plans yet."]'
    )
  }

  get partnerCodeLink() {
    return $('//android.widget.TextView[@text="Enter Partner Code"]')
  }

  get partnerCodeField() {
    return $('//android.widget.EditText[@text="Enter 5-digit code here"]')
  }

  get submitBtn() {
    return $('//android.widget.TextView[@text="Submit"]')
  }

  get partnersLink() {
    return $('//android.widget.TextView[@text="Partners"]')
  }

  get myRewardsSection() {
    return $('//android.widget.TextView[contains(@text, "My Rewards")]')
  }

  get partnerProgramme() {
    return $(
      '//android.widget.TextView[contains(@text, "Appium_Partner_Activity")]'
    )
  }

  async selectEvent(eventName) {
    await driver.scrollAndClick(this.eventSearchField)
    await this.eventSearchField.scrollAndSetValue(eventName)
    await browser.pressEnter()
    await driver.scrollAndClick(this.eventAppiumActivity)
    await driver.scrollAndClick(this.bookNow_btn)
  }

  async confirmBooking() {
    await driver.scrollAndClick(this.confirmBookingBtn)
    await verifyElementPresent(this.bookingSuccess_msg)
  }

  async goToHome() {
    await driver.scrollAndClick(this.goToHomeBtn)
  }

  async cancelBookedEvent() {
    await driver.scrollAndClick(this.cancelBooking)
    await driver.scrollAndClick(this.cancelBookingPopup)
    await verifyElementPresent(this.noBookedEvents)
  }

  async bookEventViaPartnerCode(partnerCode) {
    await driver.scrollAndClick(this.partnerCodeLink)
    await this.partnerCodeField.scrollAndSetValue(partnerCode)
    await driver.scrollAndClick(this.submitBtn)
    await driver.scrollAndClick(this.bookNowBtn)
    await this.confirmBooking()
    await this.goToHome()
  }

  async bookEventViaPartners() {
    await driver.scrollAndClick(this.partnersLink)
    await driver.scrollAndClick(this.partnerProgramme)
    await driver.scrollAndClick(this.bookNowBtn)
    await this.confirmBooking()
    await this.goToHome()
  }
}

export const eventScreen = new EventsScreen()
