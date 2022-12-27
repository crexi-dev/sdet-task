import { defineConfig } from 'cypress'

export default defineConfig({
  videosFolder: 'projects/angular-ngrx-material-starter/cypress/videos',
  screenshotsFolder:
    'projects/angular-ngrx-material-starter/cypress/screenshots',
  fixturesFolder: 'projects/angular-ngrx-material-starter/cypress/fixtures',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./projects/angular-ngrx-material-starter/cypress/plugins/index.js')(
        on,
        config
      )
    },
    specPattern:
      'projects/angular-ngrx-material-starter/cypress/integration/*.feature',
    supportFile:
      'projects/angular-ngrx-material-starter/cypress/support/index.js',
    baseUrl: 'http://localhost:4200',
  },
})