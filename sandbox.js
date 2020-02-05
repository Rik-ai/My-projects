//logical operators - OR || and AND &&

const password = 'p@ssword';

if (password.length >= 12 && password.includes('@')) {
    console.log('that password is a strong');
} else if (password.length >= 8 || password.includes('@') && password.length > 5) {
    console.log(' that password is long enough!');
} else {
    console.log('password is not long enough!');
}

//logical NOT (!)

let user = false; /*если у нас user =false, с помощью (!) мы можем изменить на user=true*/

if (!user) {
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);