// The Longest Word
// ******************
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.If there are two or more words that are the same length, return the first word from the string with that length.Ignore punctuation and assume sen will not be empty.

// Input: "fun&!! time"
// Output: "time"

// Input: "I love dogs"
// Output: "love"
// ****************

function LongestWord (sen) {
  var arr = sen.match(/[a-z0-9]+/gi)

  var sorted = arr.sort(function (a, b) {
    return b.length - a.length
  })

  return sorted[0]
}

console.log(LongestWord('the $$$longest# word is coderbyte'))
