// Imports sentence2 to multi and uppercase
import { toUpperCase2, toUpperCase3 } from './stringModule.js';
import { findMax } from './arrayModule.js';

// Add function 
export function add(a, b) {  
    return a + b;
}

// Subtract function
export function subtract(a, b) {
    return a - b;
}

// Multiply function
export default function multiply(a, b) {
    return a * b;

}

// addAndLogUpper function
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase2(result.toString()));
}

// multiplies then converts the answer to string and prints sentence 3
export function multiplyAndConvert() {
    const max = findMax([]);
    const result = multiply(max, 3);
    console.log(toUpperCase3(result.toString()));
}