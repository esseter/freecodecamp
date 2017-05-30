/*Compare two arrays and return a new array with any items only
found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.


Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
 ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt", "dead shrub"]
should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"],
 ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4]
should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"]
should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"]
should return [1, "calf", 3, "piglet", 7, "filly"].

*/

function diffArray(arr1, arr2) {
  //var newArr = arr1.concat(arr2);
  var missingElements = [];

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      missingElements.push(arr1[i]);
    }
  }

  for (var j = 0; j < arr2.length; j++){
    if (arr1.indexOf(arr2[j]) === -1) {
      missingElements.push(arr2[j]);
    }
  }

  return missingElements;
}

diffArray([1, 2, 3, 5,7,9], [1, 2, 3, 4, 5, 6]);
