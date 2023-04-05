import { verifyElementPresent, goBack } from '../helpers/commonMethods'
import { gestures } from '../helpers/gestures'
import { eventscreen } from './eventScreen'
import { iOSPredicateString } from '../helpers/Constants'

class HomeScreen {
  locators = {
    homeTitle: {
      android: '//android.widget.TextView[@text="Hello"]',
      ios: `${iOSPredicateString}value == "Home"`,
    },
    otpScreenTitle: {
      android: '//android.widget.TextView[@text="Enter your security code"]',
      ios: `${iOSPredicateString}name == "Enter your security code"`,
    },
    homeTab: {
      android: '//android.widget.TextView[@text="Home"]',
      ios: `${iOSPredicateString}name == "Home-id"`,
    },
    exploreTab: {
      android: '//android.widget.TextView[@text="Explore"]',
      ios: `${iOSPredicateString}name == "Explore-id"`,
    },
    scanTab: {
      android: '//android.widget.TextView[@text="Scan"]',
      ios: `${iOSPredicateString}name == "Scan-id"`,
    },
    rewardsTab: {
      android: '//android.widget.TextView[@text="My Rewards"]',
      ios: `${iOSPredicateString}name == "my-rewards"`,
    },
    rewardsNav: {
      android: '//android.widget.TextView[@text="Rewards"]',
      ios: `${iOSPredicateString}name == "Rewards-id"`,
    },
    redeemLink: {
      android: '//android.view.ViewGroup[@content-desc="redeem-button, "]',
    },
    profileTab: {
      android: '//android.widget.TextView[contains(@text, "Profile")]//..',
      ios: `${iOSPredicateString}name == "Profile-id"`,
    },
    myHealthPoints: {
      android: '//android.widget.TextView[@text="My Healthpoints"]',
      ios: `${iOSPredicateString}name == "my-wallet"`,
    },
    recommendationTitle: {
      android: '//android.widget.TextView[contains(@text, "RECOMMENDATION")]',
      ios: `${iOSPredicateString}name == "RECOMMENDATION"`,
    },
    activityTitle: {
      android:
        '//android.widget.TextView[contains(@text, "MY DAILY PROGRESS")]',
      ios: `${iOSPredicateString}name == "MY DAILY PROGRESS"`,
    },
    bookedEventTitle: {
      android: '//android.widget.TextView[@text="Booked"]',
      ios: `${iOSPredicateString}name CONTAINS "Booked Recommended"`,
    },
    challengeProgressTitle: {
      android: '//android.widget.TextView[@text="MY PROGRAMMES"]',
      ios: `${iOSPredicateString}name == "CHALLENGE PROGRESS"`,
    },
    creditWallet: {
      android: '~hpb-credit-wallet, ',
      ios: `${iOSPredicateString}name == "hpb-credit-wallet"`,
    },
    autoRedemption: {
      android: '~auto-redemption, ',
      ios: `${iOSPredicateString}name == "auto-redemption"`,
    },
    transactionHistory: {
      android: '~transaction-history, ',
      ios: `${iOSPredicateString}name == "transaction-history"`,
    },
    viewHistory: {
      android: '//android.widget.TextView[@text="View history"]',
      ios: `${iOSPredicateString}name == "link-button"`,
    },
    activeVouchersTitle: {
      android:
        '//android.widget.TextView[@text= "Here are the vouchers that you can use."]',
      ios: `${iOSPredicateString}name == "Here are the vouchers that you can use."`,
    },
    rewardViewHistoryPage: {
      android: '//android.widget.TextView[@text= "Rewards History"]',
      ios: `${iOSPredicateString}name == "Rewards History"`,
    },
    roadShowBannerBtn: {
      android: '//android.widget.TextView[@text="Book & Manage"]',
    },
    appointmentPage: {
      android: '//android.widget.TextView[@text="Select appointment type"]',
    },
    partnerBannerBtn: {
      android: '//android.widget.TextView[@text="Learn more"]',
    },
    partnerPage: {
      android: '//android.widget.TextView[@text="Partners"]',
    },
    challengeBannerBtn: {
      android: '//android.widget.TextView[@text="Register now"]',
    },
    dietLogButton: {
      android: '~mealLogCounter, ',
      ios: `${iOSPredicateString}name == "mealLogCounter"`,
    },
  }

