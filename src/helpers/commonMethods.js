const allureReporter = require('@wdio/allure-reporter').default
import loginData from '../helpers/login_data.json'
import { welcomeScreen } from '../pages/welcomeScreen'
import { signInScreen } from '../pages/signIn'
import { otpScreen } from '../pages/otpScreen'

async function verifyElementPresent(element) {
  expect(await element.isElementPresent()).toBeTruthy
}

async function addDeviceNameToAllureReport() {
  if (browser.capabilities.deviceName.includes('emulator'))
    allureReporter.addStory(
      browser.capabilities.avd + '_' + browser.capabilities.platformVersion
    )
  else allureReporter.addStory(browser.capabilities.pCloudy_DeviceFullName)
}

async function loginUsingNRIC_Mobile() {
  await handleDiveInBtn()
  var obj = await getUserDetails()
  await signInScreen.NRIC.scrollAndSetValue(obj.nric)
  await signInScreen.MobileNumber.scrollAndSetValue(obj.mobile)
  await driver.scrollAndClick(signInScreen.SignIn)
  await otpScreen.enterOTP()
}

async function handleDiveInBtn() {
  let isExisting = await welcomeScreen.diveInApp.isExisting()
  if (isExisting) {
    await driver.scrollAndClick(welcomeScreen.diveInApp)
  }
}

async function getUserDetails() {
  let deviceName, obj
  if (browser.capabilities.deviceName.includes('emulator'))
    deviceName = 'Pixel_6_Pro'
  else deviceName = browser.capabilities.pCloudy_DeviceFullName
  loginData.users.forEach((element) => {
    if (element.deviceName === deviceName && element.env === process.env.ENV) {
      obj = {
        nric: element.nric,
        mobile: element.mobile,
      }
    }
  })
  return obj
}

async function goBack(element) {
  if (browser.isAndroid) {
    await browser.back()
  } else {
    await element.waitAndClick()
  }
}

export {
  goBack,
  getUserDetails,
  handleDiveInBtn,
  loginUsingNRIC_Mobile,
  addDeviceNameToAllureReport,
  verifyElementPresent,
}
