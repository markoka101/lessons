//Creating object

/*
Here I am making an object called people
name,age, and 'hobbies and interests' are my keys
the item after the colon is the value
*/
const people = {
    name : 'mark',
    age : 25,
    'hobbies and interests' : 'gamin'
}

/*
these are two different ways to access the value of the key in the object
*/
//dot notation
console.log(people.name);
//bracket notation
console.log(people['name']);

//since this key has spaces I have to use bracket notation to access the value
console.log(people['hobbies and interests']);

//Looping through object

/*
Here I use a for-in loop
k represents the key element of the people object
*/
for (let k in people) {
    console.log(k);
    console.log(people[k]);
}

//Here I am creating a new object called user
const user = {
    username : 'me',
    password : 'password123'
}
console.log(user);

/*
I am adding a new property to the user object
email is the key and myemail@gmail.com is the value
*/
user.email = 'myemail@gmail.com'
console.log(user);

/*
Here I am deleting the password property
This will delete the key password and the value password123
*/
delete user.password;
console.log(user);


//Destructuring object
/*
Here I am destructuring user
This means I am unpacking the properties to these variables
Any changes to the variables will not affect the object
*/
const {
    username, password
} = user


//Class

/*
Here I am creating a class called player
Notice that the P is capitalized. This is the naming conventions for classes
Classes serve as a blueprint to create objects
*/
class Player {

    /*
    Every class needs a constructor
    This sets the properties by setting the input to the corresponding keys
    */
    constructor(name,level,money) {
        this.name = name;
        this.level = level;
        this.money = money;
    }

    /*
    Unlike plain objects we can add functions into classes
    This function sets the new value of money to itself - cost
    */
    spend(cost) {
        this.money -= cost;
    }
}

/*
Here I am able to create two Player objects by setting the variable to a new instance of the class
By saying new I am making a new object of type player
*/
const p1 = new Player('grevorian', 5, 200);
const p2 = new Player('orgoth', 3, 500);
console.log(p1);
console.log(p2);

//Here I use the built in spend function from player
p1.spend(75);
console.log(p1);

//Inheritance
/*
I am making a new class called wizard which extends the Player class
Since Wizard is also a player we want to have the functions from the Player class
A good way to think about it is like this:
    Every wizard is a player, but not every player is a wizard
So instead of adding more specific functions into the player class, we create a new class
*/
class Wizard extends Player {

    /*
    Here the contructor takes the Player properties with unique ones
    I use super to call the constructor from the Player class
    */
    constructor(name,level,money,staff,ability) {
        super(name,level,money);
        this.staff = staff;
        this.ability = ability;
    }

    //A plain Player object will not have access to cast, but a wizard will
    cast() {
        console.log(`player casts ${this.ability}`);
    }
}

const play1 = new Wizard('yrod', 5, 2000, 'cool', 'fire  ball');
console.log(play1);

//Here I am able to use the function from Player even though I didn't write it in the Wizard class
play1.spend(20);
console.log(play1);

//We use the cast function which is unique to wizards
play1.cast();

/*
Here I create a class called Tank
Both Tank and Wizard are players, but they also have their unique functions
*/
class Tank extends Player {
    constructor(name,level,money,weapon,shield) {
        super(name,level,money);
        this.weapon = weapon;
        this.shield = shield;
    }

    attack() {
        console.log(`${this.name} smacks the enemy with ${this.shield}`);
    }
}

const play2 = new Tank('plift', 90, 5, 'swormd', 'woomd shielmd');
console.log(play2);

play2.attack();