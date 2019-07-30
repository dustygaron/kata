// This challenge requires you to alphabetically sort the characters in a string. We'll sort the characters using the built-in array sort function.


function AlphabetSoup(str) {

  // convert the string into an array of characters
  var chars = str.split("");

  // sort the array in alphabetical order
  var sorted = chars.sort();

  // return the newly sorted string
  return sorted.join("");

}

AlphabetSoup("coderbyte");  