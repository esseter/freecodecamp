$(document).ready(function(){

  var user;
  var computer;
  var cases = [[],[],[],[],[],[],[],[],[]];


  $('.popup').css('display','block');

// choose your character
  $('#X').click(function() {
    user = $(this).html();
    computer = 'O';
    $('.popup').css('display','none');
  });
  $('#O').click(function() {
    user = $(this).html();
    computer = 'X';
    $('.popup').css('display','none');
  });

// check results

function diagonalTest(){
  if ((cases[0] == cases[4] && cases[4] == cases[8]) || (cases[2] == cases[4] && cases[4] == cases[6])) {
    return true;
  }
};

function rowTest(){
  if ((cases[0] == cases[1] && cases[1] == cases[2]) || (cases[3] == cases[4] && cases[4] == cases[5]) || (cases[6] == cases[7] && cases[7] == cases[8])) {
    return true;
  }
};

function columnTest(){
  if ((cases[0] == cases[3] && cases[3] == cases[6]) || (cases[1] == cases[4] && cases[4] == cases[7]) || (cases[2] == cases[5] && cases[5] == cases [8])) {
    return true;
  }
}


// may the game begin
  $('#One').click(function() {
    if (cases[0] == "") {
      $(this).html(user);
      cases[0] = $(this).html();
      if (diagonalTest() == true || rowTest() == true || columnTest() == true) {
        console.log("you won");
      }
    }
  });
  $('#Two').click(function() {
    if (cases[1] == "") {
            $(this).html(user);
      cases[1] = $(this).html();
    }
  });
  $('#Three').click(function() {
    if (cases[2] == "") {
            $(this).html(user);
      cases[2] = $(this).html();
      if (diagonalTest() == true || rowTest() == true || columnTest() == true) {
        console.log("you won");
      }
    }
  });
  $('#Four').click(function() {Five
    if (cases[3] == "") {
            $(this).html(user);
      cases[3] = $(this).html();
      if (diagonalTest() == true || rowTest() == true || columnTest() == true) {
        console.log("you won");
      }
    }
  });
  $('#Five').click(function() {
    if (cases[4] == "") {
            $(this).html(user);
      cases[4] = $(this).html();
      if (diagonalTest() == true || rowTest() == true || columnTest() == true) {
        console.log("you won");
      }
    }
  });
  $('#Six').click(function() {
    if (cases[5] == "") {
      $(this).html(user);
      cases[5] = $(this).html();
      if (diagonalTest() == true || rowTest() == true || columnTest() == true) {
        console.log("you won");
      }
    }
  });
  $('#Seven').click(function() {
    if (cases[6] == "") {
      $(this).html(user);
      cases[6] = $(this).html();
      if (diagonalTest() == true || rowTest() == true || columnTest() == true) {
        console.log("you won");
      }
    }
  });
  $('#Eight').click(function() {
    if (cases[7] == "") {
      $(this).html(user);
      cases[7] = $(this).html();
      if (diagonalTest() == true || rowTest() == true || columnTest() == true) {
        console.log("you won");
      }
    }
  });
  $('#Nine').click(function() {
    if (cases[8] == '') {
      $(this).html(user);
      cases[8] = $(this).html();
      if (diagonalTest() == true || rowTest() == true || columnTest() == true) {
        console.log("you won");
      }
    }
  });
});
