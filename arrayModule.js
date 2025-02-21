// Sets array and uses math.max to save the largest number in the array
export const numbers = [1, 2, 3, 4, 5];
export const max = Math.max(...numbers);

// Find max function export that returns number from Math.max
export function findMax() { 
    return max;
}

// Function to reverse the array numbers
export function reverseArray() {
  return numbers.reverse();
}