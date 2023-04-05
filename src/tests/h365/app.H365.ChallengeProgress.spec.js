import { challengeProgress } from '../../pages/challengeProgress'
import {
  loginUsingNRIC_Mobile,
  addDeviceNameToAllureReport,
} from '../../helpers/commonMethods'
import { profileScreen } from '../../pages/profileScreen'

//for ios ned dev help to put element to challenge progress button
describe('Challenge Progress', async () => {
  before('Login using NRIC & Mobile', async () => {
    await loginUsingNRIC_Mobile()
    await addDeviceNameToAllureReport()
  })

  it('Verify National Step Challenge (Main Challenge - Always ON)', async () => {
    await challengeProgress.stepChallengeProgress()
  })

  it('Verify National Step Challenge Corporate Challenge', async () => {
    await challengeProgress.stepCorporateChallengeProgress()
  })

  it('Verify Scan and Win Challenge', async () => {
    await challengeProgress.scanAndWinChallengeProgress()
  })

  it('Verify EDSH Challenge', async () => {
    await challengeProgress.edshCards()
  })

  after('Close app', async () => {
    await profileScreen.logout()
  })
})
