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
let result = minus(6, 13);
console.log(result);
