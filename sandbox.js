//while loops такой же цикл как и for loops отличие только в синтаксисе
const names = ['shaun', 'mario', 'luigi'];
// let i = 0; /* i - должно существовать в не цикла*/

// while (i < 5) {
//     console.log('in loop:', i)
//     i++;
// }

let i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}