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

var Person = function(firstAndLast) {

  // we rewrite what is needed
  this.setFullName = function(firstAndLast) {
    Person.prototype.firstname = firstAndLast.split(' ')[0];
    Person.prototype.lastname = firstAndLast.split(' ')[1];
  };
  this.setFirstName = function(firstname) {
    Person.prototype.firstname = firstname;
  };
  this.setLastName = function(lastname) {
    Person.prototype.lastname = lastname;
  };

  // we can now call the updated data
  this.getLastName = function() {
    return Person.prototype.lastname;
  };
  this.getFirstName = function() {
    return Person.prototype.firstname;
  };
  this.getFullName = function() {
    return Person.prototype.firstname + " "  + Person.prototype.lastname;
  };

  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
bob.getFullName();
