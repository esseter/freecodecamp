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

    $('.end-popup').css('display','block');
    $('#text').html(who +' wins');
    return true;
  }
};

function rowTest(who){
  if ((cases[0] == who && cases[0] == cases[1] && cases[1] == cases[2]) || (cases[3] == who && cases[3] == cases[4] && cases[4] == cases[5])) {
    $('.end-popup').css('display','block');
    $('#text').html(who +' wins');
    return true;
  }
  else if (cases[6] == cases[7] && cases[7] == cases[8]) {
    $('.end-popup').css('display','block');
    $('#text').html(who +' wins');
    return true;
  }
};

function columnTest(who){
  if ((cases[0] == who && cases[0] == cases[3] && cases[3] == cases[6]) || (cases[1] == who && cases[1] == cases[4] && cases[4] == cases[7])) {

    $('.end-popup').css('display','block');
    return true;
  }
  else if (who == cases[2] && cases[2] == cases[8] && cases[5] == cases[8]) {
    $('.end-popup').css('display','block');
    return true;
  }
}

function draw(){
  if (diagonalTest(user) != true && rowTest(user) != true && columnTest(user) != true && userToken.length == 5) {
    $('.end-popup').css('display','block');
    $('#text').html('nobody wins');
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
      cases[8] = $('#Nine').html();
      computerToken.push(8);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if ((cases[2] == user  && cases[0] == '') || (cases[8] == user && cases[0] == '')) {
      $('#One').html(computer);
      cases[0] = computer;
      computerToken.push(0);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[1] == user && cases[7] == '') {
      $('#Eight').html(computer);
      cases[7] = computer;
      computerToken.push(7);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[3] == user && cases[5] == '') {
      $('#Six').html(computer);
      cases[5] = computer;
      computerToken.push(5);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[5] == user && cases[3] == '') {
      $('#Four').html(computer);
      cases[3] = computer;
      computerToken.push(3);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[7] == user && cases[1] == '') {
      $('#Two').html(computer);
      cases[1] = computer;
      computerToken.push(1);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
  }

  else if (cases[4] == computer && userToken.length != 1) {
    if (cases[0] == user && cases[1] == user && cases[2] == '') {
      $('#Three').html(computer);
      cases[2] = computer;
      computerToken.push(2);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[0] == user && cases[3] == user && cases[6] == '') {
      $('#Seven').html(computer);
      cases[6] = computer;
      computerToken.push(6);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[0] == user && cases[2] == user && cases[1] == '') {
      $('#Two').html(computer);
      cases[1] = computer;
      computerToken.push(1);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[1] == user && cases[2] == user && cases[0] == '') {
      $('#One').html(computer);
      cases[0] = computer;
      computerToken.push(0);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[0] == user && cases[6] == user && cases[3] == '') {
      $('#Four').html(computer);
      cases[3] = computer;
      computerToken.push(3);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[3] == user && cases[6] == user && cases[0] == '') {
      $('#One').html(computer);
      cases[0] = computer;
      computerToken.push(0);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[8] == user && cases[2] == user && cases[5] == '') {
      $('#Six').html(computer);
      cases[5] = computer;
      computerToken.push(5);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[8] == user && cases[5] == user && cases[2] == '') {
      $('#Three').html(computer);
      cases[2] = computer;
      computerToken.push(2);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[2] == user && cases[5] == user && cases[8] == '') {
      $('#Nine').html(computer);
      cases[8] = computer;
      computerToken.push(8);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[8] == user && cases[7] == user && cases[6] == '') {
      $('#Seven').html(computer);
      cases[6] = computer;
      computerToken.push(6);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[6] == user && cases[7] == user && cases[8] == '') {
      $('#Nine').html(computer);
      cases[8] = computer;
      computerToken.push(8);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else if (cases[8] == user && cases[6] == user && cases[7] == '') {
      $('#Eight').html(computer);
      cases[7] = computer;
      computerToken.push(7);
      if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
      }
    }
    else {
      if (cases[0] == '') {
        $('#One').html(computer);
        cases[0] = computer;
        computerToken.push(0);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
        }
      }
      else if (cases[1] == '') {
        $('#Two').html(computer);
        cases[1] = computer;
        computerToken.push(1);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
        }
      }
      else if (cases[2] == '') {
        $('#Three').html(computer);
        cases[2] = computer;
        computerToken.push(2);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
        }
      }
      else if (cases[3] == '') {
        $('#Four').html(computer);
        cases[3] = computer;
        computerToken.push(3);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
        }
      }
      else if (cases[4] == '') {
        $('#Five').html(computer);
        cases[4] = computer;
        computerToken.push(4);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
        }
      }
      else if (cases[5] == '') {
        $('#Six').html(computer);
        cases[5] = computer;
        computerToken.push(5);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
        }
      }
      else if (cases[6] == '') {
        $('#Seven').html(computer);
        cases[6] = computer;
        computerToken.push(6);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
        }
      }
      else if (cases[7] == '') {
        $('#Eight').html(computer);
        cases[7] = computer;
        computerToken.push(7);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
        }
      }
      else if (cases[8] == '') {
        $('#Nine').html(computer);
        cases[8] = computer;
        computerToken.push(8);
        if (diagonalTest(computer) == true || rowTest(computer) == true || columnTest(computer) == true) {
        $('#text').html('LOST');
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

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();
    }
  });

  $('#Two').click(function() {
    if (cases[1] == "") {
      $(this).html(user);
      cases[1] = $(this).html();
      userToken.push(1);

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();
    }
  });

  $('#Three').click(function() {
    if (cases[2] == "") {
            $(this).html(user);
      cases[2] = $(this).html();
      userToken.push(2);

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();
    }
  });

  $('#Four').click(function() {Five
    if (cases[3] == "") {
      $(this).html(user);
      cases[3] = $(this).html();
      userToken.push(3);

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();

    }
  });

  $('#Five').click(function() {
    if (cases[4] == "") {
      $(this).html(user);
      cases[4] = $(this).html();
      userToken.push(4);

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();
    }
  });

  $('#Six').click(function() {
    if (cases[5] == "") {
      $(this).html(user);
      cases[5] = $(this).html();
      userToken.push(5);

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();
    }
  });

  $('#Seven').click(function() {
    if (cases[6] == "") {
      $(this).html(user);
      cases[6] = $(this).html();
      userToken.push(6);

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();
    }
  });

  $('#Eight').click(function() {
    if (cases[7] == "") {
      $(this).html(user);
      cases[7] = $(this).html();
      userToken.push(7);

      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();

    }
  });

  $('#Nine').click(function() {
    if (cases[8] == '') {
      $(this).html(user);
      cases[8] = $(this).html();
      userToken.push(8);



      if (diagonalTest(user) == true || rowTest(user) == true || columnTest(user) == true) {
        $('#text').html('WIN');
      }
      draw();
      computerMove();
    }
  });
  $('#retry').click(function(){
    computerToken = [];
    userToken = [];
    cases = [[],[],[],[],[],[],[],[],[]];
    $('.cases').empty();
    $('#end-pop-up').css('display','none');

  })
});
