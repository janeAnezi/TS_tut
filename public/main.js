//***********  TYPE BASICS ********** 
var age = 32;
var PName = 'ajebo nwa';
var input = document.querySelectorAll('input');
console.log(PName);
var friend = 'angela';
// friend = 20 type 'number' is not assignable to a type 'string'
input.forEach(function (input) { return console.log(input); });
var calc = function (dia) {
    return dia * Math.PI;
};
console.log(calc(8));
//***********  OBJECTS AND ARRAYS ********** 
// ***** ARRAYS
var members = ['julie', 'adiel', 'hapie'];
members.push('ajebo');
//members.push(2)
//members[2] = 4
var ages = [19, 13, 26, 11];
ages.push(21);
//ages.push('new')
//ages[0] = true
var random = [23, 'ivana', true, 30];
random.push('olive');
random[0] = 16;
random.push(false);
// ***** OBJECTS
var character = {
    agent: 'joe',
    age: 40,
    isSingle: true
};
character.agent = 'adam';
character.age = 22;
character.isSingle = false;
//character.agent = 20
//character.age = '25'
//character.isSingle = 'yes'
character = {
    agent: 'james',
    age: 26,
    isSingle: false
};
// character = {
//     person: 'kings',
//     age: 11,
//     occupation: 'teacher'
// }
//***********  Explicit types********** 
var personAge;
var isComing;
var personName;
personAge: 55;
isComing: false;
personName: "asa bekee";
// explicit Arrays
var fruits = [];
fruits.push('banana');
var traineesAge;
traineesAge = [10, 34, 23];
// union types
var characters = [];
characters.push(50);
characters.push('single');
characters.push('false');
var spec;
spec = 'single';
spec = true;
// explicit objects
var techies;
techies = { name: "blessing", age: 11 };
techies = [];
var newTechies;
newTechies = { nameT: "abram", ageT: 20, color: 'white' };
