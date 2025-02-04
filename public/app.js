"use strict";
console.log('test');
console.log('test001');
//*********** Functions ********** 
let calcFunc;
//calcFunc = 23
calcFunc = () => {
    console.log('Welcome Again');
};
calcFunc();
let sum = (num1, num2, num3, num4 = 45) => {
    console.log(num1 + num2);
    console.log(num3);
    console.log(num4);
};
sum(5, 7);
let minus = (val1, val2) => {
    return (val2 - val1);
};
let result = minus(6, 3);
console.log(result);
let newItem = (uid, item) => {
    console.log(`${item} has the uid of ${uid} `);
};
let greet = (user) => {
    console.log(`${user.name} says hello`);
};
//*********** FUNCTION SIGNATURES ********** 
let salute;
salute = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 + num2;
    }
};
let dateOfBrith;
dateOfBrith = (obj) => {
    console.log(`${obj.name} is ${obj.age} years old`);
};
//***********   THE DOM AND TYPE CASTING ********** 
const anchor = document.querySelector('a');
// TS creates types for every dome element
// if(anchor) {
//     console.log(anchor.href)
// }
console.log(anchor.href);
//anchor.animate
// Type casting
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#tofrom');
const amount = document.querySelector('#tofrom');
