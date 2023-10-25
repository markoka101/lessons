/*
Set the properties for the me object with your name, age, and IF YOU HAVE a pet
The properties will be called name, age, pet
Make sure that each has an appropriate type as a value
*/
const me = {
    name : 'mark', //string
    age : 25, //number
    pet :  true //boolean
};

/*
This function will take the values you set for you objects and add them to an array
From there return the completed array
This will be used for me to test your object and understanding of loops
*/
const meToArray = () => {
    //create array
    let arr = [];

    //loop through the key in me object
    for (let key in me) {

        //push the value of key into the array
        arr.push(me[key]);
    }
    return arr;
}

/*
This function will add a property called occupation and set the value to job
Then return the object
*/
function addOccupation(job) {
    //add new occupation property and set value equal to parameter
    me.occupation = job;
    return me;
}

/*
Complete the class called car
The properties should be make, model, year, and miles
*/
class Car {

    //constructor will set the key values 
    constructor(make,model,year, miles) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    //set miles equal to distance + itself
    drive(distance) {
        this.miles += distance;
    }
}

/*
Complete the class CoolCar
Add two more properties to it
topSpeed and drift
*/
class CoolCar extends Car {

    //create constructor with Car properties and additional properties
    constructor(make,model,year,miles,topSpeed,drift) {

        //call the extended class
        super(make,model,year,miles);

        //set the properties
        this.topSpeed = topSpeed;
        this.drift = drift;
    }
}

module.exports = {meToArray,addOccupation,Car,CoolCar}