  get appHomeTitle() {
    return $(this.locators.homeTitle)
  }

  get healthpointsSection() {
    return $(this.locators.myHealthPoints)
  }

  get myRewardsSection() {
    return $(this.locators.rewardsTab)
  }

  get myRecommendationSection() {
    return $(this.locators.recommendationTitle)
  }

  get activitySummarySection() {
    return $(this.locators.activityTitle)
  }

  get bookedEventsSection() {
    return $(this.locators.bookedEventTitle)
  }

  get challengeProgressSection() {
    return $(this.locators.challengeProgressTitle)
  }

  get homeNavigationSection() {
    return $(this.locators.homeTab)
  }

  get exploreNavigationSection() {
    return $(this.locators.exploreTab)
  }

  get scanNavigationSection() {
    return $(this.locators.scanTab)
  }

  get rewardsNavigationSection() {
    return $(this.locators.rewardsNav)
  }

  get profileNavigationSection() {
    return $(this.locators.profileTab)
  }

  get bookedEventAppiumActivity() {
    return $('//android.widget.TextView[@text= "Appium_Activity"]')
  }

  get partnerCodeAppiumActivity() {
    const selector =
      'new UiSelector().text("Appium_Private_Activity").className("android.widget.TextView")'
    return $(`android=${selector}`)
  }

  get partnerCodeAppiumPartner() {
    const selector =
      'new UiSelector().text("Appium_Partner_Activity").className("android.widget.TextView")'
    return $(`android=${selector}`)
  }

  get logFoodAndDrinkAppiumMealLog() {
    return $(this.locators.dietLogButton)
  }

  get redeemNowLink() {
    return $(this.locators.redeemLink)
  }

  get creditWallet() {
    return $(this.locators.creditWallet)
  }

  get autoRedemption() {
    return $(this.locators.autoRedemption)
  }

  get transactionHistory() {
    return $(this.locators.transactionHistory)
  }

  get viewMore() {
    return $('//android.widget.TextView[@text= "View more"]')
  }

  get completedTransactionsHeader() {
    return $(
      '//android.widget.TextView[@text= "Here are all the transactions completed in the past 3 months."]'
    )
  }

  get pendingTransactionsHeader() {
    return $('//android.widget.TextView[@text= "Pending"]')
  }

  get activeVouchersTitle() {
    return $(this.locators.activeVouchersTitle)
  }

  get rewardViewHistoryLink() {
    return $(this.locators.viewHistory)
  }

  get rewardViewHistoryPage() {
    return $(this.locators.rewardViewHistoryPage)
  }

  get appointmentPage() {
    return $(this.locators.appointmentPage)
  }

  get roadShowBannerBtn() {
    return $(this.locators.roadShowBannerBtn)
  }

  get partnerBannerBtn() {
    return $(this.locators.partnerBannerBtn)
  }

  get partnerPageTitle() {
    return $(this.locators.partnerPage)
  }

  get challengeBannerBtn() {
    return $(this.locators.challengeBannerBtn)
  }

  async verifyDashboardSections() {
    await verifyElementPresent(this.homeNavigationSection)
    await verifyElementPresent(this.healthpointsSection)
    await verifyElementPresent(this.myRewardsSection)
    await verifyElementPresent(this.myRecommendationSection)
    await verifyElementPresent(this.activitySummarySection)
    await verifyElementPresent(this.challengeProgressSection)
    await verifyElementPresent(this.bookedEventsSection)
  }

