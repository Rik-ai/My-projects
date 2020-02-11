const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://gitlab.com/Lakhanin/javascript-lessons/-/commits/master'); /*когда мы хотим изменить адрес первым указываем атрибут который хотим изменить, вторым указываем новое значение которое мы хотим установить в этом атрибуте*/
link.innerText = 'This is my GitLab';


const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green');