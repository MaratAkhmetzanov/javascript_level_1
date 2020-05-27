'use strict';

let game = {

    /**
     * Запуск игры
     */
    run() {
        document.addEventListener('keydown', this.moveNextPosition);
    },

    /**
     * Перемещение позиции игрока
     * @param {*} key 
     */
    moveNextPosition(key) {
        const nextPoint = mover.getNextPosition(key);
        renderer.clear();
        player.move(nextPoint);
        console.log(player);
        renderer.render();
    },

    /**
     * Инициализация игры
     */
    init() {
        console.log('Положение персонажа показано буквой Х');
        renderer.render();
        console.log('Чтобы начать игру наберите game.run() и нажмите Enter');
    }
};

game.init();