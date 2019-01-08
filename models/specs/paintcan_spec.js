const assert = require('assert');
const Paintcan = require('../paintcan.js');

describe('Paintcan', function() {

let paintcan;

  beforeEach(function(){
    paintcan = new Paintcan();
  });

  it('has some volume of paint', function(){
    const actual = paintcan.volume;
    assert.strictEqual(actual, 5);
  });
  it('can tell if it is empty', function(){
    const actual = paintcan.isEmpty();
    assert.strictEqual(actual, false);
  });
  it('can empty itself', function(){
    paintcan.empty();
    const actual = paintcan.isEmpty();
    assert.strictEqual(actual, true);
  })
})
