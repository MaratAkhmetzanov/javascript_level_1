'use strict';

let mover = {

    /**
     * Получение новых координат игрока
     * @returns {{x:Int, y:int}} Возвращает новые координаты игрока на основе нажатой клавиши на Numpad
     */
    getNextPosition(key) {
        const nextPosition = {
            x: player.x,
            y: player.y
        }

        switch (key.code) {
            case 'Numpad1':
                nextPosition.y--;
                nextPosition.x++;
                break;
            case 'Numpad2':
                nextPosition.x++;
                break;
            case 'Numpad3':
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 'Numpad4':
                nextPosition.y--;
                break;
            case 'Numpad6':
                nextPosition.y++;
                break;
            case 'Numpad7':
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 'Numpad8':
                nextPosition.x--;
                break;
            case 'Numpad9':
                nextPosition.y++;
                nextPosition.x--;
                break;
        }

        if (nextPosition.x >= config.rowsCount) {
            nextPosition.x--;
        }

        if (nextPosition.y >= config.colsCount) {
            nextPosition.y--;
        }

        if (nextPosition.x < 0) {
            nextPosition.x++;
        }

        if (nextPosition.y < 0) {
            nextPosition.y++;
        }

        return nextPosition;
    }
};