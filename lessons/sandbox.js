//rest parameter
const double = (...nums) => { //не нужно вводить все аргументы
    //do something
    return nums.map(num => num * 2);
    console.log(nums);
}

const result = double(1, 2, 3, 5, 6, 8, 9, 12, 45, 76, 324, 76, 34, 76);
console.log(result);

//spread syntax (arrays)

const people = ['shaun', 'ryu', 'cristal'];
console.log(...people);
const members = ['mario', 'chun-li', ...people];//можно обьединять массивы
console.log(members)

//spread syntax(objects)

const person = { name: 'shaun', age: 30, job: 'ripper' };
const personClone = { ...person, location: 'kiev' };
console.log(personClone)

