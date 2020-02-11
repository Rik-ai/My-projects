const para = document.querySelector('p');

//console.log(para.innerText); /* .innerText позволяет получить текст который находится в элементе*/

//para.innerText = 'ninjas are sucks'; /*можно таким образом сменить текст в элементе*/
//para.innerText += ' ninjas are sucks'; /*если мы хотим добавить новый текст к старому надо использовать (+=) и поставить пробел перед новым текстом*/

const paras = document.querySelectorAll('p');
/*можно менять текст сразу в нескольких элементах*/
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML += '<h2> THIS IS NEW H2</h2>'; /*полностью переписывает содержимое элемента и меняет сам элемент*/ 

/*выводим массив имён в шаблон HTML для каждого из них*/
const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});