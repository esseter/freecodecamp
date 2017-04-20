//Write a function that splits an array (first argument) into groups the length of size
//(second argument) and returns them as a two-dimensional array.
//Here are some helpful links:
//Array.prototype.push()
//Array.prototype.slice()
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrDos = [];

for (i = 0; i < arr.length; i = 0) {
  arrDos.push(arr.splice(i, i+ size));
};

  console.log(arrDos);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
