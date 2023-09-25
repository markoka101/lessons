const { calculate , isEven, summation, fizzbuzz }  = require('./Operators.js');

//testing even function
describe('isEven test' ,() => {

    test('isEven test 1', ()  =>{
        expect(isEven(4)).toBe(true);
    });

    test('isEven test 2', ()  =>{
        expect(isEven(7)).toBe(false);
    });
});

//testing the calculate function
describe('calculate test', () => {

    test('addition test',()=> {
        expect(calculate(14,7,'+')).toBe(21);
    });

    test('subtraction test',()=> {
        expect(calculate(14,7,'-')).toBe(7);
    });

    test('division test',()=> {
        expect(calculate(14,7,'/')).toBe(2);
    });

    test('multiplication test',()=> {
        expect(calculate(12,7,'*')).toBe(84);
    });
});

//testing summation loop
describe('testing summation', () => {
    test('test 1',() => {
        expect(summation(3)).toBe(6);
    });

    test('test 2',() => {
        expect(summation(17)).toBe(153);
    });
});

//testing fizzbuzz
describe('testing fizzbuzz', () => {

    let fizzbuzzResult = fizzbuzz(40);

    test('test 1', () => {
        expect(fizzbuzzResult[29]).toBe('fizzbuzz')
    });

    test('test 2', () => {
        expect(fizzbuzzResult[8]).toBe('fizz');
    });

    test('test 3', () => {
        expect(fizzbuzzResult[9]).toBe('buzz')
    });

    test('test 4', () => {
        expect(fizzbuzzResult[10]).toBe(11);
    })
});