  async verifyBottomNavigationSections() {
    await verifyElementPresent(this.profileNavigationSection)
    await verifyElementPresent(this.rewardsNavigationSection)
    await verifyElementPresent(this.scanNavigationSection)
    await verifyElementPresent(this.exploreNavigationSection)
    await verifyElementPresent(this.homeNavigationSection)
  }

  async clickExplore() {
    await driver.scrollAndClick(this.exploreNavigationSection)
  }

  async clickProfile() {
    await driver.scrollAndClick(this.profileNavigationSection)
  }

  async deleteEvent(eventName) {
    await verifyElementPresent(this.myRewardsSection)
    // await scrollToBottomInAndroid()
    if (eventName.includes('Private'))
      await driver.scrollAndClick(this.partnerCodeAppiumActivity)
    if (eventName.includes('Partner'))
      await driver.scrollAndClick(this.partnerCodeAppiumPartner)
    if (eventName === 'Appium_Activity')
      await driver.scrollAndClick(this.bookedEventAppiumActivity)
    await eventscreen.cancelBookedEvent()
  }

  async clickLogFoodAndDrink() {
    await driver.scrollAndClick(this.logFoodAndDrinkAppiumMealLog)
  }

  async verifyRewards() {
    await driver.scrollAndClick(this.healthpointsSection)
    await this.verifyMyWalletSection()
    await this.verifyTransactionHistory()
    await this.myRewards()
  }

  async verifyMyWalletSection() {
    if (browser.isAndroid) await verifyElementPresent(this.redeemNowLink)
    await verifyElementPresent(this.creditWallet)
    await verifyElementPresent(this.autoRedemption)
    await verifyElementPresent(this.transactionHistory)
  }

  async verifyTransactionHistory() {
    await driver.scrollAndClick(this.viewMore)
    await verifyElementPresent(this.completedTransactionsHeader)
    await verifyElementPresent(this.pendingTransactionsHeader)
    await goBack()
  }

  async myRewards() {
    await driver.scrollAndClick(this.myRewardsSection)
    await verifyElementPresent(this.activeVouchersTitle)
    await verifyElementPresent(this.rewardViewHistoryLink)
    //await this.rewardViewHistoryLink)
    // await verifyElementPresent(this.rewardViewHistoryPage)
    // await goBack()
  }

  async bookAndManageRoadshow() {
    await verifyElementPresent(this.homeNavigationSection)
    const { x, y } = await (await this.myRecommendationSection).getLocation()
    await this.selectBanner(this.roadShowBannerBtn, x, y)
    await driver.scrollAndClick(this.roadShowBannerBtn)
    await verifyElementPresent(this.appointmentPage)
    await goBack()
  }

  async challengeBanner() {
    await verifyElementPresent(this.homeNavigationSection)
    const { x, y } = await (await this.myRecommendationSection).getLocation()
    await this.selectBanner(this.challengeBannerBtn, x, y)
    await driver.scrollAndClick(this.challengeBannerBtn)
    //TODO- getting error now
    //await verifyElementPresent(this.)
    await goBack()
  }

  async partnerBanner() {
    await verifyElementPresent(this.homeNavigationSection)
    const { x, y } = await (await this.myRecommendationSection).getLocation()
    await this.selectBanner(this.partnerBannerBtn, x, y)
    await driver.scrollAndClick(this.partnerBannerBtn)
    await verifyElementPresent(this.partnerPageTitle)
    await goBack()
  }

  async selectBanner(element, x, y, maxScrolls = 5, amount = 0) {
    if (!(await element.isDisplayed()) && amount <= maxScrolls) {
      await gestures.swipe(
        { x: x + 700, y: y + 1000 },
        { x: x + 1500, y: y + 1100 }
      )
      await this.selectBanner(element, x, y, maxScrolls, amount + 1)
    } else if (amount > maxScrolls) {
      throw new Error(
        `The element '${element}' could not be found or is not visible.`
      )
    }
  }
}

export const homeScreen = new HomeScreen()
