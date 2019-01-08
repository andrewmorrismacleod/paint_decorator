const assert = require('assert');
const Decorator = require('../decorator.js');
const Paintcan = require('../paintcan.js');
const Room = require('../room.js');
describe('Decorator', function() {

  let decorator;
  let paintcan;
  let room;

  beforeEach(function(){
    decorator = new Decorator();
    paintcan = new Paintcan();
    room = new Room(10);
  })

  it('should be able to start with an empty paint stock', function(){
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to add a can of paint', function(){
    decorator.addPaintcan(paintcan);
    const actual = decorator.paintStock.length;
    assert.deepStrictEqual(actual, 1);
  })

  it('should be able to calculate the total litres of paint in stock', function(){
    decorator.addPaintcan(paintcan);
    decorator.addPaintcan(paintcan);
    decorator.addPaintcan(paintcan);
    const actual = decorator.totalLitresOfPaint();
    assert.strictEqual(actual, 15);
  })
  it('should be able to check whether it has enough paint (it does)', function(){
    decorator.addPaintcan(paintcan);
    decorator.addPaintcan(paintcan);
    decorator.addPaintcan(paintcan);
    const actual = decorator.hasEnoughPaintFor(room);
    assert.strictEqual(actual, true);
  })
  it('should be able to check whether it has enough paint (it doesnt)', function(){
    decorator.addPaintcan(paintcan);
    const actual = decorator.hasEnoughPaintFor(room);
    assert.strictEqual(actual, false);
  })
  it('should be able to paint the room if it has enough paint', function(){
    decorator.addPaintcan(paintcan);
    decorator.addPaintcan(paintcan);
    decorator.addPaintcan(paintcan);
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, true);
  })

  it('should be able to paint the room if it has enough paint (but he doesnt)', function(){
    decorator.addPaintcan(paintcan);
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, false);
  })
});
