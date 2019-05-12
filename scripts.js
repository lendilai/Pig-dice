// User-interface logic landing page and part of gameplay page
$("button").click(function() {
  $("#einswine").slideToggle("10000");
});
$("#arrow-showing").mouseover(function() {
  $("#arrow-hidden").slideToggle();
  $("#arrow-showing").slideToggle();
});
$("#piggie").mouseover(function() {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function() {
  $(this).attr('src', $(this).data("src"));
});
$("#help").click(function() {
  swal({
    title: "Piggie Help",
    text: "1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn.\n         2. If the player rolls a 1 his turn is over,he loses all points he accumulated in that turn, and he passes the die to the next player. \n                                                       3. Play passes from player to player until a winner is determined. The winner is the first to get to 100 points !",
    icon: "info",
    button: "Got it !",
  });
});

// Business logic for the gameplay
var player1, player2;

function Play(diceRoll, roundScore, finalScore, active) {

  this.roundScore = 0;
  this.finalScore = 0;
  this.active = active;
};

function newGame() {
  $(".player1").children().prop("disabled", false);
  $(".player1").removeClass("disabledArea");
  $(".player2").children().prop("disabled", false);
  $(".player2").removeClass("disabledArea");
  var fieldsToReset = [diceRoll, roundScore, finalScore];
  fieldsToReset.forEach(function(play) {
    play.diceRoll = 0;
    play.roundScore = 0;
    play.finalScore = 0;
  });