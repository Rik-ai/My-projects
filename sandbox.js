const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);
});


// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', event => {
//         console.log('events in LI');
//         event.stopPropagation();
//         event.target.remove(); /*удаляет елемент на странице когда мы на него нажимаем*/

//     });
// });

ul.addEventListener('click', e => { /*теперь новые теги (li) добавляются так как будто они прописаны в HTML файле*/
    // console.log('events in UL');
    console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});


//ТОЛКОМ НЕ ПОНЯЛ ЭТОТ УРОК