// This challenge requires you to add up all the numbers from 1 to a given argument. For example, if the parameter num is 4, your program should add up 1 + 2 + 3 + 4 and return 10. This will be pretty simple to write out as a loop. We'll maintain a variable and keep adding to it as we loop from 1 to num.

function SimpleAdding(num) {
  var answer = 0;
  // loop from 1 to num
  for (var i = 1; i <= num; i++) {
    answer = answer + i;
  }
  return answer;
}

SimpleAdding(4);

//  There is also a very clever way to calculate the sum of the numbers 1 + 2 + 3 + .... The sum of the first N natural numbers is equal to n(n+1)/2 (see proof and why this is so).

function SimpleAdding(num) {
  return (num * (num + 1)) / 2;
}
SimpleAdding(4);     