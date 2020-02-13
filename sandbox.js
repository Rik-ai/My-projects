//Reduce method

//const scores = [10, 20, 60, 40, 70, 90, 30];


// const result = scores.reduce((acc, curr) => { /*First of all the accumulator then current*/
//     if (curr > 50) {
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);




const scores = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 10 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 50 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 80 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 0 },
    { player: 'crystal', score: 60 },
];

const marioTotal = scores.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);

//не особо понял с acc и curr херово с инглишем)