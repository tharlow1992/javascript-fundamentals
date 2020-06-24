// booleans
let isOn = true;

let isRaining = false;

// NULL
let empty = null;

// Undefined
let undef = undefined;
console.log(undef);

let whatAmI;
console.log(whatAmI);

// Numbers

let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999; //this is 15 9's
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; //this is 16 9's
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 +10) / 10;
console.log(numbersAreHard);

let created = Number('123'); // Turn 123 into the number 123
console.log(created);

let abc = Number('z');
console.log(abc)


//Strings
let stringOne = "doubleydoos";
let stringTwo = 'singLeydoos';

let first = 1050 + 100;
let second = '150' + 100;
let third = 1050 + '100';
let last = '1050' + '100';

console.log(first, second, third, last);

let firstName = "Tyler";
let lastName = "Harlow";

console.log(firstName + " " + lastName);

// escape characters
let myMessage = '\\don\'t do this\\'
console.log(myMessage);


// objects

let frodo = {
    race: 'Hobbit',
    rings: 1,
    cloak: true,
    primaryWeapon: {
        name: 'sting',
        attack: 30,
        damage: false
    },
    damage: 'poison',
    hunger: 5,
};

console.log(typeof frodo);

// Array

let groceryList = [
    'banana',
    'kiwi', 
    'coconut',
    21
];

let aThing = [23, {isOn: true, electricity: 'AC'}, ['wallaby']];

console.log(aThing instanceof Array);

// STRINGS: methods

let userTitle = "            a DaY in tHE LIfe of dev";
console.log(userTitle.toUpperCase());
console.log(userTitle.trim());
console.log(userTitle.includes('in'));

