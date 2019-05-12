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
    text: "1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn. \n              2. If the player rolls a 1 his turn is over,he loses all points he accumulated in that turn, and he passes the die to the next player. \n                                                       3. Play passes from player to player until a winner is determined. The winner is the first to get to 100 points !",
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
}

function playing() {
  if (player1.active === true && player2.active === false) {
    $(".player1").children().prop("disabled", false);
    $(".player1").removeClass("disabledArea");
    $(".player2").children().prop("disabled", true);
    $(".player2").addClass("disabledArea");
  } else {
    $(".player1").children().prop("disabled", true);
    $(".player1").addClass("disabledArea");
    $(".player2").children().prop("disabled", false);
    $(".player2").removeClass("disabledArea");
  }
}
Play.prototype.diceRoll = function() {
  var diceNumber = (Math.floor(Math.random() * 6) + 1);
  this.diceRoll = diceNumber;
  playing();
  if (diceRoll === 1) {
    this.roundScore = 0;
    if (this.active === player1.active) {
      player1.active = false;
      player2.active = true;
    } else {
      player1.active = true;
      player2.active = false;
    }
    $(".comment").this().text("Sorry, you rolled a one.");
  } else {
    return this.roundScore += diceNumber;
  }
}
Play.prototype.hold = function() {
  playing();
  this.finalScore += roundScore;
  if (this.finalScore >= 100) {
    $(".winner").text("Congrats ! You win !");
    // $("img").attr("src", "./Images/pig-standing.gif");
  } else {
    return false;
  }
  return this.finalScore;
}

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
  var currents = [$(".diceRoll1"), $(".roundScore1"), $(".finalScore1"), $(".diceRoll2"), $(".roundScore2"), $(".finalScore2")];
  currents.forEach(function(current) {
    current.text(0);
  });
}