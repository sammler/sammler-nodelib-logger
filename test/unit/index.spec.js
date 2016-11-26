/*global describe, expect, it, beforeEach*/

import { Logger } from './../../src/index';

let logger = new Logger();

describe( 'unit', () => {

  it( 'bla', () => {
    logger.silly( 'bla' );
    logger.silly( 'obj', { foo: 'bar' } );
    expect( true ).to.be.true;
  } );

} );
