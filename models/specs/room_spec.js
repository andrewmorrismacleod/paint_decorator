const assert = require('assert');
const Room = require('../room.js');


describe('Room', function() {

  let room;

  beforeEach(function(){
    room = new Room(10);
  })

  it('room has an area', function(){
    const actual = room.area;
    assert.strictEqual(actual, 10);
  });

  it('room starts off unpainted', function(){
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });

  it('room can be painted', function(){
    room.paintRoom();
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });


});
