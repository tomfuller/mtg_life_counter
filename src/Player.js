function Player() {
  this.playerLife = 20;
}

Player.prototype.decreaseLifeBy1 = function() {
  this.playerLife -= 1;
};

Player.prototype.increaseLifeBy1 = function() {
  this.playerLife += 1;
};
