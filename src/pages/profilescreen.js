import { verifyElementPresent, goBack } from '../helpers/commonMethods'
import { signInScreen } from './signIn'
import { homeScreen } from './homeScreen'
import { iOSPredicateString } from '../helpers/Constants'

class ProfileScreen {
  locators = {
    myFitnessTracker: {
      android: '//android.widget.TextView[@text="My Fitness Tracker"]',
      ios: '',
    },
    messagesLink: {
      android: '//android.widget.TextView[@text="Messages"]',
      ios: `${iOSPredicateString}name CONTAINS "Messages"`,
    },
    health: {
      android: '//android.widget.TextView[@text="Health Declaration"]',
      ios: `${iOSPredicateString}name CONTAINS "Health Declaration"`,
    },
    children: {
      android: '//android.widget.TextView[@text="Children Profiles"]',
      ios: `${iOSPredicateString}name CONTAINS "child"`,
    },
    primaryInfo: {
      android: '//android.widget.TextView[@text="Primary Information"]',
      ios: `${iOSPredicateString}name BEGINSWITH[c] "Primary Information"`,
    },
    secondaryInfoLink: {
      android: '//android.widget.TextView[@text="Secondary Information"]',
      ios: `${iOSPredicateString}name BEGINSWITH[c] "Secondary Information"`,
    },
    maritalStatusField: {
      android: '//android.widget.TextView[@text="Marital status"]',
      ios: `${iOSPredicateString}name == "Marital status"`,
    },
    mobile: {
      android: '//android.widget.TextView[@text="Mobile number"]',
      ios: `${iOSPredicateString}name == "Mobile number"`,
    },
    emailField: {
      android: '//android.widget.TextView[@text="Email (Optional)"]',
      ios: `${iOSPredicateString}name == "input-email"`,
    },
    emergency: {
      android: '//android.widget.TextView[@text="Emergency Contact"]',
      ios: `${iOSPredicateString}name CONTAINS "Emergency Contact"`,
    },
    updateBtn: {
      android: '//android.widget.TextView[@text="Update"]',
      ios: `${iOSPredicateString}name == "updateButton"`,
    },
    questionnaire_3: {
      android:
        '//android.widget.TextView[@text="Where are you currently studying at?"]',
      ios: `${iOSPredicateString}name == "Where are you currently studying at?"`,
    },
    questionnaire_2: {
      android:
        '//android.widget.TextView[@text="Please select workplace cluster"]',
      ios: `${iOSPredicateString}name == "Please select workplace cluster"`,
    },
    questionnaire_1: {
      android: '//android.widget.TextView[@text="Where do you work?"]',
      ios: `${iOSPredicateString}name == "Where do you work?"`,
    },
    weightGoal: {
      android: '//android.widget.TextView[@text="Weight Goal (kg)"]',
      ios: `${iOSPredicateString}name == "Weight Goal (kg)"`,
    },
    height: {
      android: '//android.widget.TextView[@text="Height (cm)"]',
      ios: `${iOSPredicateString}name == "Height (cm)"`,
    },
    weight: {
      android: '//android.widget.TextView[@text="Weight (kg)"]',
      ios: `${iOSPredicateString}name == "Weight (kg)"`,
    },
    settings: {
      android: '(//android.widget.ImageView)[1]',
      ios: `${iOSPredicateString}name == "settingsLink"`,
    },
    calendarSection: {
      android: '//android.widget.TextView[@text="Sync calendar"]',
      ios: `${iOSPredicateString}name == "Sync calendar"`,
    },
    partnerAccountsSection: {
      android:
        '//android.widget.TextView[@text="View Linked Partner Accounts"]',
      ios: `${iOSPredicateString}name == "edsh-partner"`,
    },
    appSection: {
      android: '//android.widget.TextView[@text="View App FAQ"]',
      ios: `${iOSPredicateString}label == "View App FAQ"`,
    },
    rewardsChallengeSection: {
      android: '//android.widget.TextView[@text="View Rewards FAQ"]',
      ios: `${iOSPredicateString}name == "rewards-faq"`,
    },
    edshChallengeSection: {
      android: '//android.widget.TextView[@text="View EDSH Challenge FAQ"]',
      ios: `${iOSPredicateString}name == "edsh-faq"`,
    },
    nscChallengeSection: {
      android: '//android.widget.TextView[@text="View NSC Challenge FAQ"]',
      ios: `${iOSPredicateString}name == "nsc-faq"`,
    },
    nscPDF: {
      android: '//android.webkit.WebView[@text="NSC5_MainChallenge_FAQ.pdf"]',
      ios: `${iOSPredicateString}name == "NSC Challenge FAQ"`,
    },
    edshPDF: {
      android: '//android.webkit.WebView[@text="EDSH_AO_FAQ.pdf"]',
      ios: `${iOSPredicateString}name == "EDSH Challenge FAQ"`,
    },
    rewardsPDF: {
      android: '//android.webkit.WebView[@text="HPB Rewards Programme"]',
      ios: `${iOSPredicateString}name == "Rewards FAQ"`,
    },
    appPDF: {
      android: '//android.webkit.WebView[@text="H365_FAQ_V2.pdf"]',
      ios: `${iOSPredicateString}name == "App FAQ"`,
    },
    rewardsTC: {
      android: '//android.widget.TextView[@text="View Rewards T&C"]',
      ios: `${iOSPredicateString}name == "rewards-terms-and-conditions"`,
    },
    rewardsTC_PDF: {
      android: '//android.webkit.WebView[@text="HPB_Rewards_TC.pdf"]',
      ios: `${iOSPredicateString}value == "reward-terms-header"`,
    },
    termsOfUse: {
      android: '//android.widget.TextView[@text="View App Terms of Use"]',
      ios: `${iOSPredicateString}name == "terms-of-use"`,
    },
    termsOfUse_PDF: {
      android: '//android.webkit.WebView[@text="H365AppTCs.pdf"]',
      ios: `${iOSPredicateString}value == "sign-up-terms-header"`,
    },
    sendDiagnostic: {
      android: '//android.widget.TextView[@text="Send Diagnostic Report"]',
      ios: `${iOSPredicateString}name == "report-issue"`,
    },
    reportIssuePage: {
      android:
        '//android.widget.TextView[@text="Add details to your reported issue"]',
      ios: `${iOSPredicateString}value == "Add details to your reported issue"`,
    },
    withdraw_Healthy: {
      android: '//android.widget.TextView[@text="Withdraw from Healthy 365"]',
      ios: `${iOSPredicateString}name == "withdraw-from-app"`,
    },
    withdraw_Btn: {
      android: '//android.widget.TextView[@text="Withdraw"]',
      ios: `${iOSPredicateString}name == "withdraw-btn-id"`,
    },
    privacyStatement: {
      android: '//android.widget.TextView[@text="View Privacy Statement"]',
      ios: `${iOSPredicateString}name == "privacy-statement"`,
    },
    vulnerabilityReport: {
      android: '//android.widget.TextView[@text="Report vulnerability"]',
      ios: `${iOSPredicateString}name == "report-vulnerability"`,
    },
    governmentPrivacyPolicy: {
      android: '//android.webkit.WebView[@text="Privacy Statement"]',
      ios: `${iOSPredicateString}name == "Privacy Statement"`,
    },
    vulnerabilityPortal: {
      android: '//*[@resource-id="vulnerability-disclosure-programme"]',
      ios: `${iOSPredicateString}name == "Report vulnerability"`,
    },
    aboutH365: {
      android: '//android.widget.TextView[@text="About Healthy 365"]',
      ios: `${iOSPredicateString}label == "About Healthy 365"`,
    },
    logOut: {
      android: '//android.widget.TextView[@text="Log out"]',
      ios: `${iOSPredicateString}name == "logout"`,
    },
  }

