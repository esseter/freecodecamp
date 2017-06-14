/*Find the minimum common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the minimum common multiple of both 1 and 3 that is evenly divisible
by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

minimum Common Multiple

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
  var ordered = arr.sort(),
      res = ordered[1],
      multiplier = ordered[1] - 1,
      simplifier = [2, 3, 5, 7],
      miniSearch = true;

 // Get the highest common multiple
  while(miniSearch){
    for(var i = ordered[0]; i <= ordered[1]; i++){

      if((res % i) !== 0){
        miniSearch = true;
        break;
      }

      miniSearch = false;
    }

    if(miniSearch){
      res *= multiplier;
      multiplier--;
    }

  }

  for(var j = 0; j < simplifier.length; j++){
    var isItSimplifiable = true;
    var tempRes;

    do {
      tempRes = res / simplifier[j];
      for(var x = ordered[0]; x <= ordered[1]; x++ ){
        if(tempRes % x !== 0){
          isItSimplifiable = false;
          tempRes = tempRes * simplifier[j];
          break;
        }
      }

      res = tempRes;
    } while (isItSimplifiable);

  }


  return res;
}


smallestCommons([1, 13]);
