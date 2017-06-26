/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity
into the inventory array. The returned inventory array should be in alphabetical order by item.

Here are some helpful links:

Global Array Object

The function updateInventory should return an array.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"],
 [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"],
 [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"],
  [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"],
[2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"],
 [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"],
 [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"],
  [0, "Microphone"], [1, "Toothpaste"]]
*/


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    function isItThere(arrx, arry) {
      if (arrx[1] === arry[1]) {
        arrx[0] += arry[0];
        console.log('j ai ajoute ' + arry);
        return true;
      }
    };
    // Here we push the items that are already in the list and removing them from the new inventory object
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (isItThere(arr1[i], arr2[j]) === true) {
          arr2.splice(j,1);
          console.log('J ai coupe ' + j);
        }
      }
    }
    // Now we push the other items that are not already in the current inventory
    var x = 0;
    while (x < arr2.length) {
      if (arr1.indexOf(arr2[x][1]) == -1) {
        arr1.push(arr2[x]);
      }
      x++;
    }

    //we change the order of the individual arrays within the object to make the sort option automatic
    var y = 0;
    while (y < arr1.length) {
      arr1[y].reverse();
      y++;
    }

    arr1 = arr1.sort();
    // then we put that to the original order for the individual arrays within the object
    var z = 0;
    while (z < arr1.length) {
      arr1[z].reverse();
      z++;
    }
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
