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
