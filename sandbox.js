// regular function
// const calcArea = function (radius) {
//     return 3.14 * radius ** 2;

// };

//arrow function - функция стрелы проще в создании и и более короткий способ написания по сравнению с регулярной функцией
const calcArea = (radius, something) => 3.14 * radius ** 2; /*если у нас 1 параметр, скобки () не нужны, если больше, то нужны, так же не нужнжы {} если у нас однострочное выражение, и нам не нужно ключевое слово return, т.к. оно и так будет действовать автоматически*/
const area = calcArea(5);
console.log('area is', area);




//practise arrow function
//1
const greet = function () {
    return 'hello, world';
};

const greet = () => 'hello,world';
const result = greet();
console.log('result is:', result)




//2
const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}


const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));


