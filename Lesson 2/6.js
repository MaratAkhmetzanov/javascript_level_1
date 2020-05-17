'use strict'

/**
 * В зависимости от числа, возвращает слово рубль в правильном падеже.
 * @param {number} amount число
 * @throws {Error} ошибка, если указали нечисловое значение для суммы
 * @returns {number} рубль, рублей, рубля, NaN (если входным параметром не было число)
 */
function rubleCase(amount) {
    if (/([5-9,0]$)|([1][0-4]$)/gm.test(amount)) { // если число заканчивается на 5, 6, 7, 8, 9, 0, 11, 12, 13, 14
        return 'рублей';
    }
    else if (/[1]$/gm.test(amount)) {// если число заканчивается на 1
        return 'рубль';
    }
    else if (/[2-4]$/gm.test(amount)) { // если число заканчивается на 2, 3, 4
        return 'рубля';
    } else throw new Error('Указали нечисловое значение для суммы');
}

let amount = prompt('Какую сумму зачислить?');
if (Number(amount)) {
    alert(`Ваша сумма «${amount} ${rubleCase(amount)}» успешно зачислена`);
} else alert('Введите число');