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