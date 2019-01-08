const Decorator = function() {

  this.paintStock = [];

};

Decorator.prototype.addPaintcan = function(paintcan){
  this.paintStock.push(paintcan);
};

Decorator.prototype.totalLitresOfPaint = function(){
  total = 0;
  for (let stockItem of this.paintStock) {
    total += stockItem.volume;
  }
  return total;
};

Decorator.prototype.hasEnoughPaintFor = function(room){
  return this.totalLitresOfPaint() >= room.area;
};


Decorator.prototype.paintRoom = function(room){
  if (this.hasEnoughPaintFor(room)) {
    room.paintRoom();
  }
};

module.exports = Decorator;
