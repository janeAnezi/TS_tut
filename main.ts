//***********  TYPE BASICS ********** 

const age = 32;
const PName = 'ajebo nwa';
const input = document.querySelectorAll('input');
console.log(PName);

let friend = 'angela'
// friend = 20 type 'number' is not assignable to a type 'string'

input.forEach(input => console.log(input));

const calc = (dia: number) => {
    return dia * Math.PI
}

console.log(calc(8));

//***********  OBJECTS AND ARRAYS ********** 

// ***** ARRAYS
let members = ['julie', 'adiel', 'hapie']
members.push('ajebo')
//members.push(2)
//members[2] = 4

let ages = [19, 13, 26, 11]
ages.push(21)
//ages.push('new')
//ages[0] = true

let random = [ 23, 'ivana', true, 30]
random.push('olive')
random[0] = 16
random.push(false)

// ***** OBJECTS
let character = {
    agent: 'joe',
    age: 40,
    isSingle: true
}

character.agent = 'adam'
character.age = 22
character.isSingle = false
//character.agent = 20
//character.age = '25'
//character.isSingle = 'yes'

character = {
    agent: 'james',
    age: 26,
    isSingle: false
}

// character = {
//     person: 'kings',
//     age: 11,
//     occupation: 'teacher'
// }

//***********  Explicit types********** 

let personAge: number;
let isComing: boolean;
let personName: string;

personAge: 55;
isComing: false;
personName: "asa bekee";


// explicit Arrays
let fruits: string[] = []
fruits.push('banana')

let traineesAge: number[]
traineesAge = [10, 34,23]

// union types
let characters: (string|number|boolean)[] = []
characters.push(50);
characters.push('single');
characters.push('false')

let spec: string|boolean;
spec = 'single';
spec = true

// explicit objects
let techies: object;
techies = {name: "blessing", age: 11}
techies = [];

let newTechies: {
    nameT: string,
    ageT: number,
    color: string
}

newTechies = {nameT: "abram", ageT: 20, color: 'white' }