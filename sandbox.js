const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px'); /*у сет атрибут есть недостаток, он перезаписывает полностью свойства элемента*/

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px'; /*используем, что бы добавить свойство элементу*/
title.style.color = 'crimson';
title.style.backgroundColor = 'green';
title.style.fontSize = '40px';
title.style.margin = ''; /*если нужно удалить свойство, просто необходимо поставить пустые кавычки*/