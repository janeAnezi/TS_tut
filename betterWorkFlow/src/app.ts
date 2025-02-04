console.log('test')
console.log('test001')

//*********** Functions ********** 

let calcFunc: Function;
//calcFunc = 23
calcFunc = () => {
 console.log('Welcome Again')
}
calcFunc()
let sum = (num1: number, num2: number, num3?: number | string, num4: string | number = 45) => {
    console.log(num1 + num2);
    console.log(num3);
    console.log(num4 );
}
sum(5, 7)

let minus = (val1:number, val2:number) => {
    return (val2 - val1);
}

let result = minus(6,3)
console.log(result);

//*********** TYPE ALIASES ********** 
type stringOrNum = string | number;

let newItem = (uid: stringOrNum, item: string) => {
    console.log(`${item} has the uid of ${uid} `)
}

let greet = (user: {name: string, item: stringOrNum}) => {
    console.log(`${user.name} says hello`)
}

//*********** FUNCTION SIGNATURES ********** 
let salute : (first: string, sec: string) => void;
salute = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (numOne: number, numTwo: number, action: string)=> number;
calc = (num1: number, num2: number, action: string)=>{
    if(action === 'add') {
        return num1 + num2
    }else {
       return num1 + num2
    }
}

type person = {name: string, age: number};
let dateOfBrith: (obj: person) => void;
dateOfBrith = (obj: person)=> {
    console.log(`${obj.name} is ${obj.age} years old`);
}


//***********   THE DOM AND TYPE CASTING ********** 
const anchor = document.querySelector('a')!;
// TS creates types for every dome element

// if(anchor) {
//     console.log(anchor.href)
// }
 console.log(anchor.href);
 //anchor.animate

 const form = document.querySelector('.new-item-form') as HTMLFormElement; // Type casting
 console.log(form.children);
 