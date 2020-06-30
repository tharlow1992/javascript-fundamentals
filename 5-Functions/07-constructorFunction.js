let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Nicolas',
    age: 40,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false
}

//let person1 = createPerson('Macy', 24, true);

//function createPerson (name, age, canVote) {
//let person = {
//        name: name,
//        age: age,
//        canVote: canVote
//    }

//    return person;
//}


function Person (name, age, canVote) {
    this.name = name;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => `Hello, my name is ${ this.name }`;

    return 'abc'
}

// Instances of a person object
let macyJones = new person('Macy', 24, true);
let sseth = new person('Seth', 54);
let troy = new person1('Troy', 12);

console.log( sseth.greeting() )
console.log(troy.greeting() )

console.log(macyJones instanceof person);





