// const button = document.querySelector('button');

// button.addEventListener('click', () => { /*.addEventListener - определяет какое событие происходит*/
//     console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', event => {
        //console.log('item click');
        //console.log(event);
        console.log(event.target); /*.target - определяет какую конкретно мы нажали кнопку*/
        event.target.style.textDecoration = 'line-through'; /*позволяет добавить какой либо эффект когда мы нажимаем на кнопку*/
    });
});