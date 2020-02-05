//using if statements для того что бы не писать  каждую строку кода отдельно, можно использовать switch
// if(grade ==='A'){

// }else if(grade ==='B'){

// }else if(grade ==='C'){

// }else if(grade ==='D'){

// }else if(grade ==='E'){

// }else {

// }


// switch statements - метод работает только со строками, с числами не работает
const grade = 'C';

switch (grade) {
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade!')
}


