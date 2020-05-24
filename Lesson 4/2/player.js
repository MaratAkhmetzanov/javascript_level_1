'use strict';

const player = {
    x: 0,
    y: 0,

    /**
     * Двигает игрока в новую позицию.
     * @param {{x: int, y: int}} nextPoint Перенос игрока в следующую позицию
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};