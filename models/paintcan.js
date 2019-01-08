const Paintcan = function() {
  this.volume = 5;
};

Paintcan.prototype.isEmpty = function () {
  return (this.volume === 0);
};

Paintcan.prototype.empty = function () {
  this.volume = 0;
};

module.exports = Paintcan;
