// callbacks & foreach


// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     //do something
//     console.log(value);
// });



let people = ['mario', 'lluigi', 'rui', 'shaun', 'chun-li'];
//foreach - метод который перебирает массив как цикл

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
};
people.forEach(logPerson);


/*то же самое что и выше*/
people.forEach((person, index) => { /*callback функция в нутри foreach функции*/
    console.log(index, person);

});