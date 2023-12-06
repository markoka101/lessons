const prompt = require('prompt-sync')({sigint:true});

/*

This program will allow a user to keep track of player stats
They must be able to create the Player, edit the Player, and see all the players
while there are only 3 features required, I encourage you to add some of your own features

*/

/*
Complete the Player class
The required properties are name,wins,losses
There needs be two functions to increment wins and losses
Feel free to add more properties and functions if you can
*/
class Player {}

//Array to hold the playerList
const playerList = [];

/*
The while loop will keep this program running unless the user chooses to quit
Once the variable quit is true the loop will stop thus ending the program
*/
let quit = false;
while(!quit) {

    console.log("\nEnter 1 to check player stats\nEnter 2 to add a new player \nEnter 3 to edit a player's stats \nEnter 4 to quit the program");
    let option = Number(prompt("Input >> "));


    switch(option) {
        case 1:
            displayPlayers();
            break;
        case 2:
            addPlayer();
            break;
        case 3:
            editPlayer();
            break;
        case 4:
            quit = true;
            break;
        default:
            console.log('\nPlease enter a valid option');
            break;
    }
}

/*
This function will create the player and add it to the playerStats array
You must take input from the user to create the Player
Important wins/losses MUST BE NUMBERS 
you can use isNaN(variable) to check if the input is a number
*/
function addPlayer() {}

/*
This function will allow the user to edit a player
You must take the input from the user to find the player and increment wins or losses
*/
function editPlayer() {}

/*
This function will display all the players 
It should show name,winsm and losses
*/
function displayPlayers() {}