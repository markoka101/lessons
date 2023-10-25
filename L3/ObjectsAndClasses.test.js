const {meToArray,addOccupation,Car,CoolCar} = require('./ObjectsAndClasses');

//Testing me object
describe('Testing the me object and related functions:', () => {
    
    const meArray = meToArray();
    test('Checking name type', () => {
        expect(typeof meArray[0]).toBe('string');
    });

    test('Checking age type', () => {
        expect(typeof meArray[1]).toBe('number');
    });

    test('Checking pet type', () => {
        expect(typeof meArray[2]).toBe('boolean');
    });

    test('Checking addOccupation function', () => {
        const job = 'developer';
        const me = addOccupation(job);
        expect(me.occupation).toStrictEqual(job.toString());
    })
});

//testing Car class
describe('Testing the car class', () => {

    const car = new Car('mazda','cx-3',2018,50000);
    test('Checking properties', () => {
        expect(car.make).toBe('mazda');
        expect(car.model).toBe('cx-3');
        expect(car.year).toBe(2018);
        expect(car.miles).toBe(50000);
    });

    test('Checking drive function', () => {
        car.drive(50000);
        expect(car.miles).toBe(100000);
    });
});

//testing the CoolCar class
describe('Testing the CoolCar class', () => {
    const coolCar = new CoolCar('lada','riva',1979,500000,95,true);

    test('Checking new properties of CoolCar class', () => {
        expect(coolCar.topSpeed).toBe(95);
        expect(coolCar.drift).toBe(true);
    });

    test('Checking that CoolCar extends Car' ,() => {
        coolCar.drive(50);
        expect(coolCar.miles).toBe(500050);
    })
})