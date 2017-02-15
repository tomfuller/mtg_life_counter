$(document).ready(function()
{
  var player1 = new Player();
  var player2 = new Player();


  updatePlayer1Life();
  updatePlayer2Life();

  function updatePlayer1Life() {
    $('#player1-life').text(player1.playerLife)
  }

  function updatePlayer2Life() {
    $('#player2-life').text(player2.playerLife)
  }

  $('#p1down').on('click', function() {
    player1.decreaseLifeBy1();
    updatePlayer1Life()
  });

  $('#p1up').on('click', function() {
    player1.increaseLifeBy1();
    updatePlayer1Life()
  });

  $('#p2down').on('click', function() {
    player2.decreaseLifeBy1();
    updatePlayer2Life()
  });

  $('#p2up').on('click', function() {
    player2.increaseLifeBy1();
    updatePlayer2Life()
  });

})
