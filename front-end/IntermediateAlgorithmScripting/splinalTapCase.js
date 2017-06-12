/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.split("");
  str[0] = str[0].toLowerCase();
  for (var i = 1; i < str.length; i++) {
    var letter = str[i];
    if (str[i] === letter.toUpperCase() && str[i] !== " " && str[i] !=="_" && str[i] !== "-") {
      if (str[i - 1] === "-") {
        str[i] = str[i].toLowerCase();
      }
      else {
        str[i] = "-" + str[i].toLowerCase();
      }
    }

    else if (str[i] === " ") {
      str[i] = "-";
    }
    else if (str[i] === "_") {
      str[i] = "-";
    }
  }
  return str.join("");
}

spinalCase("Teletubbies say Eh-oh");
