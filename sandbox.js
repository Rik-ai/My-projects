const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();/*страница не обновляется при нажатии на кнопку*/
    // console.log(username.value);/*выводит в консоли юсернейм*/
    console.log(form.username.value);/*можно так написать быстрее так как у нас в теге form находится input с id=username, так же допустим можно изменить id на name=username, будет работать так же*/
});