//DIVIDE and CONQUER
// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity.

//An example

// Given a sorted array of integers , write function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found,return -1;

//A Naive Solution

// linear search
// function search(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return i;
//     }
//   }
//   return -1;
// }

// Binary Search

function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
