'use strict'

/**
 * Сложение двух чисел
 * @param {number} a первый аргумент
 * @param {number} b второй аргумент
 * @throws {Error} если входными параметрами были не числа
 * @returns {number} a+b
 */
function addition(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
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
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
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
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
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
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Входные параметры должны быть числами')
    }
    return a / b;
}

/**
 * 
 * @param {number} arg1 первый аргумент
 * @param {number} arg2 второй аргумент
 * @param {String} operation '+', '-', '*', '/'
 * @throws {Error} Если ввели несуществующую операцию
 * @returns {number} результат операции. 
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addition(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        default:
            { throw new Error('Указали непредусмотренну операцию. Доступны только "+", "-", "*", "/"'); }
    }
}

console.log(mathOperation(6, 8, '+'));
console.log(mathOperation(6, 8, '-'));
console.log(mathOperation(6, 8, '*'));
console.log(mathOperation(6, 8, '/'));
console.log(mathOperation(6, 8, 'Сделай бочку'));