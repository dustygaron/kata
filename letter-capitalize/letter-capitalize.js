// This challenge requires you to capitalize the first letter of each word. To do this, we'll create an array of words, then loop through each word and capitalize the first letter, and then combine these words back into one string. Below is some simple code to accomplish this:


function LetterCapitalize(str) {
  // split the string into an array
  var words = str.split(" ");

  // we split the word into two parts and then combine the parts 
  // the first part is the first letter which we capitalize and the 
  // second part is the rest of the string
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
  }

  // return the array of words joined into a string
  return words.join(" ");

}
LetterCapitalize("hello world from coderbyte");

// There is also another way to solve this challenge by using regular expressions and matching each word in the string and changing the first letter.

function LetterCapitalize(str) {
  // our regex [a-z] matches every alphabetic character in the string
  // but the \b before it specifies a word boundary, in other words, nothing can 
  // come before those letters therefore selecting every word in the string
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  });

}
LetterCapitalize("hello world from coderbyte");  