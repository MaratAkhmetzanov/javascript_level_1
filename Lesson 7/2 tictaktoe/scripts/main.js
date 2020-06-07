'use strict';

window.addEventListener('load', () => {
    const board = new Board();
    const game = new Game();

    game.init(board);

    board.renderBoard();
});