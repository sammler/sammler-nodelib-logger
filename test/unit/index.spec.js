/* global describe, expect, it, beforeEach */

const Logger = require('./../../src/index');

const logger = new Logger();

describe('unit', () => {

  it('bla', () => {
    logger.silly('bla');
    logger.silly('obj', {foo: 'bar'});
    expect(true).to.be.true;
  });

});
