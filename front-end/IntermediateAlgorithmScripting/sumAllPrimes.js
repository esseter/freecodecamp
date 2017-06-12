/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {

  function isPrime(n) {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  var primes = [0];

  for (var j = 2; j <= num; j++) {
    if (isPrime(j) === true) {
      console.log("it is a prime");
      primes.push(j);
    }
  }

  var sum = primes.reduce(function sumUp(a, b) {
    return a + b;
  }, 0);



  return sum;
}

sumPrimes(977);
