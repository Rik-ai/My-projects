// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

    if (scores[i] === 0) {
        continue; /*если условие достигнуто, всё равно продолжить цикл*/
    }


    console.log('your score: ', scores[i]);

    if (scores[i] === 100) {

        console.log('congrats, you got a top score!');
        break; /*если условие достигнуто закончить цикл*/
    }

}