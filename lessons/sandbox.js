//у нас есть массив объектов javascript, и мы хотим превратить его в строку json. В объекте json есть метод с именем stringify.

const todos = [
    { text: 'play mariokart', author: 'shaun' },
    { text: 'buy some milk', author: 'mario' },
    { text: 'kill some people', author: 'luigi' }
];


//console.log(JSON.stringify(todos)); И теперь мы можем видеть, что это одна гигантская строка, которая выглядит как массив объектов.

localStorage.setItem('todos', JSON.stringify(todos)); //теперь смотрим в Application
const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));//JSON.parse превратит JSON масив в обычный масив