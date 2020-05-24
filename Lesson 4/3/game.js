'use strict';
let game = {
    gameScore: 0,

    run() {
        this.gameScore = 0;
        for (let q = 0; q < questions.length; q++) {
            console.clear();
            console.log(questions[q].question);
            for (let i = 1; i <= questions[q].variants.length; i++) {
                console.log(`Вариант ${i}: ${questions[q].variants[i - 1]}`);
            }
            const playerAnswer = prompt('Введите вариант ответа');
            if (playerAnswer == questions[q].answer) {
                this.gameScore++;
            } else if (playerAnswer == null) {
                break;
            }
        }

        console.clear();
        console.log(`Ваш счёт: ${this.gameScore}`);
        if (confirm('Сыграть ещё раз?')) {
            this.run();
        } else {
            console.log('Спасибо за игру!');
            this.init();
        }
    },

    init() {
        console.log('Введите команду game.run(), чтобы начать игру');
    }
};

game.init();