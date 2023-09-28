/*
This file will be used for demo before working on concepts
*/

const v1 = 10;
const v2 = `10`;
const v3 = 'asdasd';
//console.log

//variables

//boolean statements if,else if, else, switch



let arr = [1,2,3,4];
//loops
for(let i = 0; i < 4; i++) {
    arr[i] = arr[i]+1;
}

let c = 21;



while(c < 20) {
    console.log(c);
}

let x = 1;
let y = 2;

//functions
function f1(a,b) {
    return a+b;
}

const f3 = (a,b) => {
    return a-b;
}

console.log(f1(1,2));
console.log(f3(x,y));

const sw = function (name) {
    switch (name) {
        case 'mark':
            console.log(`hi mark`);
            break;

        case 'Liam':
            console.log('what up');
            break;
    
        default:
            console.log('idk u');
            break;
    }
}

sw('liam');