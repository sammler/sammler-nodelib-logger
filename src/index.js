import * as winston from 'winston';

let logger = new winston.Logger( {
  level: 'silly',
  colorize: true,
  transports: [
    new (winston.transports.Console)(
      {
        level: 'silly',
        handleExceptions: true
      }
    )
  ]
} );

export default logger;



