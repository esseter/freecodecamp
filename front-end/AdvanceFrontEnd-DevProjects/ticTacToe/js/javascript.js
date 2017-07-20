$(document).ready(function(){

  var user;
  var computer;
  var computerToken = [];
  var userToken = [];
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

function diagonalTest(who){
  if ((cases[0] == cases[4] && cases[4] == cases[8]) || (cases[2] == cases[4] && cases[4] == cases[6])) {
    return true;
  }
};

function rowTest(who){
  if ((cases[0] == who && cases[0] == cases[1] && cases[1] == cases[2]) || (cases[3] == who && cases[3] == cases[4] && cases[4] == cases[5]) || (cases[6] == who && cases[6] == cases[7] && cases[7] == cases[8])) {
    return true;
  }
};

function columnTest(who){
  if ((cases[0] == who && cases[0] == cases[3] && cases[3] == cases[6]) || (cases[1] == who && cases[1] == cases[4] && cases[4] == cases[7]) || (cases[2] == who && cases[2] == cases[5] && cases[5] == cases [8])) {
    return true;
  }
}

function draw(){
  if (diagonalTest(user) != true && rowTest(user) != true && columnTest(user) != true && userToken.length == 5) {
    console.log('draw');
  }
}

// computer strategy

function computerMove(){

  // first move
  if (userToken.length == 1) {
    if (userToken[0] == 4) {
        $('#Seven').html(computer);
        cases[6] = $('#Seven').html();
        computerToken.push(6);
    }
    else if (userToken[0] == 0 || userToken[0] == 2 || userToken[0] == 6 || userToken == 8 || userToken == 1 || userToken == 3 || userToken == 5 || userToken == 7) {
      $('#Five').html(computer);
      cases[4] = $('#Five').html();
      computerToken.push(4);
    }
  }

  // others
  else if (cases[4] == user && userToken.length != 1) {
    if (cases[0] == user && cases[8] == '') {
      $('#Nine').html(computer);
      cases[8] = $('#Nine').html(computer);
      computerToken.push(8);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if ((cases[2] == user  && cases[0] == '') || (cases[8] == user && cases[0] == '')) {
      $('#One').html(computer);
      cases[0] = computer;
      computerToken.push(0);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[1] == user && cases[7] == '') {
      $('#Eight').html(computer);
      cases[7] = computer;
      computerToken.push(7);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[3] == user && cases[5] == '') {
      $('#Six').html(computer);
      cases[5] = computer;
      computerToken.push(5);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[5] == user && cases[3] == '') {
      $('#Four').html(computer);
      cases[3] = computer;
      computerToken.push(3);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[7] == user && cases[1] == '') {
      $('#Two').html(computer);
      cases[1] = computer;
      computerToken.push(1);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
  }

  else if (cases[4] == computer && userToken.length != 1) {
    console.log('Iam in');
    if (cases[0] == user && cases[1] == user && cases[2] == '') {
      $('#Three').html(computer);
      cases[2] = computer;
      computerToken.push(2);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[0] == user && cases[3] == user && cases[6] == '') {
      $('#Seven').html(computer);
      cases[6] = computer;
      computerToken.push(6);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[0] == user && cases[2] == user && cases[1] == '') {
      $('#Two').html(computer);
      cases[1] = computer;
      computerToken.push(1);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[1] == user && cases[2] == user && cases[0] == '') {
      $('#One').html(computer);
      cases[0] = computer;
      computerToken.push(0);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[0] == user && cases[6] == user && cases[3] == '') {
      $('#Four').html(computer);
      cases[3] = computer;
      computerToken.push(3);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[3] == user && cases[6] == user && cases[0] == '') {
      $('#One').html(computer);
      cases[0] = computer;
      computerToken.push(0);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[8] == user && cases[2] == user && cases[5] == '') {
      $('#Six').html(computer);
      cases[5] = computer;
      computerToken.push(5);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[8] == user && cases[5] == user && cases[2] == '') {
      $('#Three').html(computer);
      cases[2] = computer;
      computerToken.push(2);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[2] == user && cases[5] == user && cases[8] == '') {
      $('#Nine').html(computer);
      cases[8] = computer;
      computerToken.push(8);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[8] == user && cases[7] == user && cases[6] == '') {
      $('#Seven').html(computer);
      cases[6] = computer;
      computerToken.push(6);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[6] == user && cases[7] == user && cases[8] == '') {
      $('#Nine').html(computer);
      cases[8] = computer;
      computerToken.push(8);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else if (cases[8] == user && cases[6] == user && cases[7] == '') {
      $('#Eight').html(computer);
      cases[7] = computer;
      computerToken.push(7);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        console.log("computer won");
      }
    }
    else {
      if (cases[0] == '') {
        $('#One').html(computer);
        cases[0] = computer;
        computerToken.push(0);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
      else if (cases[1] == '') {
        $('#Two').html(computer);
        cases[1] = computer;
        computerToken.push(1);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
      else if (cases[2] == '') {
        $('#Three').html(computer);
        cases[2] = computer;
        computerToken.push(2);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
      else if (cases[3] == '') {
        $('#Four').html(computer);
        cases[3] = computer;
        computerToken.push(3);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
      else if (cases[4] == '') {
        $('#Five').html(computer);
        cases[4] = computer;
        computerToken.push(4);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
      else if (cases[5] == '') {
        $('#Six').html(computer);
        cases[5] = computer;
        computerToken.push(5);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
      else if (cases[6] == '') {
        $('#Seven').html(computer);
        cases[6] = computer;
        computerToken.push(6);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
      else if (cases[7] == '') {
        $('#Eight').html(computer);
        cases[7] = computer;
        computerToken.push(7);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
      else if (cases[8] == '') {
        $('#Nine').html(computer);
        cases[8] = computer;
        computerToken.push(8);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
          console.log("computer won");
        }
      }
    }
  }

};

// may the game begin

  $('#One').click(function() {
    if (cases[0] == "") {
      $(this).html(user);
      cases[0] = $(this).html();
      userToken.push(0);

      computerMove();

      console.log(userToken);
      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
    }
  });

  $('#Two').click(function() {
    if (cases[1] == "") {
      $(this).html(user);
      cases[1] = $(this).html();
      userToken.push(1);

      computerMove();

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
      draw();

    }
  });

  $('#Three').click(function() {
    if (cases[2] == "") {
            $(this).html(user);
      cases[2] = $(this).html();
      userToken.push(2);

      computerMove();

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
      draw();

    }
  });

  $('#Four').click(function() {Five
    if (cases[3] == "") {
      $(this).html(user);
      cases[3] = $(this).html();
      userToken.push(3);

      computerMove();

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
      draw();

    }
  });

  $('#Five').click(function() {
    if (cases[4] == "") {
      $(this).html(user);
      cases[4] = $(this).html();
      userToken.push(4);

      computerMove();

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
      draw();

    }
  });

  $('#Six').click(function() {
    if (cases[5] == "") {
      $(this).html(user);
      cases[5] = $(this).html();
      userToken.push(5);

      computerMove();

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
      draw();

    }
  });

  $('#Seven').click(function() {
    if (cases[6] == "") {
      $(this).html(user);
      cases[6] = $(this).html();
      userToken.push(6);

      computerMove();

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
      draw();
    }
  });

  $('#Eight').click(function() {
    if (cases[7] == "") {
      $(this).html(user);
      cases[7] = $(this).html();
      userToken.push(7);

      computerMove();

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
      draw();

    }
  });

  $('#Nine').click(function() {
    if (cases[8] == '') {
      $(this).html(user);
      cases[8] = $(this).html();
      userToken.push(8);

      computerMove();

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        console.log("you won");
      }
      draw();

    }
  });
});
