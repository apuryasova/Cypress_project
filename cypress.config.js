const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '7r21ic',
  e2e: {
    baseUrl: 'https://www.facebook.com/'
  }
})
