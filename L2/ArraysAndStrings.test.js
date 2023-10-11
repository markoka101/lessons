const {evenSet,vowelArr,isPalindrome,repeatingLetters} = require('./ArraysAndStrings');

//testiing evenSet function
describe('evenSet tests', () => {

    test('test 1', () => {
        let nums = [1,2,44,7,9];
        expect(evenSet(nums)).toStrictEqual([2,44]);
    });

    test('test 2', () => {
        let nums = [3,9,17];
        expect(evenSet(nums)).toStrictEqual([]);
    });

    test('test 3', () => {
        let nums = [-8,9,7,2];
        expect(evenSet(nums)).toStrictEqual([-8,2]);
    });
});

//testing vowelArr function
describe('vowelArr tests', () => {

    test('test 1', () => {
        expect(vowelArr('pry the door open')).toStrictEqual(['the', 'door', 'open']);
    });
    
    test('test 2', () => {
        expect(vowelArr('cars go skrt skrt')).toStrictEqual(['cars','go']);
    });

    test('test 3', () => {
        expect(vowelArr('psss psss kitty psss')).toStrictEqual(['kitty']);
    });
});

//testing isPalindrom function
describe('isPalindrome tests', () => {

    test('test 1', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('test 2', () => {
        expect(isPalindrome('racecars')).toBe(false);
    });

    test('test 3', () => {
        expect(isPalindrome('palindrome')).toBe(false);
    });
});

//testing repeating letters
describe('repeatingLetters tests',() => {

    test('test 1', () => {
        expect(repeatingLetters('cfeeed')).toBe(1);
    });

    test('test 2', () => {
        expect(repeatingLetters('aaapfof')).toBe(2);
    });

    test('test 3', () => {
        expect(repeatingLetters('abcd')).toBe(0);
    });
});