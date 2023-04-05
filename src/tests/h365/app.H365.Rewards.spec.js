import { homeScreen } from '../../pages/homeScreen'
import {
  loginUsingNRIC_Mobile,
  addDeviceNameToAllureReport,
} from '../../helpers/commonMethods'
import { profileScreen } from '../../pages/profileScreen'

describe('Rewards Page', async () => {
  before('Login using NRIC & Mobile', async () => {
    await loginUsingNRIC_Mobile()
    await addDeviceNameToAllureReport()
    // setup user with my rewards list, reward history
  })

  it('Verify Rewards Section', async () => {
    await homeScreen.verifyRewards()
  })

  after('Close app', async () => {
    await profileScreen.logout()
  })
})
