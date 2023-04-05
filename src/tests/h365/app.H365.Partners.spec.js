import { homeScreen } from '../../pages/homeScreen'
import { partnerScreen } from '../../pages/partnerScreen'
import { exploreScreen } from '../../pages/exploreScreen'
import {
  loginUsingNRIC_Mobile,
  addDeviceNameToAllureReport,
} from '../../helpers/commonMethods'
import { profileScreen } from '../../pages/profileScreen'

describe('Verify Partners Business flow', () => {
  before('Login using NRIC & Mobile', async () => {
    await loginUsingNRIC_Mobile()
    await addDeviceNameToAllureReport()
  })

  it('Verify Partner Login Page should be visible', async () => {
    await homeScreen.clickExplore()
    await exploreScreen.enterPartnersSection()
    await partnerScreen.verifyPartnerLoginPage()
  })

  after('Close app', async () => {
    await profileScreen.logout()
  })
})
