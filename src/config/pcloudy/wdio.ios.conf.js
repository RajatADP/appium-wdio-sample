const { config } = require('./wdio.shared.conf')

const appPath = process.env.PCLOUDY_IOS_APP
const launchTimeout = 120000
const username =
  process.env.PCLOUDY_USERNAME || 'your pcloudy user. put here or in .env file'
const key =
  process.env.PCLOUDY_KEY || 'your pcloudy password put here or in .env file'

config.port = 443

config.capabilities = [
  {
    browserName: '',
    pCloudy_Username: username,
    pCloudy_ApiKey: key,
    pCloudy_ApplicationName: appPath,
    pCloudy_DurationInMinutes: '15',
    pCloudy_DeviceFullName: 'APPLE_iPhone12Pro_ios_14.3.0_bf28c',
    platformVersion: '14.3.0',
    platformName: 'ios',
    automationName: 'XCUITest',
    newCommandTimeout: '600',
    launchTimeout: launchTimeout,
    pCloudy_EnableDeviceLogs: 'false',
    pCloudy_EnablePerformanceData: 'false',
    pCloudy_EnableVideo: 'true',
    pCloudy_WildNet: 'false',
    bundleId: 'sg.gov.hpb.pph.h365.dev',
    noReset: true,
    fullReset: false,
    autoAcceptAlerts: true,
    maxInstances: 1,
  },
]

exports.config = config
