//Filter Method - обрабатывыет массив и проверяет каждый элемент в нутри функции обратного вызова. Таким образом, эта функция обратного вызова запускается для каждого элемента в массиве, что-то вроде проверки.И если эта проверка пройдет, то она будет держать элемент внутри массива, если он не пройдет, тогда он отфильтрует и удалит его из массива.

const scores = [10, 30, 15, 25, 50, 40, 5];


// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filteredScores);


const users = [
    { name: 'shaun', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: false },
    { name: 'chun-li', premium: true },
];

// const premiumUsers = users.filter((user) => {
//     return user.premium;
// });

// console.log(premiumUsers);

//Упрощённый вариант записи

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);