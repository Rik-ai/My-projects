// Math object


console.log(Math);
console.log(Math.PI);
console.log(Math.E);



const area = 5.5;


console.log(Math.round(area)); /*round - округление числа*/
console.log(Math.floor(area)); /* floor - округляет в меньшую сторону*/
console.log(Math.ceil(area)); /*ceil - округляет в большую сторону*/
console.log(Math.trunc(area)); /*trunc - убирает остаток*/


//random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));