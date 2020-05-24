'use strict';

let renderer = {

    map: '',

    /**
     * Отображает состояние игры в консоли.
     */
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if ((player.x === row) && (player.y === col)) {
                    this.map += 'X ';
                } else {
                    this.map += 'o ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    /**
    * Очистка консоли и карты
    */
    clear() {
        console.clear();
        this.map = '';
    }
};