"use strict";

console.log('arr' + ' - object'); //arr - object
console.log(4 + ' - object'); //4 - object
console.log(4 + +' - object'); //NaN (not a number)
console.log(4 + +'5'); //9    ("+" перед "5" перетворює стрінг в інт і називається унарним плюсом)

let incr = 10,
    decr = 10;

console.log(incr++); //10
console.log(decr--); //10

console.log(++incr); //11
console.log(--decr); //9

incr++;
decr--;

console.log(incr); //11
console.log(decr); //9

console.log(5%2); //залишок від ділення 5/2=4 5-4=1

console.log(2*4 == 8); //true
console.log(2*4 == '8'); //true

console.log(2*4 === 8); //true
console.log(2*4 === '8'); //false (бо тип стрінг, а це строге порівняння)

const isChecked = true,
        isClose = true,
        isOpen = false;

console.log(isChecked && isClose); //true (1*1=1)
console.log(isChecked || isClose);  //true (1+1=1)
console.log(isOpen && isClose); //false (0*1=0)
console.log(isOpen || isClose); //true  (0+1=1)
console.log(!isClose); // false 1->0

console.log(2+2*2 === 8); //false, бо виходить 6
console.log(2+2*2 != 8); //true, бо 6 не дорівнює 8

console.log(2+2*2 != 6); //false, бо 6 дорівнює 6, а це неправда
console.log(2+2*2 !== '6'); //true, бо порівняння строго по типу 6 "цифра" це не 6 "рядок" і це правда
