'use strict'

/**
 * Сложение двух чисел
 * @param {number} a первый аргумент
 * @param {number} b второй аргумент
 * @throws {Error} если входными параметрами были не числа
 * @returns {number} a+b
 */
function addition(a, b) {
    if (!(Number(a)) || !(Number(b))) {
        throw new Error('Входные параметры должны быть числами')
    }

    return a + b;
}

/**
 * Разность двух чисел
 * @param {number} a уменьшаемое 
 * @param {number} b вычитаемое
 * @throws {Error} если входными параметрами были не числа
 * @returns {number} a-b
 */
function subtraction(a, b) {
    if (!(Number(a)) || !(Number(b))) {
        throw new Error('Входные параметры должны быть числами')
    }

    return a - b;
}

/**
 * Произведение двух чисел
 * @param {number} a множимое 
 * @param {number} b множитель
 * @throws {Error} если входными параметрами были не числа
 * @returns {number} a*b
 */
function multiplication(a, b) {
    if (!(Number(a)) || !(Number(b))) {
        throw new Error('Входные параметры должны быть числами')
    }

    return a * b;
}

/**
 * Частное двух чисел
 * @param {number} a делимое 
 * @param {number} b делитель
 * @throws {Error} если входными параметрами были не числа
 * @returns {number} a-b
 */
function division(a, b) {
    if (!(Number(a)) || !(Number(b))) {
        throw new Error('Входные параметры должны быть числами')
    }

    return a / b;
}

console.log(addition(10, 15));
console.log(subtraction(10, 15));
console.log(multiplication(10, 15));
console.log(division(10, 15));
console.log(division('fs', 15));