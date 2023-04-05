//TODO inprogress
const deviceName = process.env.IOS_DEVICE || 'iPhone 14'
const appPath = './app/ios/UIKitCatalog.app'
const deviceVersion = process.env.IOS_VERSION || '16.1'
const launchTimeout = 120000
const readyTimeout = 120000
const isHeadless = process.env.HEADLESS || false
const waitTimeout = 10000
const retryTimeout = 120000
const maxInstances = 1
const port = 4723
const reportPath = 'report/local/ios'

exports.config = {
  port: port,
  specs: ['./src/tests/ios/app.*.spec.js'],
  exclude: [
    // 'path/to/excluded/files'
  ],
  // parallel run
  maxInstances: maxInstances,
  capabilities: [
    {
      platformName: 'ios',
      'appium:automationName': 'XCUITest',
      'appium:platformVersion': deviceVersion,
      'appium:app': appPath,
      'appium:deviceName': deviceName,
      'appium:avdLaunchTimeout': launchTimeout,
      'appium:avdReadyTimeout': readyTimeout,
      'appium:isHeadless': isHeadless,
      'appium:appPackage': 'sg.gov.hpb.pph.h365.dev',
      'appium:appActivity': 'com.hpb.H365AppContainer.SplashActivity',
    },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'info',

  waitforTimeout: waitTimeout,
  connectionRetryTimeout: retryTimeout,
  connectionRetryCount: 1,
  services: ['appium'],
  framework: 'mocha',
  

  reporters: [
    [
      'allure',
      {
        outputDir: reportPath + '/allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
    'spec',
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
}
