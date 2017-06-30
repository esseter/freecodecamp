/* Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Details of the Object Model

Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")

*/

var Person = (function() {
  var firstname, lastname; // These are essentially private variables scoped to this function (an immediately invoked function express or IIFE)

  function Person(firstAndLast) {
    firstname = firstAndLast.split(' ')[0]; // set the variables during instantiation
    lastname = firstAndLast.split(' ')[1];
  }
  // these methods have access to the private variables because of closures
  Person.prototype.getFullName = function() {return firstname + ' ' + lastname; };
  Person.prototype.setFirstName = function(newFirst) {firstname = newFirst; }; // set the new firstname by overwriting the variable.
  Person.prototype.getLastName = function() {return lastname; };
  Person.prototype.getFirstName = function() {return firstname;};
  Person.prototype.setLastName = function(newLast) {lastname = newLast; };
  Person.prototype.setFullName = function(firstAndLast) {
    firstname = firstAndLast.split(' ')[0];
    lastname = firstAndLast.split(' ')[1];
  };
  return Person; // return the Person function so that it can be used in the outside world.
})(); // we declare a function expression in parenthesis and then imediately invoke it by adding the '()' after it.
var bob = new Person('Bob Ross'); // business as usual.
bob.getFullName();

console.log(Object.keys(bob)); // returns '[]' because bob has no properites
