//One of the simplest and most widely known ciphers is a Caesar cipher,
// also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

//All letters will be uppercase. Do not transform any non-alphabetic character
//(i.e. spaces, punctuation), but do pass them on.
//Here are some helpful links:

//String.prototype.charCodeAt()
//String.fromCharCode()

//rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
//rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
//rot13("SERR YBIR?") should decode to "FREE LOVE?"
//rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."



function rot13(str) { // LBH QVQ VG!
  // transform the string in charcode
  var codeStr = []; // the serie of code will be here
  var code = [];
  for (i = 0; i < str.length; i++){
    code = str.charCodeAt(i);
    codeStr.push(code);
  }
  //Decode the code for each letter
  for (i = 0; i < codeStr.length; i++) {

    //N - Z and n - z decode

    if ((codeStr[i] >= 78 && codeStr[i] <= 90) || (codeStr[i] >= 110 && codeStr[i] <= 122)){
      codeStr[i] = codeStr[i] -13;
    }

    // A-M and a-m decode

    else if((codeStr[i] >= 65 && codeStr[i] <= 77) || (codeStr[i] >= 97 && codeStr[i] <= 109)) {
      codeStr[i] = codeStr[i] + 13;
    }
  }



  // this is last step to go from charcode to string
  var solution = [];
  for (j=0; j < codeStr.length; j++){
  var letter = String.fromCharCode(codeStr[j]);
  solution.push(letter);
  }

  return solution.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
