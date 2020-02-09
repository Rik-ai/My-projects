// primitive values


// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// scoreOne = 100; /*когда мы меняем значение одного из примитивных значений, которые хранятся в stack значение второго не меняется*/
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);



//reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);


userOne.age = 40; /*когда мы меняем значение одного из референсных значений которые хранятся в heat, значение второго так же меняется*/
console.log(userOne, userTwo);
