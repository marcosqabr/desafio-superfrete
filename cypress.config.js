const { defineConfig } = require("cypress")

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  scrollBehavior: "center",
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
