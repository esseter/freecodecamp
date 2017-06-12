/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/


function convertHTML(str) {
  // &colon;&rpar;

  var and = /&/gi;
  str = str.replace(and, "&amp;");

  var open = /</gi;
  str = str.replace(open, "&lt;");

  var close = />/gi;
  str = str.replace(close, "&gt;");

  var doubleQuote = /"/gi;
  str = str.replace(doubleQuote, "&quot;");

  var apostrophe = /'/gi;  
  str = str.replace(apostrophe, "&apos;");


return str;
}

convertHTML("Dolce & Gabbana <>");
