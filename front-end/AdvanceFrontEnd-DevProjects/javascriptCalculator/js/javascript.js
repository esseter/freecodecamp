$(document).ready(function() {

  var number = [0,0];
  var operator = "none";

  $('span').click(function(){

    var key = $(this).text();
    var screen = Number($('.screen').text());
    // click on a number
    if (isNaN(Number(key)) == false || key === '.') {
      if (screen === 0) {
        $('.screen').html(key);
        number[0] = Number($('.screen').text());
      }
      else if(operator === "none" &&  screen !== 0){
        $('.screen').append(key);
        number[0] = Number($('.screen').text());
      }

      else if (operator != "none" && number[1] == 0) {
        $('.screen').html(key);
        number[1] = Number($('.screen').text());
        console.log(number);
      }
      else if (operator != "none" && number[1] !== 0) {
        $('.screen').append(key);
        number[1] = Number($('.screen').text());
        console.log(number);
      }
    }

    // click on a operator
    else if (key == '÷' || key == '-' || key == '+' || key == 'x²' || key == 'x³' || key == 'x') {
      operator = key;
      console.log(operator + "" + number);
    }
  });


  $('.equal').click(function() {
    if (number[1] != 0 && number[0] != 0 && operator != 'none') {
      var result;
      console.log('clicked');
      if (operator == "x") {
        result = number[0] * number[1];
        $('.screen').html(result);
        number[0] = result;
        number[1] = 0;
      }
      else if (operator == "+") {
        result = number[0] + number[1];
        $('.screen').html(result);
        number[0] = result;
        number[1] = 0;
      }
      else if (operator == "-") {
        result = number[0] - number[1];
        $('.screen').html(result);
        number[0] = result;
        number[1] = 0;
      }
      else if (operator == '÷') {
        result = number[0] / number[1];
        $('.screen').html(result);
        number[0] = result;
        number[1] = 0;
      }
    }
  });

  $('.clear').click(function() {
    number[0] = 0;
    number[1] = 0;
    operator = 'none';
    $('.screen').html(number[0]);
    console.log(number);
  })
});
