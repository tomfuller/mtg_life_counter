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


});
