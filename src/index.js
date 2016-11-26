import * as winston from 'winston';

export class Logger {
  constructor() {
    this.winston = new ( winston.Logger )( {
      level: 'silly',
      transports: [
        new ( winston.transports.Console )()
      ],
      colorize: true,
      prettyPrint: true
    } );
  }

  // Lowest level
  silly( message, arg1, arg2 ) {
    this.winston.silly( message, arg1, arg2 );
  }

  debug( message ) {
    this.winston.debug( message );
  }

  verbose( message ) {
    this.winston.verbose( message );
  }

  info( message ) {
    this.winston.info( message );
  }

  warn( message ) {
    this.winston.warn( message );
  }

  // Highest level
  error( err ) {
    this.winston.error( err );
  }
}

// Fix to include a line break into the log
// See: https://github.com/winstonjs/winston/issues/460
Logger.log = function() {
  let args = arguments;
  args[ 1 ] = args[ 1 ] + '\r\n';
  winston.Logger.prototype.log.apply( this, args );
};




