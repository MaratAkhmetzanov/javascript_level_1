'use strict'

/**
 * Сложение двух чисел
 * @param {number} a первый аргумент
 * @param {number} b второй аргумент
 * @returns {number} a+b
 */
function addition(a, b) {
    return a + b;
}

/**
 * Разность двух чисел
 * @param {number} a уменьшаемое 
 * @param {number} b вычитаемое
 * @returns {number} a-b
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Произведение двух чисел
 * @param {number} a множимое 
 * @param {number} b множитель
 * @returns {number} a*b
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Частное двух чисел
 * @param {number} a делимое 
 * @param {number} b делитель
 * @returns {number} a-b
 */
function division(a, b) {
    return a / b;
}

/**
 * 
 * @param {number} arg1 первый аргумент
 * @param {number} arg2 второй аргумент
 * @param {String} operation сложение, вычитание, произведение, деление
 * @returns {number} результат операции. Если ввели несуществующую операцию, то null
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return addition(arg1, arg2);
            break;
        case 'вычитание':
            return subtraction(arg1, arg2);
            break;
        case 'произведение':
            return multiplication(arg1, arg2);
            break;
        case 'деление':
            return division(arg1, arg2);
            break;
        default:
            return null;
    }
}