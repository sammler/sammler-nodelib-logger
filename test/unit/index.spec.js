/*global describe, expect, it, beforeEach*/
import logger from './../../src/index';

describe( 'unit', () => {

  it( 'bla', () => {
    logger.silly( 'bla' );
    logger.silly( 'obj', { foo: 'bar' } );
    expect( true ).to.be.true;
  } );

} );
