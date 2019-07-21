// This challenge requires you to determine if every alphabetic character in a string has a plus (+) symbol on the left and right side of itself. For example: the string "+a+b+c+" is good but the string "===+3+f=+b+" is not because the "f" does not have a plus symbol to its right. A very simple way to solve this challenge is to create a loop that every time it gets to an alphabetic character, it checks to see if it is surrounded by + symbols.


function SimpleSymbols(str) {

  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
  var str = '=' + str + '=';

  // loop through entire string
  for (var i = 0; i < str.length; i++) {

    // check to see if current character is an alphabetic character  
    // by using a simple case-insensitive regex pattern 
    if (str[i].match(/[a-z]/i) !== null) {

      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i - 1] !== '+' || str[i + 1] !== '+') {
        return false;
      }

    }

  }

  return true;

}

SimpleSymbols("+d+=3=+s+");  