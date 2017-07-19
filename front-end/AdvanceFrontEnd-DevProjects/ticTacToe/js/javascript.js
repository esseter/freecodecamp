$(document).ready(function(){

  var value;
  var user;
  var computer;

  $('.popup').css('display','block');


  $('#X').click(function() {
    value = $(this).html();
    $('.popup').css('display','none');
    console.log(value);
  });
  $('#O').click(function() {
    value = $(this).html();
    $('.popup').css('display','none');
    console.log(value);
  });
});
