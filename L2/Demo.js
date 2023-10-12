/*
Array functions
We will use the array arr to demonstrate functions
*/ 
const arr  = [1,2,3,4];

//Standard for loop is what you need to use if you want to modify the array elements 
//An example would be making arr[i] = arr[i-1]
for (let i = 1; i < arr.length; i++) {
    //arr[i] = arr[i-1];
}

//For of loop is used to iterate through each element of an array and only make local changes to element
//This would mean the element wont interact with the elements in different indices
for (let item of arr) {
    //console.log(item);
}

//Pushing a value to the back of the array
arr.push(5);
console.log(arr);

//here we popped the last element in the array and set it equal to a variable
let popped = arr.pop();
console.log(`${arr} popped element: ${popped}`);

//This removes the first value of the array
arr.shift();
console.log(arr);

//Push value to the front of the array
arr.unshift(7);
console.log(arr);

//Remove the element from an index of an array
//2 is the index and 1 is the amount of items to remove
arr.splice(2,1);
console.log(arr);

//Replace the element at an index with a new element
//First 1 is index, second 1 is amount of elements, the new element
arr.splice(1,1,'replace');
console.log(arr);

//This will sort the array in an alphabetical order
//You can customize the sort, but we will cover that later
arr.sort();
console.log(arr);

//Reverse the direction of the array
arr.reverse();
console.log(arr);

/*
String functions
We will use the string str below to demonstrate functions
console.log will be used to help visualize what is happening
*/
let str =  'this is a sentence';
console.log(str.includes('this'));
console.log(str.includes('z'));

//boolean
console.log(str.startsWith('ths'));
console.log(str.endsWith('tence'));

//trims white space in the beginning and end of string
console.log(str.trim());

//only replaces first instance of t to z in the string
console.log(str.replace('t','z'));

//this replace every instance of t to z in the stirng
console.log(str.replaceAll('t','z'));

//convert string into array making each element a character
let strArrOne  =  str.split('');
console.log(strArrOne);

//convert string into array making each element block of characters 
let strArrTwo = str.split(' ');
console.log(strArrTwo);

let strArrThree = str.split(' is');
console.log(strArrThree);

//replace the even indices of array with even
for (let i = 0; i < strArrOne.length; i++) {
    if (i % 2 === 0) {
        strArrOne.splice(i,1,'even');
    }
}

//show object converted to string
let arrToString =  strArrOne.toString();
console.log(arrToString);

//This converts an array of words into a sentence
console.log(strArrOne.join(' '));

