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
var diceRoll, roundScore1, roundScore2, finalScore1, finalScore2;

roundScore1 = 0;
roundScore2 = 0;
finalScore1 = 0;
finalScore2 = 0;

$("#roll1").click(function() {
  var randomNo = Math.floor((Math.random() * 6) + 1);
  if (randomNo === 1) {
    roundScore1 = 0;
    $(".diceroll1").text(randomNo);
    $(".roundScore1").text(roundScore1);
    $(".comment1").text("Oops ! You rolled a one.").addClass("red-background").removeClass("green-background");
    $(".buttons1").hide(100);
    $(".buttons2").show(100);
    finalScore1 += roundScore1;
    $(".finalScore1").text(finalScore1);
  } else {
    $(".diceRoll1").text(randomNo);
    roundScore1 += randomNo;
    $(".roundScore1").text(roundScore1);
  }
});
$("#hold1").click(function() {
  finalScore1 += roundScore1;
  $(".buttons1").hide(100);
  $(".buttons2").show(100);
  $(".finalScore1").text(finalScore1);
  $(".comment1").text("Nice play !").addClass("green-background").removeClass("red-background");
  roundScore1 = 0;
});

$("#roll2").click(function() {
  var randomNo = Math.floor((Math.random() * 6) + 1);
  if (randomNo === 1) {
    roundScore2 = 0;
    $(".diceroll2").text(randomNo);
    $(".roundScore2").text(roundScore2);
    $(".comment2").text("Oops ! You rolled a one.").addClass("red-background").removeClass("green-background");
    $(".buttons2").hide(100);
    $(".buttons1").show(100);
    finalScore2 += roundScore2;
    $(".finalScore2").text(finalScore2);
  } else {
    $(".diceRoll2").text(randomNo);
    roundScore2 += randomNo;
    $(".roundScore2").text(roundScore2);
  }
});
$("#hold2").click(function() {
  finalScore2 += roundScore2;
  $(".buttons2").hide(100);
  $(".buttons1").show(100);
  $(".finalScore2").text(finalScore2);
  $(".comment2").text("Nice play !").addClass("green-background").removeClass("red-background");
  roundScore2 = 0;
});