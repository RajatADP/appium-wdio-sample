import { gestures } from './gestures'

browser.overwriteCommand('$', function ($, selector) {
  if (typeof selector === 'string') {
    return $(selector)
  } else {
    return $(getSelectorByPlatform(selector))
  }
})

browser.overwriteCommand('$$', function ($$, selector) {
  if (typeof selector === 'string') {
    return $$(selector)
  } else {
    return $$(getSelectorByPlatform(selector))
  }
})

browser.addCommand('scrollAndClick', async function (element) {
  await gestures.scrollToElement(element, 10)
  await element.click()
})

browser.addCommand(
  'waitAndClick',
  async function () {
    await this.waitForDisplayed()
    await this.click()
  },
  true
)

browser.addCommand(
  'scrollAndSetValue',
  async function (value) {
    await gestures.scrollToElement(this, 10)
    await this.addValue(value)
  },
  true
)

browser.addCommand('pressEnter', async function () {
  await this.pause(500)
  await driver.pressKeyCode(66)
})

browser.addCommand(
  'isElementPresent',
  async function () {
    await gestures.scrollToElement(this, 10)
    return await this.waitForExist()
  },
  true
)

function getSelectorByPlatform(selector) {
  let platform
  if (driver.isMobile) {
    platform = driver.isAndroid ? 'android' : 'ios'
  } else {
    platform = 'web'
  }
  return selector[platform]
}
