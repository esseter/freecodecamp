$(document).ready(function(){

  var user;
  var computer;
  var cases = [[],[],[],[],[],[],[],[],[]];


  $('.popup').css('display','block');


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

  $('#One').click(function() {
    var one = $('#One').html();
    if (one == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  $('#Two').click(function() {
    var two = $('#Two').html();
    if (two == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  $('#Three').click(function() {
    var three = $('#Three').html();
    if (three == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  $('#Four').click(function() {Five
    var four = $('#Four').html();
    if (four == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  $('#Five').click(function() {
    var five = $('#Five').html();
    if (five == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  $('#Six').click(function() {
    var six = $('#Six').html();
    if (six == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  $('#Seven').click(function() {
    var seven = $('#Seven').html();
    if (seven == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  $('#Eight').click(function() {
    var eight = $('#Eight').html();
    if (eight == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  $('#Nine').click(function() {
    var nine = $('#Nine').html();
    if (nine == "") {
      console.log('success');
      $(this).html(user);
    }
  });
  var one = $('#three').html();
  console.log(one);
});
