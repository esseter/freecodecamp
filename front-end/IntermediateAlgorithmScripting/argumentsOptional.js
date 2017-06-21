/*
*  Create first function that sums two arguments together.
* If only one argument is provided, then return a function that expects one argument and returns the sum.
*
*  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
*
*  Calling this returned function with a single argument will then return the sum:
*
*  var sumTwoAnd = addTogether(2);
*
*  sumTwoAnd(3) returns 5.
*
*  If either argument isn't a valid number, return undefined.
*
*  Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*  Here are some helpful links:

*  Closures
*  Arguments object

*  addTogether(2, 3) should return 5.
*  addTogether(2)(3) should return 5.
*  addTogether("http://bit.ly/IqT6zt") should return undefined.
*  addTogether(2, "3") should return undefined.
*  addTogether(2)([3]) should return undefined.

*/

function addTogether() {
  var isItNumber = function(number) {
    if (typeof number !== 'number') {
      return undefined;
    }
    else {
      return number;
    }
  };
  if (arguments.length > 1) {
    var first = isItNumber(arguments[0]);
    var second = isItNumber(arguments[1]);
    if (first !== undefined && second !== undefined) {
      return first + second;
    }
  }
  else {
    var third = isItNumber(arguments[0]);
    if (isItNumber(third)) {
      return function(arg2) {
        var fourth = isItNumber(arg2);
        if (third !== undefined && fourth !== undefined) {
          return third + fourth;
        }
        else {
          return undefined;
        }
      };
    }
  }
}

addTogether(2)(3);
