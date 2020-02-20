// async & await

const getTodos = async () => {

    const response = await fetch('luigi.json') /*await останавливает JavaScript прямо здесь, не дает присваивать значение переменной response до тех пор, пока promise не будет разрешено после того, как promise будет разрешено, мы можем взять значение из этой функции и присвоить его этой переменной*/
    const data = await response.json();

    return data;

};

/*Сила этого ключевого слова await заключается в том, что, если бы мы захотели, мы могли бы связать воедино многие из этих разных вещей.
Очевидно, вы называли переменные чем-то другим, но мы могли бы связать воедино много разных вещей, которые возвращают обещания.
И тогда мы будем делать их последовательно.
Мы подождем, пока одно обещание будет выполнено, прежде чем подписать его с этим, а затем с другим, прежде чем подписать его с этим и другим.
Так оно и есть.
Каждый шаг по очереди.*/

console.log(1);
console.log(2);

getTodos()
    .then(data => console.log('resolved:', data));

console.log(3);
console.log(4);



// fetch('luigi.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });

