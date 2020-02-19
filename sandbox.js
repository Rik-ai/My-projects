// timestamps

const before = new Date('February 1 2020 7:30:25'); //дата создания чего-либо
const now = new Date();

console.log(now.getTime(), before.getTime());


const diff = now.getTime() - before.getTime(); //сколько времени прошло с момента создания
console.log(diff);

const mins = Math.round(diff / 1000 / 60); //перевод милисекунд в минуты
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);


console.log(mins, hours, days);

console.log(`the что-то was created ${days} ago`);


//converting timestamps into date objects

const timestamp = 1675938474990;
console.log(new Date(timestamp));