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
