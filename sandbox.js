// functionn declaration - мы можем опстить эту функцию под её вывод (greet), но она всё равно будет выполнятся, так как JS поднимает её на верх, в этом и разница между functionn declaration и function expression, т.к. последняя не будет так работать
function greet() { /*greet - просто название функциии*/
    console.log('hello there');
}


//function expression
const speak = function () { /*функция выражения, когда мы храним функцию внутри переменной.*/
    console.log('good day');
};


// greet();
// greet();
// greet();


speak();
speak();
speak();
speak();