// report.js
const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports', // directory with JSON files
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '11'
    }
  }
});