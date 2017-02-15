function Player() {
  this.playerLife = 20;
  this.energyCount = 0;
}

Player.prototype.decreaseLifeBy1 = function() {
  this.playerLife -= 1;
};

Player.prototype.increaseLifeBy1 = function() {
  this.playerLife += 1;
};

Player.prototype.decreaseEnergyBy1 = function() {
  if(this.energyCount > 0) {
    this.energyCount -= 1;
    }
  else {
    throw Error("Energy is already 0")
  }
};

Player.prototype.increaseEnergyBy1 = function() {
  this.energyCount += 1;
};
