//naive solution
//big O(n^2)

// function same(arr1, arr2) {
//   if(arr1.length != arr2.length){
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i]**2);
//     if(correctIndex === -1){
//       return false;
//     }
//     arr2.splice(correctIndex,1)
//   }
//   return true;
// }

// test cases
// console.log(same([1,3,4],[1,9,16])); // true;
// console.log(same([2,6,4],[4,32,16])); // false;
// console.log(same([1,3,4],[9,1])); //false;

// refactored or optimized solution

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let fCounter1 = {};
  let fCounter2 = {};

  for (let elem of arr1) {
    fCounter1[elem] ? fCounter1[elem]++ : (fCounter1[elem] = 1);
  }
  for (let elem of arr2) {
    fCounter2[elem] ? fCounter2[elem]++ : (fCounter2[elem] = 1);
  }

  for (key in fCounter1) {
    if (!(key ** 2 in fCounter2)) {
      return false;
    }

    if (fCounter2[key ** 2] !== fCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 3, 4], [1, 9, 16])); // true;
console.log(same([2, 6, 4], [4, 32, 16])); // false;
console.log(same([1, 3, 4], [9, 1])); //false;

// Count Unique Numbers : My Solution

function countUniqueValues(arr) {
  let uniqueValues = {};

  for (const value of arr) {
    uniqueValues[value] ? uniqueValues[value]++ : (uniqueValues[value] = 1);
  }

  return Object.keys(uniqueValues).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
