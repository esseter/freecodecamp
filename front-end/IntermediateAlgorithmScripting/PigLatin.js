/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word,
 moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.


Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/


function translatePigLatin(str) {
    var newArr = [];
    var empty = "";

    function isVowel(character) {
        return !/[aeiou]/.test(character);
    }


    if (!isVowel(str.charAt(0))){
        return str + "way";
      }

    else {
        newArr = str.split("");
      }

    while (isVowel(newArr[0])) {


        empty = newArr.shift();
        newArr.push(empty);
    }


 return newArr.join("")+"ay";
}
translatePigLatin("consonant");
