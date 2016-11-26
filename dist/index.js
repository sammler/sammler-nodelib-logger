'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _winston2 = require('winston');

var winston = _interopRequireWildcard(_winston2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.winston = new winston.Logger({
      level: 'silly',
      transports: [new winston.transports.Console()],
      colorize: true,
      prettyPrint: true
    });
  }

  // Lowest level


  _createClass(Logger, [{
    key: 'silly',
    value: function silly(message) {
      var _winston;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_winston = this.winston).silly.apply(_winston, [message].concat(args));
    }
  }, {
    key: 'debug',
    value: function debug(message) {
      this.winston.debug(message);
    }
  }, {
    key: 'verbose',
    value: function verbose(message) {
      this.winston.verbose(message);
    }
  }, {
    key: 'info',
    value: function info(message) {
      this.winston.info(message);
    }
  }, {
    key: 'warn',
    value: function warn(message) {
      this.winston.warn(message);
    }

    // Highest level

  }, {
    key: 'error',
    value: function error(err) {
      this.winston.error(err);
    }
  }]);

  return Logger;
}();

// Fix to include a line break into the log
// See: https://github.com/winstonjs/winston/issues/460


exports.default = Logger;
Logger.log = function () {
  var args = arguments;
  args[1] = args[1] + '\r\n';
  winston.Logger.prototype.log.apply(this, args);
};
//# sourceMappingURL=index.js.map
