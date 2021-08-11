// Anagrams
// given two strings, write a function to determine if the second string is an 
// anagram of the first. An anagram is a word, phrase, or name formed by 
// rearranging the letters of another, such as cinema, formed from iceman.

// solution

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let counter1 = {};
    let counter2 = {};

    for (let elem of str1) {
        counter1[elem] ? counter1[elem]++ : counter1[elem]=1
    }

    for (let elem of str2) {
        counter2[elem] ? counter2[elem]++ : counter2[elem]=1
    }

    for(key in counter1){
        if(!(key in counter2)){
            return false;
        }
        if(counter1[key] !== counter2[key]){
            return false;
        }
    }

    console.log(counter1, counter2);
    return true;
}





//test cases
// console.log(validAnagram(" "," ")); //true
// console.log(validAnagram("aaz", "zza")); //false
// validAnagram("anagram", "nagaram"); //true
// validAnagram("rat", "car"); //false
// validAnagram("awesome","awesom"); //false
// validAnagram("qwerty","qeywrt"); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true