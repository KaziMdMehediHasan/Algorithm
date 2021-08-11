// SLIDING WINDOW

// This pattern involves creating a window which can either be an array or number from one portion to another.

// Depending on a certain contiodion, the window either increases or closes (and a new window is created)

// Very useful for keeping track of a subset of data in an array/string etc.

// use cases:
// longest sequence of unique characters in a string

// An Example

// Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// naive solution
// function maxSubArraySum(arr, num) {
//   let maxSum = -Infinity;
//   for (let i = 0; i <= arr.length - num; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > maxSum) {
//       maxSum = temp;
//     }
//     console.log(temp, maxSum);
//   }
//   return maxSum;
// }

console.log(
  "<!-------------------Refactored Solution-----------------------!>"
);

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  temp = maxSum;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    // maxSum = Math.max(temp, maxSum);
    if (temp > maxSum) {
      maxSum = temp;
    }
    console.log(temp, maxSum);
  }
  return maxSum;
}
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// maxSubArraySum([4, 2, 1, 6], 1); //6
// maxSubArraySum([4, 2, 1, 6, 2], 4); //13
// maxSubArraySum([], 4); //null
