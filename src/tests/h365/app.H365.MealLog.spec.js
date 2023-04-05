import { homeScreen } from '../../pages/homeScreen'
import { mealLogDashboardScreen } from '../../pages/mealLogDashboardScreen'
import {
  loginUsingNRIC_Mobile,
  addDeviceNameToAllureReport,
} from '../../helpers/commonMethods'
import { mealLogAddMealScreen } from '../../pages/mealLogAddMealScreen'

describe('Meal log test', () => {
  before('Login using NRIC & Mobile', async () => {
    await loginUsingNRIC_Mobile()
    await addDeviceNameToAllureReport()
  })

  it('Verify Meal Log Navigation Section', async () => {
    await homeScreen.clickLogFoodAndDrink()
    await mealLogDashboardScreen.verifyMealLogDashboard()
    await mealLogDashboardScreen.verifyCalorieCalculator()
  })

  it('Verify Search and Add Item', async () => {
    await mealLogAddMealScreen.verifyAddMealScreen()
    await mealLogAddMealScreen.searchAndAddItem('papaya')
    await mealLogDashboardScreen.verifySucessOfMealLog()
  })

  it('Verify Add and Favourite Item', async () => {
    await mealLogAddMealScreen.addAndVerifyFavourites('papaya')
  })

  after('Close app', async () => {
    await browser.closeApp()
  })
})
