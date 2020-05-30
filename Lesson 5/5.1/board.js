'use strict';

const board = {
    markup: '',
    letters: 'ABCDEFGH',


    init() {
        for (let i = 0; i <= 8; i++) {
            this.markup += `<div class="board-row">`;
            if (i > 0) {
                this.markup += `<div class="board-id">${9 - i}</div>`;
            } else { this.markup += `<div class="board-id"></div>`; }

            for (let j = 0; j < 8; j++) {
                if (i == 0) {
                    this.markup += `<div class="board-id">${this.letters[j]}</div>`;
                } else if ((i + j) % 2 != 0) {
                    this.markup += `<div class="board-cell white" data-x="${9 - i}" data-y="${j}"></div>`;
                } else { this.markup += `<div class="board-cell black" data-x="${9 - i}" data-y="${j}"></div>`; }
            }
            this.markup += '</div>';
        }

        document.body.insertAdjacentHTML('afterbegin', this.markup);
    },

    addFigures() {
    }
}

board.init();