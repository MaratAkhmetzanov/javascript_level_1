/** Здесь будет храниться информация о счёте игры */
class Score {
    constructor() {
        this.scoreValue = 0;
    }

    /**
     * Увеличение счёта
     */
    increaseScore() {
        this.scoreValue++;
    }

    /**
     * Обнуление счёта
     */
    clearScore() {
        this.scoreValue = 0;
    }
}