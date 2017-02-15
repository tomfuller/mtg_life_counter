describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("should start with a life counter of 20", function() {
    expect(player.playerLife).toEqual(20);
  });

  it("should be able to decrease life by 1", function() {
    player.decreaseLifeBy1();
    expect(player.playerLife).toEqual(19);
  });

  it("should be able to increse life by 1", function() {
    player.increaseLifeBy1();
    expect(player.playerLife).toEqual(21);
  });

  it("should be initialized with an energy count of 0", function() {
    expect(player.energyCount).toEqual(0);
  });

  it("should be able to decrease energy by 1", function() {
    player.energyCount = 1;
    player.decreaseEnergyBy1();
    expect(player.energyCount).toEqual(0);
  });

  it("should be able to increse energy by 1", function() {
    player.increaseEnergyBy1();
    expect(player.energyCount).toEqual(1);
  });

  it("shouldn't reduce energy into the negative", function() {
    expect( function(){player.decreaseEnergyBy1(); }).toThrowError('Energy is already 0');
    expect(player.energyCount).toEqual(0);
  })
});
