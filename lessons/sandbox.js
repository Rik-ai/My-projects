//конструктор( типа шаблона) по которому мы создаём новые обьекты

class User {
    constructor(username, email) {
        //set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }
    inScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}
//extend говорит, что хорошо, мы найдем класс User и автоматически унаследуем все методы и свойства от класса User
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
    }
}

//сами обьекты но с разными свойствами
const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const userThree = new Admin('shaun', 'shaun@gmail.com');

console.log(userOne, userTwo, userThree);


// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object


let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);