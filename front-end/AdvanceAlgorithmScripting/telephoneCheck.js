/* Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a
valid US number. The following are examples of valid formats for US numbers
(refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753
or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number
based on any combination of the formats provided above. The area code is required.
If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.

Here are some helpful links:

RegExp

telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6505552368)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.

*/


function telephoneCheck(str) {
  // Good luck!
  function characterChecker(arr) {
    arr = arr.split('');
    var i = 0;
    while (i < arr.length) {
      if (isNaN(arr[i]) === true && arr[i] !== ")" && arr[i] !== "(" && arr[i] !== "-") {
        return false;
      }
      i++;
    }
  };

  function numberChecker(num) {
    var strBis = num.split('');
    for (var j = 0; j < strBis.length; j++) {
      if (isNaN(strBis[j]) || strBis[j] == " ") {
        strBis.splice(j, 1);
        j--;
      }
    }
    if (strBis.length == 10) {
      return 10;
    } else if (strBis.length == 11) {
      return 11;
    } else {
      return false;
    }
  }

  function isThereABracket(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "(" || arr[i] === ")") {
        return true;
      }
    }
  };


  function bracketsChecker(arrBis) {
    console.log(arrBis);
    for (var i = 0; i < arrBis.length; i++) {
      if (arrBis[i] == "(") {
        for (var j = i; j < arrBis.length; j++) {
          if (arrBis[j] == ")") {
            return true;
          }
        }
      } else if (arrBis[i] == ")") {
        for (var k = i; k < arrBis.length; k++) {
          if (arrBis[k] == "(") {
            return true;
          }
        }
      }
    }
  }


  if (numberChecker(str) === 10 && characterChecker(str) === undefined) {
    str = str.split("");
    if (!isThereABracket(str)) {
      return true;
    } else if (isThereABracket(str) === true && bracketsChecker(str) === true && isNaN(str[0]) === true) {
      if (str[0] === "(" && str[str.length - 1] === ")") {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else if (numberChecker(str) === 11 && characterChecker(str) === undefined) {
    str = str.split('');
    if (str[0] === "1") {
      if (!isThereABracket(str)) {
        return true;
      } else if (isThereABracket(str) === true && bracketsChecker(str) === true) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
telephoneCheck("555)-555-5555");
