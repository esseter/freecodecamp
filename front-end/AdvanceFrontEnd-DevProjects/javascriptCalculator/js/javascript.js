$(document).ready(function() {

  $('span').click(function(){
    var key = $(this).text();
    var screen = Number($('.screen').text());
    var number = [0,0];
    var operator = "";

    // click on a number
    if (isNaN(Number(key)) == false || key === '.') {
      if (screen === 0) {
        $('.screen').html(key);
        number[0] = Number($('.screen').text());
      }
      else if(operator === "" &&  screen !== 0){
        $('.screen').append(key);
        number[0] = Number($('.screen').text());
      }

      else if (operator !== "" && number[1] == 0) {
        $('.screen').html(key);
        number[1] = Number($('.screen').text());
      }
      else if (operator !== "" && number[1] != 0) {
        $('.screen').append(key);
        number[1] = Number($('.screen').text());
      }
    }

    // click on a operator
    else if (key == '÷' || key == '-' || key == '+' || key == 'x²' || key == 'x³' || key == 'x') {
      operator = key;
      return operator;
    }
    console.log(number);
  });

});
