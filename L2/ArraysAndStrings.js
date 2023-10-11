/*
This function will take in an array of numbers
You will return an array containing only the even numbers from the array given
All numbers will be greater than 0
*/
const evenSet = function(nums) {
    let even =  [];
    for (const num of nums) {
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    return even;
}

/*
This function will take in a string which will be a sentence
You will return an array of all the words in string which have a vowel
The sentence will only consist of lowercase letters
*/
const vowelArr = sentence => {
    let vowels = ['a', 'o', 'e', 'i', 'u'];
    let words = sentence.split(' ');

    let v = [];

    for (const word of words) {
        for (const vowel of vowels) {
            if (word.includes(vowel)) {
                v.push(word);
                break;
            }
        }
    }

    return v;
}

/*
This function will return true if the string is a palindrome and false if it is not
A palindrom is a word that reads the same backwards as forward
*/
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return reversedStr === str;
}


/*
This function will return how many letters repeat in a given string
So if I give the string 'aabcd' it would return 1
If I give the string 'aaaccp' it would return 2
The letters will not always be in alphabetical order
*/
const repeatingLetters = str => {

    let repeatedLetters = [];
    let strArray = str.splice('');
    Array.prototype.sort(strArray);

    for (let i = 1; i < strArray.length; i++) {
        if (strArray[i] === strArray[i-1] && !repeatedLetters.includes(strArray[i])) {
            repeatedLetters.push(strArray[i]);
        }
    }

    return repeatedLetters.length;
}

module.exports = {evenSet,vowelArr,isPalindrome,repeatingLetters}

