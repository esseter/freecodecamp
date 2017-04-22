//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//Boolean Objects
//Array.prototype.filter()

//bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
//bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
//bouncer([false, null, 0, NaN, undefined, ""]) should return [].
//bouncer([1, null, NaN, 2, undefined]) should return [1, 2].

function bouncer(arr) {

  var invalidNumber = 0;
  var invalidString = "";
  var invalidNull = null;
  var invalidNan = NaN;

  var correctArr = arr.filter(function(arrId) {
      return arrId !== undefined && arrId !== invalidNumber && arrId !== false && arrId !== invalidString && arrId !== invalidNull && (!isNaN(arrId) || arrId.length > 0);
    });
  return correctArr;
}

bouncer([false, null, 0, undefined, ""]);
