'use strict'

/**
 * В зависимости от числа, возвращает слово рубль в правильном падеже.
 * @param {number} amount число
 * @returns {number} рубль, рублей, рубля, NaN (если входным параметром не было число)
 */
function rubleCase(amount) {
    switch (amount) {
        case /([5-9,0]$)|([1][0-4]$)/gm.test(amount): // если число заканчивается на 5, 6, 7, 8, 9, 0, 11, 12, 13, 14
            return 'рублей';
            break;
        case /[1]$/gm.test(amount): // если число заканчивается на 1
            return 'рубль';
            break;
        case /[2-4]$/gm.test(amount): // если число заканчивается на 2, 3, 4
            return 'рубля';
            break;
        default:
            return NaN; // если в качестве аргумента передали не число
            break;
    }
}

let amount = prompt('Какую сумму зачислить?');
if (Number(amount)) {
    alert(`Ваша сумма ${rubleCase(amount)} успешно зачислена`);
} else alert('Введите число');