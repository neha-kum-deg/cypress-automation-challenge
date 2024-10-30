import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  viewportHeight: 1500,
  viewportWidth: 1980,
   reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: 'https://github.com/', // Change this to your app's URL
    specPattern: 'cypress/e2e/*.cy.ts',
    chromeWebSecurity: false, // Disables security checks in the browser
  }
})
