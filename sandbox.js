const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest(); //запрос с сервера

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            /*JavaScript Object Notation превращяет JS обьекты в JSON строки*/
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('coud not fetch data', undefined);
        }
    });

    request.open('GET', resource); //первый аргумен это тип запроса, второй аргумент это откуда мы хотим получить запрос, конечная точка откуда хотим получить данные
    request.send();

};

console.log(1);
console.log(2);
// Называется Callback Hell
getTodos('luigi.json', (err, data) => {
    console.log(data);
    getTodos('mario.json', (err, data) => {
        console.log(data);
        getTodos('shaun.json', (err, data) => {
            console.log(data);
        });
    });
});

console.log(3);
console.log(4);


/*Jason выглядит как массив объектов нам не нужно помещать его в строковый синтаксис, Теперь разница между тем, когда мы пишем объекты Jason и обычные объекты JavaScript, состоит в том, что все наши ключи должны идти в двойных кавычках, а когда мы используем строку в качестве значения, они также должны идти в двойных кавычках.*/