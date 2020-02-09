const name = 'shaun';


//functions - определены на обьекте или типе данных в самой фнкции

const greet = () => "hello";

let resultOne = greet();
console.log(resultOne);


//methods - определены на обьекте или типе данных

let resultTwo = name.toUpperCase(); /*то же функция только называется методом с использованием точечной записи*/
console.log(resultTwo);