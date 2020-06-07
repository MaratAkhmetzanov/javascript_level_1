'use strict';

class Board {
    constructor() {
        this.gameTableElement = document.getElementById('game');
        this.boardValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
    }

    init() {

    }

    /**
    * Вывод ячеек в html.
    */
    renderBoard() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    clearBoard() {
        this.boardValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
    }

    /**
     * Проверка что в ячейку не ставили значение (крестик или нолик).
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если ячейка пуста, иначе false.
     */
    isCellEmpty(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.boardValues[row][col] === '';
    }

    
    /**
     * Заполняет ячейку в которую кликнул пользователь в событии event.
     * @param {Event} event
     * @param {HTMLElement} event.target
     */
    fillCell(event, phase) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        // Заполняем ячейку и ставим значение в массиве, в свойстве boardValues.
        this.boardValues[row][col] = phase;
        event.target.textContent = phase;
    }
}