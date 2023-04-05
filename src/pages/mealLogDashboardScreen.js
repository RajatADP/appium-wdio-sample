import { verifyElementPresent, goBack } from '../helpers/commonMethods'
import { iOSPredicateString } from '../helpers/Constants'

class MealLogDashboardScreen {
  locators = {
    mealLogTitle: {
      android: '//android.widget.TextView[contains(@text, "Meal Log")]',
      ios: `${iOSPredicateString}value == "Meal Log"`,
    },
    kcalText: {
      android: '//android.widget.TextView[contains(@text, "kcal")]',
      ios: `${iOSPredicateString}name == "kcal"`,
    },
    zerokcalText: {
      android: '//android.widget.TextView[contains(@text, "0 kcal")]',
      ios: `${iOSPredicateString}name == "0 kcal"`,
    },
    dailySummaryButton: {
      android: '~summary-link, ',
      ios: `${iOSPredicateString}name == "summary-link"`,
    },
    whatIAteAndDrankTest: {
      android:
        '//android.widget.TextView[contains(@text, "WHAT I ATE AND DRANK")]',
      ios: `${iOSPredicateString}name == "WHAT I ATE AND DRANK"`,
    },
    mealLogInfo: {
      android: '~meal-log-info, ',
      ios: `${iOSPredicateString}name == "meal-log-info"`,
    },
    earlyMorningMealband: {
      android: '//android.widget.TextView[contains(@text, "Early Morning")]',
      ios: `${iOSPredicateString}value == "Early Morning"`,
    },
    morningMealband: {
      android: '//android.widget.TextView[contains(@text, "Morning")]',
      ios: `${iOSPredicateString}name == "Morning"`,
    },
    middayMealband: {
      android: '//android.widget.TextView[contains(@text, "Midday")]',
      ios: `${iOSPredicateString}name == "Midday"`,
    },
    afternoonMealband: {
      android: '//android.widget.TextView[contains(@text, "Afternoon")]',
      ios: `${iOSPredicateString}name == "Afternoon"`,
    },
    eveningMealband: {
      android: '//android.widget.TextView[contains(@text, "Evening")]',
      ios: `${iOSPredicateString}name == "Evening"`,
    },
    nightMealband: {
      android: '//android.widget.TextView[contains(@text, "Night")]',
      ios: `${iOSPredicateString}name == "Night"`,
    },
    prevDayButton: {
      android: '~prevDayButton, ',
      ios: `${iOSPredicateString}name == "prevDayButton"`,
    },
    nextDayButton: {
      android: '~nextDayButton, ',
      ios: `${iOSPredicateString}name == "nextDayButton"`,
    },
    goToCalorieCalculator: {
      android:
        '//android.widget.TextView[contains(@text, "Go to Calorie Calculator")]',
      ios: `${iOSPredicateString}name == "Go to Calorie Calculator"`,
    },
    calorieCalculatorTitle: {
      android:
        '//android.widget.TextView[contains(@text, "Calorie Calculator")]',
      ios: `${iOSPredicateString}name == "Calorie Calculator"`,
    },
    successBanner: {
      android: '~messageText, ',
      ios: `${iOSPredicateString}name == "messageText"`,
    },
    caloriesInMealBand: {
      android:
        '//android.widget.TextView[contains(@text, "Early Morning | Logged:")]',
      ios: `${iOSPredicateString}name == "Early Morning | Logged:"`,
    },
    loggedItem: {
      android: '//android.widget.TextView[contains(@text, "Papaya")]',
      ios: `${iOSPredicateString}name == "Latte"`,
    },
    loggedItemCalories: {
      android: '//android.widget.TextView[contains(@text, "88 kcal")]',
      ios: `${iOSPredicateString}name == "620 kcal"`,
    },
  }

  get mealLogTitle() {
    return $(this.locators.mealLogTitle)
  }

  get kcalText() {
    return $(this.locators.kcalText)
  }

  get zerokcalText() {
    return $(this.locators.zerokcalText)
  }

  get dailySummaryButton() {
    return $(this.locators.dailySummaryButton)
  }

  get whatIAteAndDrankTest() {
    return $(this.locators.whatIAteAndDrankTest)
  }

  get mealLogInfo() {
    return $(this.locators.mealLogInfo)
  }

  get earlyMorningMealband() {
    return $(this.locators.earlyMorningMealband)
  }

  get morningMealband() {
    return $(this.locators.morningMealband)
  }

  get middayMealband() {
    return $(this.locators.middayMealband)
  }

  get afternoonMealband() {
    return $(this.locators.afternoonMealband)
  }

  get eveningMealband() {
    return $(this.locators.eveningMealband)
  }

  get nightMealband() {
    return $(this.locators.nightMealband)
  }

  get prevDayButton() {
    return $(this.locators.prevDayButton)
  }

  get nextDayButton() {
    return $(this.locators.nextDayButton)
  }

  get goToCalorieCalculator() {
    return $(this.locators.goToCalorieCalculator)
  }

  get calorieCalculatorTitle() {
    return $(this.locators.calorieCalculatorTitle)
  }

  get successBanner() {
    return $(this.locators.successBanner)
  }

  get caloriesInMealBand() {
    return $(this.locators.caloriesInMealBand)
  }

  get loggedItem() {
    return $(this.locators.loggedItem)
  }

  get loggedItemCalories() {
    return $(this.locators.loggedItemCalories)
  }

  get backBtn() {
    return $(`-ios predicate string:${'name ENDSWITH "back-button"'}`)
  }

  async verifyMealLogDashboard() {
    await verifyElementPresent(this.mealLogTitle)
    await verifyElementPresent(this.dailySummaryButton)
    await verifyElementPresent(this.whatIAteAndDrankTest)
    await verifyElementPresent(this.mealLogInfo)
    await verifyElementPresent(this.earlyMorningMealband)
    await verifyElementPresent(this.morningMealband)
    await verifyElementPresent(this.middayMealband)
    await verifyElementPresent(this.afternoonMealband)
    await verifyElementPresent(this.eveningMealband)
    await verifyElementPresent(this.nightMealband)
  }

  async verifyDailySummary() {
    await driver.scrollAndClick(this.dailySummaryButton)
    await verifyElementPresent(this.mealLogTitle)
    await verifyElementPresent(this.earlyMorningMealband)
    await verifyElementPresent(this.morningMealband)
    await verifyElementPresent(this.middayMealband)
    await verifyElementPresent(this.afternoonMealband)
    await verifyElementPresent(this.eveningMealband)
    await verifyElementPresent(this.nightMealband)
    await goBack(this.backBtn)
  }

  async verifyCalorieCalculator() {
    await driver.scrollAndClick(this.mealLogInfo)
    await driver.scrollAndClick(this.goToCalorieCalculator)
    await verifyElementPresent(this.calorieCalculatorTitle)
    await goBack(this.backBtn)
  }

  async verifySucessOfMealLog() {
    await verifyElementPresent(this.successBanner)
    await verifyElementPresent(this.caloriesInMealBand)
    await driver.scrollAndClick(this.dailySummaryButton)
    await verifyElementPresent(this.loggedItem)
    await verifyElementPresent(this.loggedItemCalories)
    await goBack(this.backBtn)
  }
}

export const mealLogDashboardScreen = new MealLogDashboardScreen()
