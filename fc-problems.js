// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
  let inputs = args;
  let counter = {};

  for (const input of inputs) {
    counter[input] ? counter[input]++ : (counter[input] = 1);
  }
  for (const key in counter) {
    if (counter[key] > 1) {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates("a", "b", "c", "a")); // true
