const ul = document.querySelector('ul');
//ul.remove(); /*удаляет елементы из тега*/


const button = document.querySelector('button');

button.addEventListener('click', () => {
    //1й метод добавления
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li);/* этот метод берёт тег (li) и отправляет его в самый ВЕРХ родителя т.е. когда мы нажимаем на кнопку добавляется новая информация на страницу снизу*/
    ul.prepend(li);/*этот метод берёт тег (li) и отправляет его в самый НИЗ родителя т.е. когда мы нажимаем на кнопку добавляется новая информация на страницу сверху*/

    //2й метод добавления
    //ul.innerHTML += '<li>something new</li>'; /*когда мы нажимаем на кнопку добавляется новая информация на страницу*/
});


const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', event => {

        //event.target.style.textDecoration = 'line-through'; /*позволяет добавить какой либо эффект когда мы нажимаем на кнопку*/
        event.target.remove(); /*удаляет елемент на странице когда мы на него нажимаем*/

    });
});