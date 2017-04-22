//You will be provided with an initial array (the first argument in the destroyer function),
//followed by one or more arguments. Remove all elements from the initial array that are of the same
//value as these arguments.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.

//Here are some helpful links:

//Arguments object
//Array.prototype.filter()

//destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
//destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
//destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
//destroyer([2, 3, 2, 3], 2, 3) should return [].
//destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
//destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr) {
  // placing arguments in array --> arrAim
  var i = 1;
  var arrAim = [];
  while (arguments[i]) {
    arrAim.push(arguments[i]);
    i++;
  }
  // arguments placed in the arrAim array
  for (i = 0; i < arrAim.length; i++){
  arr = arr.filter(function(arrId) {
    return arrId !== arrAim[i];
  });
  }
  return arr;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
