const winston = require('winston');

const defaultOpts = {
  name: 'debug-console',
  level: 'silly',
  colorize: true,
  prettyPrint(object) {
    return JSON.stringify(object, null, 2);
  },
  handleExceptions: true,
  json: false
};

class Logger {
  constructor() {
    this.winston = new winston.Logger({
      transports: [
        new winston.transports.Console(defaultOpts)
      ]
    });
  }

  // Lowest level
  silly(message, ...args) {
    this.winston.silly(message, ...args);
  }

  debug(message, ...args) {
    this.winston.debug(message, ...args);
  }

  verbose(message, ...args) {
    this.winston.verbose(message, ...args);
  }

  info(message, ...args) {
    this.winston.info(message, ...args);
  }

  warn(message, ...args) {
    this.winston.warn(message, ...args);
  }

  // Highest level
  error(err) {
    this.winston.error(err);
  }
}

// Fix to include a line break into the log
// See: https://github.com/winstonjs/winston/issues/460
Logger.log = function () {
  const args = arguments;
  args[1] += '\r\n';
  winston.Logger.prototype.log.apply(this, args);
};

module.exports = Logger;

