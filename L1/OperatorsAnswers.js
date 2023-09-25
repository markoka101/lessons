/*
Basic operators
+ addition
- subtraction
/ division
* multiplication
% mod
*/

/*
Basic logic operators
=== equal to
! not
&& and
|| or

> greater than
< less than
>= greater than or equal to
<= less than or equal to
*/


/*
This function should return true if even and false if odd
*/
function isEven(x) {
    return (x % 2 === 0);
}

/*
This function will take two numbers and an operator
The operators will be addition '+' , subtraction '-' , division '/' , and multiplication '*'
From there you will return the result of the two numbers with the selected operator
*/
function calculate(x,y,operator) {
    switch(operator) {
        case '+':
            return (x+y);
        case '-':
            return (x-y);
        case '/':
            return (x/y);
        case '*':
            return (x*y);
    }
}

/*
This function will return the summation of numbers from 1 to x
Use a for loop to get sum
*/
function summation(x) {
    let sum = 0;

    for(let i = 1; i <= x; i++) {
        sum += i;
    }
    return sum;
}

/*
Fizz buzz is one of the most common coding tasks given in interviews
You loop through numbers 1 to n-1 and either add the number(integer), fizz(string), buzz(string), or fizzbuzz(string) into an an array
if the number is divisible by 3 you add fizz
for 5 you add buzz
if it is divisible by 3 and 5 you add fizzbuzz
*/
function fizzbuzz(n) {
    //push the labels into this arraay
    let result = [];

    //create the for loop
    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) {
            result.push('fizzbuzz');
        } else if (i % 5 === 0) {
            result.push('buzz');
        } else if (i % 3 === 0) {
            result.push('fizz')
        } else {
            result.push(i);
        }
    }

    return result;
}