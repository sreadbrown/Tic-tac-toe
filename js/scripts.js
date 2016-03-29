var counter = 0;
var icon = 'X';
var player = 'Player 1';

$(document).ready(function() {
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9").click(function(event) {
    if($(this).html()=="") {
      if(counter % 2 === 0) {
        icon = "O";
        player = 'Player 2';
      } else {
        icon = 'X';
        player = 'Player 1';
      }
      $(this).html(icon);
      counter++
    }

  });


  event.preventDefault();

});
