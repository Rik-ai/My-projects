//store data in local storage
//что бы посмотреть локальное хранилище в консоли браузера прописываем localStorage
localStorage.setItem('name', 'mario'); //1й аргумент - имя ключа 2й аргумент - значение
localStorage.setItem('age', 50);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

//updating data

localStorage.setItem('name', 'luigi');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);