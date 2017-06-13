/*Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible
by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {

  var biggest = Math.max(arr[0], arr[1]);
  var smallest = Math.min(arr[0], arr[1]);

  for (var i = smallest + 1; i < biggest; i++) {
    arr.push(i);
  };

  //find all the prime numbers for each members of the array
  var divisors = [];
  for (var j = 0; j < arr.length; j++) {
    for (var k = 0; k <= arr[j]; k++) {
      if (arr[j] % k == 0) {
        divisors.push(k);
      }
    }
  }
  // Now keep the number occurence to One maximum [5,5,3] becomes [5,3]

  for (var l = 0; l < divisors.length; l++) {
    for (var m = 0; m < divisors.length; m++) {
      if (divisors[l] % divisors [m] === 0 && divisors[l] > divisors[m] && divisors[m] !== divisors[l]) {
        divisors.splice(m,1);
        console.log("I kicked out " + divisors[m] +"because " + divisors[l]);
      }
    }
  }

  // now we only keep the prime numbers
  var primesDivisors = []
  function isPrime(n) {
    for (var o = 2; o < n; o++) {
      if (n % o === 0) {
        return false;
      }
    }
    return true;
  }

  for (var p = 0; p < divisors.length; p++) {
    if (isPrime(divisors[p]) === true) {
      primesDivisors.push(divisors[p]);
    }
  }
  // Finally we make the product

  var product = primesDivisors.reduce(function(a,b){
    return a * b;
  })

  return product;
}


smallestCommons([5,1]);
