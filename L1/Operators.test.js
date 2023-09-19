const calculate = require('./Operators.js');

test('14  + 7 =21',()=> {
    expect(calculate(14,7,'+')).toBe(21);
})
