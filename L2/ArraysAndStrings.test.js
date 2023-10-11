const {evenSet,vowelArr,isPalindrome,repeatingLetters} = require('./ArraysAndStrings');

//testiing evenSet function
describe('evenSet test', () => {

    test('evenSet test 1', () => {
        let nums = [1,2,44,7,9];
        expect(evenSet(nums)).toStrictEqual([2,44]);
    });

    test('evenSet test 2', () => {
        let nums = [3,9,17];
        expect(evenSet(nums)).toStrictEqual([]);
    });

    test('evenSet test 3', () => {
        let nums = [-8,9,7,2];
        expect(evenSet(nums)).toStrictEqual([-8,2]);
    });
});

//testing vowelArr function
describe('vowelArr test', () => {

    test('vowelArr test 1', () => {
        expect(vowelArr('pry the door open')).toStrictEqual(['the', 'door', 'open']);
    });
    
    test('vowelArr test 2', () => {
        expect(vowelArr('cars go skrt skrt')).toStrictEqual(['cars','go']);
    });

    test('vowelArr test 3', () => {
        expect(vowelArr('psss psss kitty psss')).toStrictEqual(['kitty']);
    });
});

//testing isPalindrom function
describe('isPalindrome test', () => {

    test('isPalindrome test 1', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('isPalindrome test 2', () => {
        expect(isPalindrome('racecars')).toBe(false);
    });

    test('isPalindrome test 3', () => {
        expect(isPalindrome('palindrome')).toBe(false);
    });
    
});