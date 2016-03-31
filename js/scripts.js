var counter = 0;
var icon = 'X';
var player = 'Player 1';
var board = ["","","","","","","","",""];



$(document).ready(function() {
  $(".square").click(function(event) {
    var index = $(this).attr('id');
    if($(this).html()=="") {
      if(counter % 2 === 0) {
        icon = "O";
        player = 'Player 2';
      } else {
        icon = 'X';
        player = 'Player 1';
      }
      $(this).html(icon);
      board[index] = icon;
      counter++
      //board.push(icon);
      // debugger;
    }

  });

  $('#restart').click(function() {
    $('.square').html('');
    // figure out how to reset board array
    counter = 0;
  });


  event.preventDefault();

});
