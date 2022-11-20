// In this program, the user inputs any word.
// The program reverses the word and saves it to a new string, using a 'while' loop.
// The program then compares the inputted string with the new string, using an 'if...else' statement.
// The program outputs a string stating whether or not the user inputted string is a palindrome.

// .toLowerCase ensures user input is read as lowercase by the program.
/* .length-1 ensures the index count ends at the last character of the string 
(i.e. the last character of 'dog' has an index of 2, so length-1 (i.e. 3-1) = 2). */
let userInput = prompt("Enter a word: ").toLowerCase(); 
let newString = "";
let i = userInput.length-1; 

//the while loop reverses the order of the inputted string and converts it to a new string.
while (i >= 0) {                          
  newString = newString + userInput[i];     
  i--;
}

//the 'if...else' statement compares the userInput and newString, and outputs whether or not it's a palindrome.
if (newString === userInput) { 
    alert(`${userInput} is a palindrome`);
    console.log(`${userInput} is a palindrome`);
} else {
  alert(`${userInput} is not a palindrome`);
    console.log(`${userInput} is not a palindrome`);
}


/*  ======================== REFERENCES ======================================

How to reverse a string with a decrementing 'for' loop in JavaScript:
https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

How to iterate backwards through a string in JavaScript:
https://www.codegrepper.com/code-examples/javascript/iterate+through+a+string+backwards+js

While loops:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
https://www.programiz.com/javascript/while-loop
*/