//constructor functiond
//Tак мы создаем конструкцию функции для создания новых объектов без использования класса.
function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = function () {
        console.log(`${this.username} has logged in`)
    };
}

// class User {
//     constructor(username, email) {
//         //set up properties
//         this.username = username;
//         this.email = email;
//     }
// }

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');

console.log(userOne, userTwo);
userOne.login();
