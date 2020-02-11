//Relationship Parents-Child

const article = document.querySelector('article'); /*так как это будет HTMLCollection мы не можем применять forEach, необходимо преобразовать в массив*/
// console.log(article.children);

// Array.from(article.children); /*не обязательно писать отдельными строками, можно сразу в консольлог*/
// console.log(Array.from(article.children));/*это преобразование не деструктивный метод, это новое значение*/
// console.log(article.children);/*проверка, что это всё ещё HTMLCollection*/

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

const title = document.querySelector('h2');

console.log(title.parentElement); /*.parentElement находит родителя элемента*/
console.log(title.parentElement.parentElement); /*находит родителя, елемента родителя(Родитель->родитель->ребёнок)*/

//Siblings - братья и сёстры
console.log(title.nextElementSibling); /*находит следующего ребёнка родителя*/
console.log(title.previousElementSibling);/*находит предыдущего ребёнка родителя*/


//chaining

console.log(title.nextElementSibling.parentElement.children);