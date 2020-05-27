'use strict';

/**
 * Функция разделяет число от 0 до 999 на единицы, десятки и сотни.
 * @param {Number} num входной параметр. Число от 0 до 999
 * @returns {Object} возвращается объект с разрядами или пустой объект, если входное значение не подходит
 */
function NumberObject(num) {
    if ((num <= 999) || (num >= 0) || Number.isInteger(num)) {
        console.log('Входным параметром должно быть целое число от 0 до 999');
    } else {
        this.hundreds = Math.floor(num / 100);
        this.tens = Math.floor((num % 100) / 10);
        this.units = Math.floor(num % 10);
    }
    return this;
}

console.log(new NumberObject(-332));
console.log(new NumberObject(567));
console.log(new NumberObject(6436));