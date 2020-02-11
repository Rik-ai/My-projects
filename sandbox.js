// const content = document.querySelector('p');

// console.log(content.classList); /*можно увидеть класы елемента*/

// content.classList.add('error'); /*добавить класс элементу*/
// content.classList.remove('error'); /*удалить класс элемента*/

// content.classList.add('success');


//Задача: сделать так что бы все строки содержащие error получили клас error, а все строки содержащие success получили клас success

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    //console.log(p.textContent);/*.innerText показывает только видимый текст в элементе, по этому надо использовать .textContent*/
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if (p.textContent.includes('success')) {
        p.classList.add('success');

    }
})
//переключение класов toggle

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test'); /*если запустить повторно, то он удаляется*/