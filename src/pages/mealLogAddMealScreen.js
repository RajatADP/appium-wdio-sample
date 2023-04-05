import { verifyElementPresent, goBack } from '../helpers/commonMethods'
import { iOSPredicateString } from '../helpers/Constants'

class MealLogAddMealScreen {
  locators = {
    mealLogTitle: {
      android: '//android.widget.TextView[contains(@text, "Meal Log")]',
      ios: `${iOSPredicateString}value == "Meal Log"`,
    },
    earlyMorningMealband: {
      android: '//android.widget.TextView[contains(@text, "Early Morning")]',
      ios: `${iOSPredicateString}value == "Early Morning"`,
    },
    searchBar: {
      android:
        '//android.widget.EditText[contains(@text, "Search food or drink")]',
      ios: `${iOSPredicateString}name == "Search food or drink"`,
    },
    cancelButton: {
      android: '//android.widget.TextView[contains(@text, "Cancel")]',
      ios: `${iOSPredicateString}name == "Cancel"`,
    },
    photoSearchButton: {
      android: '~photoSearchButton, ',
      ios: `${iOSPredicateString}name == "photoSearchButton"`,
    },
    myLoggedItems: {
      android: '//android.widget.TextView[contains(@text, "My Logged Items")]',
      ios: `${iOSPredicateString}name == "My Logged Items"`,
    },
    myLoggedAddedItems: {
      android:
        '//android.widget.TextView[contains(@text, "My Logged Items (1)")]',
      ios: `${iOSPredicateString}name == "My Logged Items (1)"`,
    },
    myFavourites: {
      android:
        '//android.widget.TextView[contains(@text, "My Favourites (0/25)")]',
      ios: `${iOSPredicateString}name == "My Favourites (0/25)"`,
    },
    myFavouritesAddedItem: {
      android:
        '//android.widget.TextView[contains(@text, "My Favourites (1/25)")]',
      ios: `${iOSPredicateString}name == "My Favourites (1/25)"`,
    },
    addFoodAndDrinkText: {
      android:
        '//android.widget.TextView[contains(@text, "Add food and drink to Early Morning")]',
      ios: `${iOSPredicateString}name == "Add food and drink to Early Morning"`,
    },
    searchTakeAPhotoOrSelectFromYourFavouritesText: {
      android:
        '//android.widget.TextView[contains(@text, "Search, take a photo or select from your favourites")]',
      ios: `${iOSPredicateString}name == "Search, take a photo or select from your favourites"`,
    },
    saveItems: {
      android: '~button-text, ',
      ios: `${iOSPredicateString}name == "button-text"`,
    },
    resultsFound: {
      android: '//android.widget.TextView[contains(@text, "2 results found")]',
      ios: `${iOSPredicateString}name == "2 results found"`,
    },
    resultsText: {
      android: '//android.widget.TextView[contains(@text, "Papaya")]',
      ios: `${iOSPredicateString}name == "Papaya"`,
    },
    resultsCalories: {
      android:
        '//android.widget.TextView[contains(@text, "44 kcal for 1 slice")]',
      ios: `${iOSPredicateString}name == "44 kcal for 1 slice"`,
    },
    itemQuantityTwoPointFive: {
      android: '//android.widget.TextView[contains(@text, "0.25")]',
      ios: `${iOSPredicateString}name == "0.25"`,
    },
    itemQuantityTwo: {
      android: '//android.widget.TextView[contains(@text, "2")]',
      ios: `${iOSPredicateString}name == "2"`,
    },
    starUnfilledIcon: {
      android: '~star-unfilled-icon, ',
      ios: `${iOSPredicateString}name == "star-unfilled-icon"`,
    },
    starFilledIcon: {
      android: '~star-filled-icon, ',
      ios: `${iOSPredicateString}name == "star-filled-icon"`,
    },
    trashIcon: {
      android: '~trash-icon, ',
      ios: `${iOSPredicateString}name == "trash-icon"`,
    },
    plusButton: {
      android: '~plus-button, ',
      ios: `${iOSPredicateString}name == "plus-button"`,
    },
    itemCaloriesTwoPointFive: {
      android: '//android.widget.TextView[contains(@text, "11 kcal")]',
      ios: `${iOSPredicateString}name == "11 kcal"`,
    },
    itemCaloriesTwo: {
      android: '//android.widget.TextView[contains(@text, "88 kcal")]',
      ios: `${iOSPredicateString}name == "88 kcal"`,
    },
    totalIntakeText: {
      android:
        '//android.widget.TextView[contains(@text, "Total intake for Early Morning:")]',
      ios: `${iOSPredicateString}name == "Total intake for Early Morning:"`,
    },
    totalEnergyIntake: {
      android: '~total-energy-intake, ',
      ios: `${iOSPredicateString}name == "total-energy-intake"`,
    },
    minusButton: {
      android: '~minus-button, ',
      ios: `${iOSPredicateString}name == "minus-button"`,
    },
    drinkPopupText: {
      android:
        '//android.widget.TextView[contains(@text, "Did you have a drink with your food?")]',
      ios: `${iOSPredicateString}name == "Did you have a drink with your food?"`,
    },
    logMyDrink: {
      android: '//android.widget.TextView[contains(@text, "Log my drink")]',
      ios: `${iOSPredicateString}name == "Log my drink"`,
    },
    saveItemsConfirm: {
      android: '~Save-item-btn, ',
      ios: `${iOSPredicateString}name == "Save-item-btn"`,
    },
  }

  get mealLogTitle() {
    return $(this.locators.mealLogTitle)
  }

  get earlyMorningMealband() {
    return $(this.locators.earlyMorningMealband)
  }

  get searchBar() {
    return $(this.locators.searchBar)
  }

