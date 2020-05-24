'use strict';

/**
 * Функция разделяет число от 0 до 999 на единицы, десятки и сотни.
 * @param {Number} num входной параметр. Число от 0 до 999
 * @returns {Object} возвращается объект
 */
function NumberObject(num) {
    if ((0 <= num <= 999) && Number.isInteger(num) && !Number.isNaN(num)) {
        this.units = Math.floor(num % 10);
        this.tens = Math.floor((num % 100) / 10);
        this.hundreds = Math.floor(num / 100);
    } else { console.log('Входным параметром должно быть целое число от 0 до 999') }
    return this;
}

console.log(new NumberObject(332));