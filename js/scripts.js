var counter = 0;
var icon = 'X';
var player = 'Player 1';




$(document).ready(function() {
  $(".square").click(function(event) {
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

  $('#restart').click(function() {
    $('.square').html('');
    counter = 0;

  });


  event.preventDefault();

});
