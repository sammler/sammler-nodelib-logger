const Winston = require('winston');

module.exports = {
  development: [
    {
      transporter: Winston.transports.Console,
      options: {
        name: 'Console-Dev',
        level: 'trace',
        colorize: true,
        json: false,
        prettyPrint(object) {
          return JSON.stringify(object, null, 2);
        },
        handleExceptions: true
      }
    }
  ],
  production: [
    {
      transporter: Winston.transports.Console,
      options: {
        name: 'Console-Prod',
        level: 'trace',
        colorize: true,
        json: false,
        prettyPrint(object) {
          return JSON.stringify(object, null, 2);
        },
        handleExceptions: true
      }
    },
    {
      transporter: Winston.transports.File,
      options: {
        name: 'File-Prod',
        filename: 'log-prod.log'
      }
    }
  ],
  test: [
    {
      transporter: Winston.transports.File,
      options: {
        name: 'File-Test',
        filename: 'log-test.log'
      }
    }
  ]
};
