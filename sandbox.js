//object literals


let user = { /*Это обьект*/
    name: 'crystal', /*Это свойство состоящее из ключа (name) и значения ('crystal')*/
    age: 30,
    email: 'crystal@gmail.com',
    location: 'kyiv',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
}

console.log(user);
console.log(user.name); /*получим доступ к свойству name*/


user.age = 35;/*можем изменить или обновить свойство обьекта*/
console.log(user.age);

console.log(user['email']); /*так же можно получить доступ к свойству*/
user['name'] = 'chun-li'; /*так же можем изменить или обновить свойство обьекта*/
console.log(user['name']);