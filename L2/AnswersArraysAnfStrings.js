/*
This function will take in an array of numbers
You will return an array containing only the even numbers from the array given
All numbers will be greater than 0
*/
const evenSet = function(nums) {

    //Here I make an array to hold the even numbers
    let even =  [];

    //I loop through the nums array using a for-of loop
    for (const num of nums) {

        //Check if the number is even and push into the even array I created if it is
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    //Return the even array
    return even;
}

/*
This function will take in a string which will be a sentence
You will return an array of all the words in string which have a vowel
The sentence will only consist of lowercase letters
*/
const vowelArr = sentence => {
    //I created an array to hold the vowels
    let vowels = ['a', 'o', 'e', 'i', 'u'];

    //I make an array where I split the string by spaces
    //This makes it so each word is an element in the array
    let words = sentence.split(' ');

    //I will push the words with vowels into this array
    let v = [];

    //The first loop goes through the words array I created 
    for (const word of words) {
        
        //This is will loop through the vowel array I created
        //That allows me to check if word has a vowel by iterating through the array
        for (const vowel of vowels) {

            //check if the word includes the current vowel
            if (word.includes(vowel)) {

                //push into the arrray I made to hold those words
                v.push(word);

                //Since the word already has a vowel there is no point in continuing the loop
                //So I break it
                break;
            }
        }
    }

    //return the array containing words withh vowels
    return v;
}

/*
This function will return true if the string is a palindrome and false if it is not
A palindrom is a word that reads the same backwards as forward
*/
function isPalindrome(str) {

    /*
    Three things are going on here:
        First I turn the string into an array using the split function
        From there I call the reverse function to reverse the order of elements in the array
        Last I turn the array back into a string using join
    */
    let reversedStr = str.split('').reverse().join('');

    //Here I return whether the two strings are equal
    return reversedStr === str;
}


/*
This function will return how many letters repeat in a given string
So if I give the string 'aabcd' it would return 1 since only a repeats
If I give the string 'aaaccp' it would return 2 since both a and c repeats
The letters will not always be in alphabetical order
There will also be no spaces in between letters
*/
const repeatingLetters = str => {

    //create an array to hold the repeating letters
    let repeatedLetters = [];

    //create an array to hold the stirng
    let strArray = str.split('');

    //Here I use the sort function which will put my array into alphabetical order
    strArray.sort();

    //Loop through the array starting at the second element
    for (let i = 1; i < strArray.length; i++) {

        /*
        This checks two things:
            First checks if the letter is equal to the previous one
            Then make sure that I didnt already count that letter
        */ 
        if (strArray[i] === strArray[i-1] && !repeatedLetters.includes(strArray[i])) {

            //push the repeating letter into the array I made
            repeatedLetters.push(strArray[i]);
        }
    }

    //Here I return the length of the array
    //Since the repeating letters are only there once the length is the amount of letters that repeated
    return repeatedLetters.length;
}

module.exports = {evenSet,vowelArr,isPalindrome,repeatingLetters}