  get cancelButton() {
    return $(this.locators.cancelButton)
  }

  get photoSearchButton() {
    return $(this.locators.photoSearchButton)
  }

  get myLoggedItems() {
    return $(this.locators.myLoggedItems)
  }

  get myLoggedAddedItems() {
    return $(this.locators.myLoggedAddedItems)
  }

  get myFavourites() {
    return $(this.locators.myFavourites)
  }

  get myFavouritesAddedItem() {
    return $(this.locators.myFavouritesAddedItem)
  }

  get addFoodAndDrinkText() {
    return $(this.locators.addFoodAndDrinkText)
  }

  get searchTakeAPhotoOrSelectFromYourFavouritesText() {
    return $(this.locators.searchTakeAPhotoOrSelectFromYourFavouritesText)
  }

  get saveItems() {
    return $(this.locators.saveItems)
  }

  get resultsFound() {
    return $(this.locators.resultsFound)
  }

  get resultsText() {
    return $(this.locators.resultsText)
  }

  get resultsCalories() {
    return $(this.locators.resultsCalories)
  }

  get itemQuantityTwoPointFive() {
    return $(this.locators.itemQuantityTwoPointFive)
  }

  get itemQuantityTwo() {
    return $(this.locators.itemCaloriesTwo)
  }

  get starUnfilledIcon() {
    return $(this.locators.starUnfilledIcon)
  }

  get starFilledIcon() {
    return $(this.locators.starFilledIcon)
  }

  get trashIcon() {
    return $(this.locators.trashIcon)
  }

  get minusButton() {
    return $(this.locators.minusButton)
  }

  get plusButton() {
    return $(this.locators.plusButton)
  }

  get itemCaloriesTwoPointFive() {
    return $(this.locators.itemCaloriesTwoPointFive)
  }

  get itemCaloriesTwo() {
    return $(this.locators.itemCaloriesTwo)
  }

  get totalIntakeText() {
    return $(this.locators.totalIntakeText)
  }

  get totalEnergyIntake() {
    return $(this.locators.totalEnergyIntake)
  }

  get drinkPopupText() {
    return $(this.locators.drinkPopupText)
  }

  get logMyDrink() {
    return $(this.locators.logMyDrink)
  }

  get saveItemsConfirm() {
    return $(this.locators.saveItemsConfirm)
  }

  async verifyAddMealScreen() {
    await driver.scrollAndClick(this.earlyMorningMealband)
    await verifyElementPresent(this.earlyMorningMealband)
    await verifyElementPresent(this.photoSearchButton)
    await driver.scrollAndClick(this.searchBar)
    await driver.scrollAndClick(this.cancelButton)
    await browser.pause(200)
    await verifyElementPresent(this.myLoggedItems)
    await verifyElementPresent(this.myFavourites)
    await verifyElementPresent(this.addFoodAndDrinkText)
    await verifyElementPresent(
      this.searchTakeAPhotoOrSelectFromYourFavouritesText
    )
    await verifyElementPresent(this.saveItems)
    await goBack()
  }

  async searchAndAddItem(item) {
    await driver.scrollAndClick(this.earlyMorningMealband)
    await driver.scrollAndClick(this.searchBar)
    await this.searchBar.scrollAndSetValue(item)
    await browser.pressEnter()
    await browser.pause(200)
    await verifyElementPresent(this.resultsFound)
    await verifyElementPresent(this.resultsText)
    await verifyElementPresent(this.resultsCalories)
    await driver.scrollAndClick(this.resultsText)
    await verifyElementPresent(this.resultsText)
    await verifyElementPresent(this.starUnfilledIcon)
    await this.clickMinusNTimes(3)
    await verifyElementPresent(this.itemQuantityTwoPointFive)
    await verifyElementPresent(this.itemCaloriesTwoPointFive)
    await this.clickPlusNTimes(5)
    await verifyElementPresent(this.itemQuantityTwo)
    await verifyElementPresent(this.itemCaloriesTwo)
    await verifyElementPresent(this.totalIntakeText)
    await verifyElementPresent(this.totalEnergyIntake)
    await driver.scrollAndClick(this.saveItems)
    await verifyElementPresent(this.drinkPopupText)
    await driver.scrollAndClick(this.logMyDrink)
    await driver.scrollAndClick(this.saveItems)
    await driver.scrollAndClick(this.saveItemsConfirm)
  }

  async clickPlusNTimes(count) {
    for (let i = 0; i < count; i++) {
      await driver.scrollAndClick(this.plusButton)
      await browser.pause(200)
    }
  }

  async clickMinusNTimes(count) {
    for (let i = 0; i < count; i++) {
      await driver.scrollAndClick(this.minusButton)
      await browser.pause(500)
    }
  }

  async addAndVerifyFavourites(item) {
    await verifyElementPresent(this.earlyMorningMealband)
    await driver.scrollAndClick(this.earlyMorningMealband)
    await driver.scrollAndClick(this.searchBar)
    await this.searchBar.scrollAndSetValue(item)
    await browser.pressEnter()
    await driver.scrollAndClick(this.resultsText)
    await verifyElementPresent(this.starUnfilledIcon)
    await driver.scrollAndClick(this.starUnfilledIcon)
    await driver.scrollAndClick(this.myFavouritesAddedItem)
    await verifyElementPresent(this.starFilledIcon)
    await driver.scrollAndClick(this.starFilledIcon)
    await driver.scrollAndClick(this.myFavourites)
    await driver.scrollAndClick(this.myLoggedAddedItems)
    await verifyElementPresent(this.starUnfilledIcon)
    await goBack()
  }
}

export const mealLogAddMealScreen = new MealLogAddMealScreen()
