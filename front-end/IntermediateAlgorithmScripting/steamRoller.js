/*  Flatten a nested array. You must account for varying levels of nesting.


*  Here are some helpful links:

*  Array.isArray()

*  steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
*  steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
*  steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
*  steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/


function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
