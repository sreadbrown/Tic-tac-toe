var counter = 0;
var icon = 'X';
var player = 'Player 1';
var boardX = [];
var boardO = [];
var winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


for (var i = 0; i < winning.length; i++) {
  for (var j = 0; j < boardX.length; j++) {
    if (winning[i] == boardX[j]) {
      var win = true
    }
      var win = false
  }
}

$(document).ready(function() {

  $(".square").click(function(event) {

    var index = parseInt($(this).attr('id'));
    if($(this).html()=="") {
      if(counter % 2 === 0) {
        icon = "O";
        player = 'Player 2';
        $(this).html(icon);
        boardO.push(index);
      } else {
        icon = 'X';
        player = 'Player 1';
        $(this).html(icon);
        boardX.push(index);
      }
      counter++
    }
    if (board[0] = board[1] = board[2]) {
      alert("you won!");
    }
  });


  $('#restart').click(function() {
    $('.square').html('');
      board = [];
    counter = 0;
  });


  event.preventDefault();

});
