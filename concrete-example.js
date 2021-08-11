//Write a function which takes in a string and returns  counts of each character in the string.

//charCount("aaaa"); //expected output {a:4}
//charCount("hello"); //expected output {h:1,e:1,l:2,o:1}

//complex input (my phone number is 1827596);
//Hello hi
//charCount("");

//my naive solution
// function charCount(str){
//     let count = {};
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i].toLowerCase();
        
//         count[element] ? count[element] += 1 : count[element] = 1;
//     }
//     return count;
// }

// colt's solution

// function charCount(str){
//     let count = {};
//     for(let element of str){
//         element = element.toLowerCase();
//         if(/[a-z0-9]/.test(element)){
//             count[element] = ++count[element] || 1; // count[element] ? count[element] ++ : count[element] = 1;
//         }
//     }
//     return count;
// }

//regex free solution

function charCount(str){
    let count = {};
    for(element of str){
        if(isAlphaNum(element)){
            element = element.toLowerCase();
            count[element] = ++count[element] || 1; 
        }
    }

    return count;
}

function isAlphaNum(elem){
    let code = elem.charCodeAt(0);
    if(!(code > 47 && code <58)&&
        !(code>64 && code <91)&&
        !(code > 96 && code <123)){
            return false;
        }
        return true;
}
 

console.log(charCount("hello"));
console.log(charCount("aaaa"));
console.log(charCount("Hello hi"));