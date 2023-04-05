const { config } = require('./wdio.shared.conf')

const appPath = process.env.PCLOUDY_ANDROID_APP
const launchTimeout = 120000
const username =
  process.env.PCLOUDY_USERNAME || 'your pcloudy user. put here or in .env file'
const key =
  process.env.PCLOUDY_KEY || 'your pcloudy password put here or in .env file'

config.port = 443

//capabilities

config.capabilities = [
  {
    browserName: '',
    pCloudy_Username: username,
    pCloudy_ApiKey: key,
    pCloudy_ApplicationName: appPath,
    pCloudy_DurationInMinutes: '30',
    pCloudy_DeviceFullName: 'GOOGLE_Pixel3aXL_Android_11.0.0_1e0f9',
    platformVersion: '11.0.0',
    platformName: 'Android',
    automationName: 'UiAutomator2',
    newCommandTimeout: '600',
    launchTimeout: launchTimeout,
    appPackage: 'sg.gov.hpb.pph.h365.dev',
    appActivity: 'com.hpb.H365AppContainer.SplashActivity',
    pCloudy_EnableDeviceLogs: 'false',
    pCloudy_EnablePerformanceData: 'true',
    pCloudy_EnableVideo: 'true',
    pCloudy_WildNet: 'false',
    autoGrantPermissions: true,
    maxInstances: 1,
  },
  // {
  //   browserName: '',
  //   pCloudy_Username: username,
  //   pCloudy_ApiKey: key,
  //   pCloudy_ApplicationName: appPath,
  //   pCloudy_DurationInMinutes: '30',
  //   pCloudy_DeviceFullName: 'GOOGLE_Pixel4XL_Android_10.0.0_7263e',
  //   platformVersion: '10.0.0',
  //   platformName: 'Android',
  //   automationName: 'UiAutomator2',
  //   newCommandTimeout: '600',
  //   launchTimeout: launchTimeout,
  //   appPackage: 'sg.gov.hpb.pph.h365.dev',
  //   appActivity: 'com.hpb.H365AppContainer.SplashActivity',
  //   pCloudy_EnableDeviceLogs: 'false',
  //   pCloudy_EnablePerformanceData: 'true',
  //   pCloudy_EnableVideo: 'false',
  //   pCloudy_WildNet: 'false',
  //   autoGrantPermissions: true,
  //   maxInstances: 1,
  // },
  // {
  //   browserName: '',
  //   pCloudy_Username: username,
  //   pCloudy_ApiKey: key,
  //   pCloudy_ApplicationName: appPath,
  //   pCloudy_DurationInMinutes: '30',
  //   pCloudy_DeviceFullName: 'SAMSUNG_GalaxyS22_Android_12.0.0_9bbaf',
  //   platformVersion: '12.0.0',
  //   platformName: 'Android',
  //   automationName: 'UiAutomator2',
  //   newCommandTimeout: '600',
  //   launchTimeout: launchTimeout,
  //   appPackage: 'sg.gov.hpb.pph.h365.dev',
  //   appActivity: 'com.hpb.H365AppContainer.SplashActivity',
  //   pCloudy_EnableDeviceLogs: 'false',
  //   pCloudy_EnablePerformanceData: 'true',
  //   pCloudy_EnableVideo: 'true',
  //   pCloudy_WildNet: 'false',
  //   autoGrantPermissions: true,
  //   maxInstances: 1,
  // },
]

exports.config = config
