// else if statements

// const age = 25;

// if (age > 20) {
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 3) {

//     console.log("that's a lot of ninjas");
// }

const password = 'p@ssword1234';
/*множественный цикл который проверяет разные условия по порядку*/
if (password.length >= 12) {
    console.log('that password is a strong');
} else if (password.length >= 8) {
    console.log(' that password is long enough!');
} else {
    console.log('password is not long enough!');
}