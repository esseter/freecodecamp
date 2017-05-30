/* We'll pass you an array of two numbers. Return the sum of
those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck.
Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/


function sumAll(arr) {

  var biggest = Math.max(arr[0], arr[1]);
  var smallest = Math.min(arr[0], arr[1]);
  var arrFull = [];

  for (var i = smallest - 1; i < biggest; i++) {
    arrFull.push(i + 1);
  };

  var sum = arrFull.reduce(function(acc, val) {
    return acc + val;
  })


  console.log(sum);
}

sumAll([1, 4]);
