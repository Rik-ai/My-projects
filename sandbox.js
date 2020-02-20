const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //первый аргумен это тип запроса, второй аргумент это откуда мы хотим получить запрос, конечная точка откуда хотим получить данные
request.send();