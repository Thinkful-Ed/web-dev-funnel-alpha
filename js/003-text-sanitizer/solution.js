/*
The internet can be a negative place sometimes.
Write a function that will help make the text that 
appears on a web page a little more positive. It should 
look for a given word within a text string and replace 
it with another word of your choosing.

The function should take 3 arguments: a text string, 
a string to look for within that string, and a 
string to replace that word with.
*/

function websiteWordReplace(text, textToFind, textToSwap) {
  const regex = new RegExp(textToFind, 'g');
  return text.replace(regex, textToSwap);
}



module.exports = websiteWordReplace;
