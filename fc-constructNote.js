// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. (first parameter is the message type and second one is the letters.)
// The function should return true if the message can be built with the letters
// that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or
// special characters in both the message and the letters.

// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

function constructNote(message, letters) {
  //object created for desired message
  let mCounter = {};
  //object created for constructing the message using given letters
  let lCounter = {};

  //constructing the mCounter(message) object
  for (const letter of message) {
    mCounter[letter] ? mCounter[letter]++ : (mCounter[letter] = 1);
  }

  //constructing the lCounter(letters) object
  for (const letter of letters) {
    lCounter[letter] ? lCounter[letter]++ : (lCounter[letter] = 1);
  }

  //taking a key from mCounter object
  for (let key in mCounter) {
    //checking if the keys that are present in the mCounter object are present in the lCounter object.
    if (!key in lCounter) {
      return false;
    }
    //if the key is present in the lCounter object , checking if the frequency matches (with mCounter) or are there more than required key -value is present in the lCounter;
    else if (!(mCounter[key] <= lCounter[key])) {
      return false;
    }
  }
  //   console.log(mCounter, lCounter);
  return true;
}

//test cases
console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
console.log(constructNote("aabbcc", "bc")); // false
console.log(constructNote("aabbcc", "aaabbcc")); // true
