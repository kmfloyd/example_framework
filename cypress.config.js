const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    reporter: 'mochawesome',
    reporterOptions:{
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true,
      reportFilename: 'report-[name]-[datetime]',
      timestamp: 'ddmmyyyy_HHMMss',
      charts: true,
      embeddedScreenshots: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
