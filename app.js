// Imports the add, sub, and default multiply function from math mod
import multiply, { add, multiplyAndConvert, subtract } from './mathModule.js';

// Imports upper and lowercase functions from string mod
import { toUpperCase, toLowerCase } from './stringModule.js';

// Imports find max and reverse function from array mod
import { findMax, reverseArray } from './arrayModule.js';

// Imports multi then upper function from string mod through math mod
import { addAndLogUpper } from './mathModule.js'; 



// Displays return of add function
console.log('Add: ', add(5, 15));

// Displays return of subtract function
console.log('Subtract: ', subtract(15, 5));

// Displays return of multiply function
console.log('Multiply: ', multiply(5, 5));

// Displays return of uppercase function
console.log('To Upper Case: ', toUpperCase());

// Displays return of lowercase function
console.log('To Lower Case: ', toLowerCase());

// Displays return of find max function
console.log('Max: ', findMax([]));

// Displays return of reverse function
console.log('Reversed: ', reverseArray([]));

// Displays the return of the string from string module through the math module
addAndLogUpper(10, 10);

// Displays the return of the string from the string module through the math module
multiplyAndConvert(5, 7)