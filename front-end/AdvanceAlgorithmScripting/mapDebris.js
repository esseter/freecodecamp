/* Return a new array that transforms the element's average altitude
into their orbital periods.

The array will contain objects in the format
{name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number.
The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers,
and the GM value of earth is 398600.4418 km3s-2.


Here are some helpful links:

Math.pow()
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
 should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6},
{name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
should return [{name : "iss", orbitalPeriod: 5557},
{name: "hubble", orbitalPeriod: 5734},
{name: "moon", orbitalPeriod: 2377399}].
*/

function orbitalPeriod(arr) {

  const GM = 398600.4418; // this will never change before a good billion of years
  const earthRadius = 6367.4447;// this will never change before a good billion of years
  var finalObject = [];

  // Now we get the Orbital period with the formula given in the hint number 1 from freecodecamp
  function getOrbit(object) {
    var TwoPis = 2 * Math.PI;
    var addradiusAndAlititude = earthRadius + object.avgAlt;
    var a = Math.pow(addradiusAndAlititude, 3);
    var detailedResult = TwoPis * Math.sqrt(a / GM);
    var result = Math.round(detailedResult);
    delete object.avgAlt;
    object.orbitalPeriod = result;
    return object;
  }
  // now we scan the object given as an argument
  for (var elem in arr) {
    finalObject.push(getOrbit(arr[elem]));
  }

  // then we return our final Object we create at the beginning of the function
  return finalObject;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
