import { homeScreen } from '../../pages/homeScreen'
import { profileScreen } from '../../pages/profileScreen'
import {
  loginUsingNRIC_Mobile,
  addDeviceNameToAllureReport,
} from '../../helpers/commonMethods'

describe('Login using NRIC and Mobile number. User should navigate to Home Dashboard', () => {
  before('Login using NRIC & Mobile', async () => {
    //Data Setup
    //S5343114C = put activity summary
    await loginUsingNRIC_Mobile()
    await addDeviceNameToAllureReport()
  })

  it('Verify Recommendation Banners Section', async () => {
    //need to ask dev to add element value for buttons
    if (browser.isAndroid) {
      await homeScreen.bookAndManageRoadshow()
      await homeScreen.partnerBanner()
      await homeScreen.challengeBanner()
    }
  })

  it('Verify Home Dashboard & Bottom Navigation Section', async () => {
    await homeScreen.verifyDashboardSections()
    await homeScreen.verifyBottomNavigationSections()
  })

  after('Close app', async () => {
    await profileScreen.logout()
  })
})
