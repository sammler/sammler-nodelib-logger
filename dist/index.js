'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var winston = _interopRequireWildcard(_winston);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logger = new winston.Logger({
  level: 'silly',
  colorize: true,
  transports: [new winston.transports.Console({
    level: 'silly',
    handleExceptions: true
  })]
});

exports.default = logger;
//# sourceMappingURL=index.js.map
