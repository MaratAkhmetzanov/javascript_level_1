'use strict'

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} — это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} — чётное число`);
    } else console.log(`${i} — нечётное число`);
}