$(document).ready(function()
{
  var player1 = new Player();
  var player2 = new Player();


  updatePlayer1Life();
  updatePlayer2Life();
  updatePlayer1Energy();
  updatePlayer2Energy();

  function updatePlayer1Life() {
    $('#player1-life').text("Life: " + player1.playerLife);
  }

  function updatePlayer1Energy() {
    $('#player1-energy').text("Energy: " + player1.energyCount);
  }

  function updatePlayer2Life() {
    $('#player2-life').text("Life: " + player2.playerLife);
  }

  function updatePlayer2Energy() {
    $('#player2-energy').text("Energy: " + player2.energyCount);
  }

  $('#p1-life-down').on('click', function() {
    player1.decreaseLifeBy1();
    updatePlayer1Life()
  });

  $('#p1-life-up').on('click', function() {
    player1.increaseLifeBy1();
    updatePlayer1Life()
  });

  $('#p1-energy-down').on('click',function() {
    player1.decreaseEnergyBy1();
    updatePlayer1Energy();
  });

  $('#p1-energy-up').on('click', function() {
    player1.increaseEnergyBy1();
    updatePlayer1Energy();
  });

  $('#p2-life-down').on('click', function() {
    player2.decreaseLifeBy1();
    updatePlayer2Life()
  });

  $('#p2-life-up').on('click', function() {
    player2.increaseLifeBy1();
    updatePlayer2Life()
  });

  $('#p2-energy-down').on('click',function() {
    player2.decreaseEnergyBy1();
    updatePlayer2Energy();
  });

  $('#p2-energy-up').on('click', function() {
    player2.increaseEnergyBy1();
    updatePlayer2Energy();
  });

})
