import { homeScreen } from '../../pages/homeScreen'
import { eventScreen } from '../../pages/eventScreen'
import { exploreScreen } from '../../pages/exploreScreen'
import { profileScreen } from '../../pages/profileScreen'
import {
  addDeviceNameToAllureReport,
  loginUsingNRIC_Mobile,
} from '../../helpers/commonMethods'

const EVENT_NAME = 'Appium_Activity'
const EVENT_NAME_PARTNERCODE = 'Appium_Private_Activity'
const EVENT_NAME_PARTNER = 'Appium_Partner_Activity'
const PARTNER_CODE = 'g4128'

//need data setup
describe('Verify Event creation and deletion Business flow', () => {
  before('Login using NRIC & Mobile', async () => {
    await loginUsingNRIC_Mobile()
    await addDeviceNameToAllureReport()
  })

  it('Verify Event creation and deletion via HPB', async () => {
    await homeScreen.clickExplore()
    await exploreScreen.enterEventsSection()
    await eventScreen.selectEvent(EVENT_NAME)
    await eventScreen.confirmBooking()
    await eventScreen.goToHome()
    await homeScreen.deleteEvent(EVENT_NAME)
  })

  it('Verify Event creation and deletion via partner code', async () => {
    await homeScreen.clickExplore()
    await exploreScreen.enterEventsSection()
    await eventScreen.bookEventViaPartnerCode(PARTNER_CODE)
    await homeScreen.deleteEvent(EVENT_NAME_PARTNERCODE)
  })

  it('Verify Event creation and deletion via partner event', async () => {
    await homeScreen.clickExplore()
    await exploreScreen.enterEventsSection()
    await eventScreen.bookEventViaPartners()
    await homeScreen.deleteEvent(EVENT_NAME_PARTNER)
  })

  after('Close app', async () => {
    await profileScreen.logout()
  })
})
