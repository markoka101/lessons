/*
This file will be used for demo before working on concepts
*/

/*
In JS there are 3 ways to declare a variable
var and let allow you to change the value of the variable after declaration
const has to have the value set on declaration
*/
var var1; //var should never be used due to scoping reasons
let let1;
const con2 = "";

/*
Here are 3 different ways to set a value to a variable
*/

//v1 is set to a number
const v1 = 10;

/*
v2, v3, and v4 are set to strings, but they are declared differently
v2 uses back tick `` 
v3 uses single qoutes ''
V4 uses double qoutes ""
*/
const v2 = `10`;
const v3 = 'asdasd';
const v4 = "asd";


/*
Boolean statements execute code depending on whether a condition is true or false
When checking for equality you use either == or ===
You should only ever use === since this will take type into consideration
*/
if(v1 === v2) {
    console.log('v1 is equal to v2');
} else if (v1 === v3) {
    console.log('v1 is equal to v3');
} else {
    console.log('v1 does not satisfy any of the above conditions')
}


/*
Arrays are used to hold multiple values
You can declare arrays with values or empty
When getting a value from an array the index starts at 0 and ends at the length-1
*/

//arr is declared with 1,2,3,4
let arr = [1,2,3,4];
//emptyArr is an empty array
let emptyArr = [];

/*
There are two basic kinds of loops that you will regularly use: for and while loops
for is used to execute a block of code a certain amount of times
while is used  to execute a block of code if a certain  condition is met
*/

//This loop will run 4 times where i will be 0 -> 1 -> 2 -> 3
for(let i = 0; i < 4; i++) {
    //Here I take the value from the index and add 1 to it
    arr[i] = arr[i]+1;
}


let c = 21;

//This loop will keep running as long as c is less than 100
while(c < 100) {
    console.log(c);
    c = c*2;
}


/*
functions are used to execute blocks of code whenever they are called
There are three ways to declare functions
functions can return values or just run the code inside
functions can also take parameters or be empty
*/
function f1(a,b) {
    return a+b;
}

const f2 = function(a,b) {
    return a*b;
}

//this is an arrow function
//when using this you should be returning something
const f3 = (a,b) => {
    return a-b;
}

//this function takes no parameters and is not returning anything
function f4() {
    console.log('This is function 4');
}


const sw = function (name) {
    //this is a switch statement
    //switch statements take a variable and execute certain lines of code based on the expression
    switch (name) {
        //if the name is mark this will run
        case 'mark':
            console.log(`hi mark`);
            break;

        //if the name is Liam this will execute
        case 'Liam':
            console.log('what up');
            break;
    
        //if the name is neither mark or Liam this will execute
        default:
            console.log('idk u');
            break;
    }
}
