// This challenge requires you to convert an integer, which represents the number of minutes, for example 63 means 214 minutes, and convert this integer into hours and minutes. So if the input was 63, then your program should output the string '1:3' because 63 minutes converts to 1 hour and 3 minutes.

// We will use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division, so for example, the remainder of 5 / 2 is 1, so the modulo of 5 / 2 is 1.


function TimeConvert(num) {

  // to get the hours, we divide num by 60 and round it down
  // e.g. 61 / 60 = 1 hour
  // e.g. 43 / 60 = 0 hours
  var hours = Math.floor(num / 60);

  // to get the minutes, now we use the remainder that we discarded above
  // the modulo operation is represented by the % symbol
  // e.g. 61 % 60 = 1 minute
  // e.g. 43 % 60 = 43 minutes
  var minutes = num % 60;

  // combine the hours and minutes
  return hours + ':' + minutes;

}

TimeConvert(124);  