  get fitnessTracker() {
    return $(this.locators.myFitnessTracker)
  }
  get messages() {
    return $(this.locators.messagesLink)
  }
  get healthDeclaration() {
    return $(this.locators.health)
  }
  get childrenProfile() {
    return $(this.locators.children)
  }
  get primaryInfo() {
    return $(this.locators.primaryInfo)
  }
  get secondaryInfo() {
    return $(this.locators.secondaryInfoLink)
  }
  get maritalStatus() {
    return $(this.locators.maritalStatusField)
  }
  get mobileNumber() {
    return $(this.locators.mobile)
  }
  get email() {
    return $(this.locators.emailField)
  }
  get emergency() {
    return $(this.locators.emergency)
  }
  get weight() {
    return $(this.locators.weight)
  }
  get height() {
    return $(this.locators.height)
  }
  get weightGoal() {
    return $(this.locators.weightGoal)
  }
  get moreInfoquestionnaire_1() {
    return $(this.locators.questionnaire_1)
  }
  get moreInfoquestionnaire_2() {
    return $(this.locators.questionnaire_2)
  }
  get moreInfoquestionnaire_3() {
    return $(this.locators.questionnaire_3)
  }
  get updateBtn() {
    return $(this.locators.updateBtn)
  }
  get settingsBtn() {
    return $(this.locators.settings)
  }
  get syncCalendar() {
    return $(this.locators.calendarSection)
  }
  get partnerAccounts() {
    return $(this.locators.partnerAccountsSection)
  }
  get nscChallenge() {
    return $(this.locators.nscChallengeSection)
  }
  get edshChallenge() {
    return $(this.locators.edshChallengeSection)
  }
  get rewardsChallenge() {
    return $(this.locators.rewardsChallengeSection)
  }
  get appChallenge() {
    return $(this.locators.appSection)
  }
  get nscPDFDocument() {
    return $(this.locators.nscPDF)
  }
  get edshPDFDocument() {
    return $(this.locators.edshPDF)
  }
  get rewardsPDFDocument() {
    return $(this.locators.rewardsPDF)
  }
  get appPDFDocument() {
    return $(this.locators.appPDF)
  }
  get rewardsTC() {
    return $(this.locators.rewardsTC)
  }
  get rewardsTC_PDF() {
    return $(this.locators.rewardsTC_PDF)
  }
  get termsOfUse() {
    return $(this.locators.termsOfUse)
  }
  get termsOfUse_PDF() {
    return $(this.locators.termsOfUse_PDF)
  }
  get sendDiagnostic() {
    return $(this.locators.sendDiagnostic)
  }
  get reportIssuePage() {
    return $(this.locators.reportIssuePage)
  }
  get withdraw_Healthy() {
    return $(this.locators.withdraw_Healthy)
  }
  get withdraw_Btn() {
    return $(this.locators.withdraw_Btn)
  }
  get privacyStatement() {
    return $(this.locators.privacyStatement)
  }
  get vulnerabilityReport() {
    return $(this.locators.vulnerabilityReport)
  }
  get governmentPrivacyPolicy() {
    return $(this.locators.governmentPrivacyPolicy)
  }
  get vulnerabilityPortal() {
    return $(this.locators.vulnerabilityPortal)
  }
  get aboutH365() {
    return $(this.locators.aboutH365)
  }
  get logOut() {
    return $(this.locators.logOut)
  }

