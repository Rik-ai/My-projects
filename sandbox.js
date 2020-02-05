// variable & block scope/переменные и области блока
let age = 30;

//let age = 50; /*так не получится переопределить переменную*/

if (true) {
    //age = 40; /*так мы не переопределяем переменную а просто изменяем её обращяясь к let age = 30; (изменяется в обоих блоках кода)*/
    let age = 40; /*так можно переопределить переменную внутри блока кода, но не снаружи*/
    let name = 'shaun';
    console.log('inside 1st code block: ', age, name); /*мы можем получить доступ к переменной которая находится в глобальной области видимости в не кода*/
    if (true) {
        let age = 50;
        console.log('inside 2st code block: ', age);

    }


}

console.log('outside code block: ', age, name);