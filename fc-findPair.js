// Frequency Counter - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements
// in the array whose difference is n. This function should return true
// if the pair exists return true or false if it does not.

// Solve this with the following requirements:
// Time Complexity - O(n)
// Space Complexity - O(n)

//Naive Solution

// function findPair(arr, n) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(arr.length);
//       if (arr[i] - arr[j] === n || arr[j] - arr[i] === n) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function findPair(arr, num) {
  const obj = {};

  for (const item of arr) {
    if (obj[item - num] || obj[item + num]) console.log(true);
    obj[item] = item;
  }
  console.log(obj);

  return false;
}

//Refactored solution
// function findPair(arr, n) {}
// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
// console.log(findPair([4, -2, 3, 10], -6)); // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
// console.log(findPair([], 0)); // false
// console.log(findPair([5, 5], 0)); // true
// console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
// console.log(findPair([1, 3, 4, 6], -2)); // true
// console.log(findPair([0, 1, 3, 4, 6], -2)); // true
