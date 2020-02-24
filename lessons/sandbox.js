//Prototype Model

function User(username, email) {
    this.username = username;
    this.email = email;

}

User.prototype.login = function () {
    console.log(`${this.username} has logged in`)
};

User.prototype.logout = function () {
    console.log(`${this.username} has logged out`)
};
//Prototypal Inheritance
function Admin(username, email, title) {
    User.call(this, username, email)/*Первый аргумент будет контекстом того, чему будет соответствовать ключевое слово this внутри функции конструктора пользователя.
    Теперь мы хотим, чтобы ключевое слово this внутри, когда мы вызывали его от администратора, было новым объектом, который мы только что создали, когда говорим new admin.
    Теперь внутри функции администратора, которая является именно этим, мы можем передать это в качестве первого аргумента для ссылки на объект, который мы только что создали, затем, когда мы вызываем user, this внутри конструктора пользователя будет равен тому, что мы передаем, в котором есть новый объект, который мы создали, когда мы сказали новый администратор. Cледующие аргументы - это фактические параметры, которые мы должны принять(username, email) .*/
    this.title = title;
}

Admin.prototype = Object.create(User.prototype); //копирует методы из Username

Admin.prototype.deleteUser = function () {
    //delete a user
};

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const userThree = new Admin('shaun', 'shaub@gmail.com', 'Superman');

console.log(userOne, userTwo, userThree);
userOne.login();
userOne.logout();