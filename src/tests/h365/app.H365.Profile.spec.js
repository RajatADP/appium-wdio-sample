import { homeScreen } from '../../pages/homeScreen'
import {
  loginUsingNRIC_Mobile,
  addDeviceNameToAllureReport,
} from '../../helpers/commonMethods'
import { profileScreen } from '../../pages/profileScreen'

describe('Profile Page', async () => {
  before('Login using NRIC & Mobile', async () => {
    await loginUsingNRIC_Mobile()
    await addDeviceNameToAllureReport()
  })

  it('Verify Profile Section', async () => {
    await homeScreen.clickProfile()
    await profileScreen.verifyProfileSection()
  })

  it('Verify Settings Section', async () => {
    await homeScreen.clickProfile()
    await profileScreen.verifySettingsInfo()
  })
})
