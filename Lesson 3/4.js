'use strict'

const products = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
];

products.forEach(function (product) {
    product.price *= .85;
})

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);