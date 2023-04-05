require('dotenv').config()
const { config } = require('./wdio.shared.conf')

const deviceName = process.env.ANDROID_DEVICE || 'emulator name' //Pixel_6_Pro //Nexus_6
const appPath = process.env.ANDROID_APP
const deviceVersion = process.env.ANDROID_VERSION || 'android version'
const launchTimeout = 20000
const readyTimeout = 20000
const isHeadless = process.env.HEADLESS || false

const port = 4723

config.capabilities = [
  {
    port: port,
    platformName: 'Android',
    'appium:autoGrantPermissions': true,
    'appium:automationName': 'UiAutomator2',
    'appium:platformVersion': deviceVersion,
    'appium:app': appPath,
    'appium:avd': deviceName,
    'appium:avdLaunchTimeout': launchTimeout,
    'appium:avdReadyTimeout': readyTimeout,
    'appium:isHeadless': isHeadless,
    'appium:appPackage': 'sg.gov.hpb.pph.h365.dev',
    'appium:appActivity': 'com.hpb.H365AppContainer.SplashActivity',
    maxInstances: 1,
  },
]

exports.config = config
