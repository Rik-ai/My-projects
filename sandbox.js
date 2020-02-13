//Chaining Array Methods

const products = [
    { name: 'gold star', price: 30 },
    { name: 'green shell', price: 10 },
    { name: 'red shell', price: 40 },
    { name: 'banana', price: 5 },
    { name: 'mushrooms', price: 50 }
];

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the${product.name} is ${product.price / 2} pounds`);
console.log(promos);