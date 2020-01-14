/*
Your favorite coffee shop offers a punch card 
loyalty program. For every seven drinks you buy, 
you get one free. Since you go here every day, you are very 
excited about this! However, you occassionally forget your punch 
card and always have to take a new one. After a while, you accumulate 
a handful of partially completed punch cards.

Write a function to figure out how many free coffees you've earned 
from your collection of punch cards. It should accept one argument - 
an array of numbers with each number representing the number of 
punches each card has.
*/


function freeCoffees(punches) {
  
  let totalPunches = 0;
  
  for(let i = 0; i< punches.length; i++){
    totalPunches = totalPunches + punches[i];
  }
  
  return Math.floor(totalPunches/7);
}



module.exports = freeCoffees;
