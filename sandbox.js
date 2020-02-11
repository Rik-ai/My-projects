// const para = document.querySelector('p');/*мы используем обьект документа всякий раз когда хотим сделать что-то с веб-страницей, по этому с начала идёт (document), за тем метод который мы хотим использовать на этом  обьектк бокумента (.querySelector - метод с помощью которого можно захватить элемент из DOM, таким образом можно захватить первый "р" тег)*/

// console.log(para);

// const para3 = document.querySelector('.error');/* можем захватить элемент с помощью селектора класса*/

// console.log(para3);

// const para4 = document.querySelector('div.error'); /*так как у нас есть несколько класов и дивов, но есть только один див с классом еррор*/

// console.log(para4);

const paras = document.querySelectorAll('p'); /*если мы хотим захватить несколько элементов*/

paras.forEach(para => { /*так же как и в массиве можно использовать стрелочные функции */
    console.log(para);
});

console.log(paras[1]); /*можем как и в случае массива (ЭТО НЕ МАССИВ) выбирать конкретный элемент с помощью [] */


const errors = document.querySelectorAll('.error');

console.log(errors);