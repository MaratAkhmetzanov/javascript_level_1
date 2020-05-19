'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            '1.jpg',
            '2.jpg'
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            '3.jpg'
        ]
    },
    {
        id: 8,
        price: 78
    }
];

//Проверка, есть ли свойство «photos» и пустое ли оно. Если массив пустой, то значение будет 0;
let productsWithPhotos = products.filter(product => ((product.photos) && (product.photos != 0)));
console.log(productsWithPhotos);

//Sort сравнивает свойство price;
products.sort((a, b) => (a.price - b.price));
console.log(products);