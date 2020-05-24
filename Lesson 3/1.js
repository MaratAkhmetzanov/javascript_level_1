'use strict';

let i = 2;
let j = 0;

while (i < 100) {
    j = i - 1;
    while (j > 0) {
        if (i % j == 0) {
            break;
        }
        j--;
    }
    if (j == 1) {
        console.log(i);
    }
    i++;
}
