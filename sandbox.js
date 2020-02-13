//example 1 - sorting strings - сортирует автоматически строки по алфавиву, деструктивный метод
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();
names.reverse(); /*меняет порядок в массиве на обратный*/
console.log(names);

//example 2 - sorting numbers сортирует числа по возрастанию, но смотрит только на первую цифру в числе
const scores = [10, 50, 20, 5, 35, 70, 45];
scores.sort();
console.log(scores);

scores.sort((a, b) => b - a); /*сортирует числа по убыванию*/
scores.reverse();
console.log(scores);

//example 3 - sorting objects
const players = [
    { name: 'mario', score: 20 },
    { name: 'luigi', score: 10 },
    { name: 'chun-li', score: 50 },
    { name: 'yoshi', score: 30 },
    { name: 'shaun', score: 70 }
];

players.sort((a, b) => {
    if (a.score > b.score) {
        return -1; /*если ТРУ то -1*/
    } else if (b.score > a.score) {
        return 1;/*иначе мы хотим поменять их местами*/
    } else {
        return 0;
    }
});

//короткая запись
players.sort((a, b) => {
    b.score - a.score
});
console.log(players);