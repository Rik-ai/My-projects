/*понятия переменных в JS  даёт нам возможность хранить значение как число или имя и потом использовать его всякий раз как захотим*/
let age = 25; /*let создаёт переменную, age имя переменной, значение переменной хранится в памяти и мы можем его использовать только указав имя переменной*/
let year = 2020;

console.log(age, year); /*console.log выводит переменную из редактора кода в консоль браузера. Можно дублировать эту строку для отдельного указания с начала одной переменной, потом другой, но так же можно указывать их через запятую*/

age = 30; /*для изменения значения переменной достаточно указать имя и новое значение, нет необходимости указывать let*/
console.log(age);

const points = 100; /*const создаёт переменную с не изменным значением*/
console.log(points);

var score = 75; /*старый способ создания переменной, до появления const*/
console.log(score);

//Ограничения
/*1)имя переменной должно быть одним целым словом, если необходимо использовать два слова, то между ними не должно быть пробела и второе слово как правило начинается с болльшой буквы*/
/*2)имя переменной может начинатся с букв, подчёркивания, знака доллара, но не может начинатся с цифер*/
/*3)некоторые слова в JS зарезервированы и их нельзя использовать как имена переменных к примеру (let и const (let const - не возможное сочетание))*/

//Типы данных в JS

/*Number/Числа (1, 2, 3, 100, 3.14)

String/Строки ( 'hello world' "ivan@gmail.com" идут в кавычках)

Boolean/Логические значения (true / false)

Null/Ноль (нужен для того что бы сказать что переменная не имеет значения, что бы создать переменную но сказать, что она равна нулю или не имеет ценности)

Undefined/Неопределённый (Тип данных который даётся переменным автоматически браузером которые ещё не были определены)

Object/Обьекты (сложные структуры данных которые могут иметь различные свойства и функции и могут выполнять различные вещи)

Symbol/Символы (используются в месте с обьектами)*/

//stings

console.log('hello, world');

let email = 'ivan@gmail.com';  /*можно хранить строки внутри переменных*/
console.log(email);

//string concatenation - обьединение строк

let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName; /*это обьединение строк, но между именами не будет пробела, так что можно добавить и его*/
console.log(fullName);

//getting characters - извлечение свойства

console.log(fullName[0]); /*с помощью [] можно извлеч один символ из нашей строки которую мы имеем, указываем 0 т.к. в JS отсчёт наченается с нуля, т.е. ноль это первый символ*/

//string length - длинна строки

console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase()); /*.toUpperCase() - имя метода который делает все буквы заглавными*/
let result = fullName.toLowerCase(); /*.toLowerCase() - имя метода который делает все буквы маленькими*/
console.log(result);


let index = email.indexOf('@'); /*метод который собирается найти позицию определённого символа в нутри этой ('ivan@gmail.com') строки ('@' в данном случае называетсяя аргументом)*/
console.log(index);




//закоментить всё что выше))



//common string methods

let email = 'ivan.navnav@gmail.com';
let result = email.lastIndexOf('n'); /*находит последнее положение конкретного символа в этой строке*/
let result = email.slice(0, 10); /*можем отрезать кусок от строки, первое значение откуда хотим начать резать, второе до куда*/
let result = email.substr(4, 7); /*очень похоже на slice, первое значение откуда хотим начать резать, второе на сколько символов от первого значения хотим отрезать*/
let result = email.replace('v', 'a'); /*берёт первый символ (v) указанный в первом значении, и заменяет символом указанным во втором значении*/

console.log(result);



//закоментить всё что выше))



//Numbes
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operator +, -, *, /, **, % (% - деление с остатком)

console.log(10 / 2);
let result = radius % 3;
let result = pi * radius ** 2;

//order of operation - порядок операций

let result = 5 * (10 - 3) ** 2

console.log(result);



let likes = 10;

likes = likes + 1;

/*сокращённые формы*/

likes++; /*добавить +1*/
likes--; /*отнять -1*/
likes += 10;/*добавить +10*/
likes -= 10;/*отнять -10, аналогично и для других операций */

console.log(likes);

//закоментить всё что выше))

//NaN - not a number 

console.log(5 / 'hello');
console.log(5 / 'hello');

//закоментить всё что выше))


let result = 'the blog has ' + likes + ' likes'; /*добавление числа в строку*/
console.log(result);

//закоментить всё что выше))


//template strings - строка шаблон 

const title = 'Best reads of 2020';
const author = 'Ivan';
const likes = 30;

//concatenation wawy
let result = 'The blog called' + title + ' by' + author + ' has' + likes + ' likes';

//template string way - позволяет ввести переменные прямо в строку не выходя из неё и не обьединяя знаком "+", для этого используется ${...}
let result = `The blog called ${title} by ${author} has ${likes} likes`;

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);


//Object: Arrays (масивы данных)

let ninjas = ['shaun', 'ryu', 'chun-li']; /*масив данных из трёх переменных*/

console.log(ninjas);
ninjas[1] = 'ken' /*переопределяем позицию 1, новым значением*/
console.log(ninjas[1]); /*[1] - что бы из масива данных выбрать второй элемент (в JS отсчёт начинается с нуля)*/



let ages = [20, 25, 30, 35];
console.log(ages[2]);


let random = ['shaun', 'crystal', 30, 20];
console.log(random);


//Array methods

let result = ninjas.join(','); /*берёт массив ninjas и обьединяет все елементы внутри масива в строку и соединяет их с запятой т.е. после каждого элемента будет запятая*/
let result = ninjas.indexOf('chun-li'); /*показывает положение элемента в массиве*/
let result = ninjas.concat(['ken', 'crystal']); /*обьединяет массивы*/
let result = ninjas.push('ken'); /*добавляет новое значение в массив (меняет начальное значение массива (destructive mathod))*/
console.log(ninjas);
let result = ninjas.pop(); /*вырезает посленее значение из массива (меняет начальное значение массива (destructive mathod))*/
result = ninjas.pop();
console.log(ninjas);
console.log(result);





//закоментить всё что выше))






//Null & Undefined


let age = null;

console.log(age, age + 3, `the age is ${age}`);


//Booleans & comparisons
console.log(true, false, 'true', 'false');

//methods can return booleans

let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result = emal.includes('@'); /*смотрит есть ли в строке заданный элемент*/\
let result = names.includes('crystal');

console.log(result);

//comparison operators

let age = 25;
console.log(age == 25); /* == - говорит что возраст равен 25*/
console.log(age == 30);
console.log(age != 30); /* != - говорит что возраст НЕ равен 30*/
console.log(age > 25); /* > - говорит что возраст больше 25*/
console.log(age < 25); /* < - говорит что возраст меньше 25*/
console.log(age <= 25);


let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal'); /*будет true, потому как буква S идёт по счёту в алфавите после C, по этому S считается больше*/
console.log(name > 'Shaun'); /*будет true, так как в JS строчные буквы старше заглавных*/



let age = 25;

//loose comparison (different types can still be equal)/слабое сравнение означает что разные типы всё ещё могут быть равны

console.log(age == 25);
console.log(age == '25'); /* true потому как перед оценкой JS переводит строку в число когда мы используем "=="*/

//strict comparison (different types cannot be equal)

console.log(age === 25);
console.log(age === '25');/*false когда мы используем "===" JS не переводит строку в число */



//type conversion

let score = '100';

score = Number(score); /*превращяет строку в число*/
console.log(score + 1);
console.log(typeof score); /*проверяет тип переменной*/

let result = String(50); /*превращяет число в строку*/
console.log(result, typeof result);

