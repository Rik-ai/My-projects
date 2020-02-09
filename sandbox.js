//Objects in Arrays
/*теперь представим блоги не как строки, а как обьекты*/
// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 }, /*первый обьект в массиве*/
//     { title: '10 things to make with marmite', likes: 50 }
// ];

//console.log(blogs);


let user = { /*Это обьект*/
    name: 'crystal', /*Это свойство состоящее из ключа (name) и значения ('crystal')*/
    age: 30,
    email: 'crystal@gmail.com',
    location: 'kyiv',
    blogs: [ /*теперь представим блоги не как строки, а как обьекты*/
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    /*methods*/
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() { /*для того что бы написать код проще можно убрать :function*/
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => { /*this - ключевое слово устанавливает быть обьектом*/
            console.log(blog.title, blog.likes); /*теперь каждый блог представлен как обьект через цикл*/
        })
    }
};

user.logBlogs();
console.log(this);
user.login();
user.logout();

const name = 'mario';
name.toUpperCase();