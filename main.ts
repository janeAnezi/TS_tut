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

