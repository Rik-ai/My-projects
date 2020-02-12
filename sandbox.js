const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();/*страница не обновляется при нажатии на кнопку*/
    // console.log(username.value);/*выводит в консоли юсернейм*/
    console.log(form.username.value);/*можно так написать быстрее так как у нас в теге form находится input с id=username, так же допустим можно изменить id на name=username, будет работать так же*/
});



//testing RegEx
const username = 'dfsshftyh';
/*регулярные выражения пишутся в /  / */
const pattern = /^[a-z]{6,}$/; /*создаём шаблон с параметрами ввода, если в начале и конце параметров поставить ^ и $ то имя не должно содержать лишних символов кроме букв*/

//1й метод
// let result = pattern.test(username);
// console.log(result);

// if (result) {
//     console.log('regex test passed :)');
// } else {
//     console.log('regex test failed :(');

// }


//2й метод

let result = username.search(pattern);
console.log(result)