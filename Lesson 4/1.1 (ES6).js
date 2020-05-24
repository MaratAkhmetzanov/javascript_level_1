'use strict';

class Product {

    /**
     * Конструктор объекта продукта
     * @param {String} name Название продукта
     * @param {Number} price Цена продукта
     */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    /**
     * Применение 25-процентной скидки
     */
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

const product1 = new Product('bag', 5000);

console.log(product1);
product1.make25PercentDiscount();
console.log(product1);