  get backBtn() {
    if (browser.isIOS)
      return $(`-ios predicate string:${'name == "back-button"'}`)
  }

  get pdfBackBtn() {
    if (browser.isIOS)
      return $(`-ios predicate string:${'name ENDSWITH "back-button"'}`)
  }

  async verifyProfileSection() {
    await verifyElementPresent(this.messages)
    await verifyElementPresent(this.healthDeclaration)
    await this.verifyPrimaryInfo()
    await this.verifySecondaryInfo()
  }

  async verifyPrimaryInfo() {
    await driver.scrollAndClick(this.primaryInfo)
    await verifyElementPresent(this.mobileNumber)
    await verifyElementPresent(this.email)
    await verifyElementPresent(this.maritalStatus)
    await goBack(this.backBtn)
    await verifyElementPresent(this.messages)
  }

  async verifySecondaryInfo() {
    await driver.scrollToClick(this.secondaryInfo)
    await this.emergency.waitForDisplayed()
    await verifyElementPresent(this.emergency)
    await this.biometrics()
    await this.moreInfo()
    await goBack(this.backBtn)
  }

  async moreInfo() {
    await verifyElementPresent(this.moreInfoquestionnaire_1)
    await verifyElementPresent(this.moreInfoquestionnaire_2)
    await verifyElementPresent(this.moreInfoquestionnaire_3)
    await verifyElementPresent(this.updateBtn)
  }

  async biometrics() {
    await verifyElementPresent(this.weight)
    await verifyElementPresent(this.height)
    await verifyElementPresent(this.weightGoal)
  }

  async verifySettingsInfo() {
    await driver.scrollAndClick(this.settingsBtn)
    await this.permissionSection()
    await this.fAQSection()
    await this.supportSection()
    await this.dataProtectionSection()
    await this.logoutBtn()
  }

  async permissionSection() {
    await verifyElementPresent(this.syncCalendar)
    await verifyElementPresent(this.partnerAccounts)
  }

  async fAQSection() {
    await driver.scrollAndClick(this.nscChallenge)
    await verifyElementPresent(this.nscPDFDocument)
    await goBack(this.backBtn)
    await driver.scrollAndClick(this.edshChallenge)
    await verifyElementPresent(this.edshPDFDocument)
    await goBack(this.backBtn)
    await driver.scrollAndClick(this.rewardsChallenge)
    await verifyElementPresent(this.rewardsPDFDocument)
    await goBack(this.backBtn)
    await driver.scrollAndClick(this.appChallenge)
    await verifyElementPresent(this.appPDFDocument)
    await goBack(this.backBtn)
  }

  async supportSection() {
    await driver.scrollAndClick(this.rewardsTC)
    await verifyElementPresent(this.rewardsTC_PDF)
    await goBack(this.pdfBackBtn)
    await driver.scrollAndClick(this.termsOfUse)
    await verifyElementPresent(this.termsOfUse_PDF)
    await goBack(this.pdfBackBtn)
    await driver.scrollAndClick(this.sendDiagnostic)
    await verifyElementPresent(this.reportIssuePage)
    await goBack(this.backBtn)
    await driver.scrollAndClick(this.withdraw_Healthy)
    await verifyElementPresent(this.withdraw_Btn)
    await goBack(this.backBtn)
  }

  async dataProtectionSection() {
    await driver.scrollAndClick(this.privacyStatement)
    await verifyElementPresent(this.governmentPrivacyPolicy)
    await goBack(this.backBtn)
    await driver.scrollAndClick(this.vulnerabilityReport)
    await verifyElementPresent(this.vulnerabilityPortal)
    await goBack(this.backBtn)
    await verifyElementPresent(this.aboutH365)
  }

  async logoutBtn() {
    await driver.scrollAndClick(this.logOut)
    await verifyElementPresent(signInScreen.NRIC)
  }
  async logout() {
    await driver.scrollAndClick(homeScreen.profileNavigationSection)
    await verifyElementPresent(this.messages)
    await driver.scrollAndClick(this.settingsBtn)
    await this.logoutBtn()
  }
}

export const profileScreen = new ProfileScreen()
