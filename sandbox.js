//object literals


let user = { /*Это обьект*/
    name: 'crystal', /*Это свойство состоящее из ключа (name) и значения ('crystal')*/
    age: 30,
    email: 'crystal@gmail.com',
    location: 'kyiv',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    /*methods*/
    login: function () {
        console.log('the user logged in');
    },
    logout: function () {
        console.log('the user logged out');
    },
    logBlogs() { /*для того что бы написать код проще можно убрать :function*/
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => { /*this - ключевое слово устанавливает быть обьектом*/
            console.log(blog);
        })
    }
};

user.logBlogs();
console.log(this);
user.login();
user.logout();

const name = 'mario';
name.toUpperCase();