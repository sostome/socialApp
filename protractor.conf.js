exports.config = {
  capabilities: {
    browserName: "chrome"
  },
  framework: 'mocha',
  specs: [
    'test/e2e/**/*.spec.js'
  ],
  mochaOpts: {
    enableTimeouts: false
  },
  onPrepare: function () {
    //process.env.PORT = 3000
    //require('./server')
  }
}
