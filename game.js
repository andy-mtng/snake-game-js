import Board from './board.js';
import Snake from './snake.js';

class Game {
    constructor() {
        this.setupBrowser();
        this.snake = new Snake(100, 100);
        this.board = new Board(this.snake);
        this.board.drawFood();
        this.score = 0;
        this.scoreBoard = document.querySelector('#score-board');
    }

    setupBrowser() {
        document.addEventListener('keydown', this.handleKeyboardEvents.bind(this));
        setInterval(() => {
            this.board.clearSnake();
            this.snake.move();
            if (this.snake.detectFoodEaten(this.board.getFood())) {
                this.increaseScore();
                this.board.createNewFood();
            }
            if (this.isLoss()) {
                alert("you lose!");
                this.reset();
            }
            this.board.drawSnake();
        }, 60);
    }

    handleKeyboardEvents(event) {
        let code = event.code;
        // Prevent user from moving the browser window with the arrow keys or space
        if (["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(code) > -1) {
            event.preventDefault();
        }
        this.snake.updateMovementDirection(code);
    }

    increaseScore() {
        this.score += 1;
        this.scoreBoard.textContent = `Score: ${this.score}`;
    }

    isLoss() {
        if (this.snake.checkBorderHit()) {return true}
        if (this.snake.checkSelfHit()) {return true}
        return false;
    }

    reset() {
        console.log('reset');
        this.resetScore();

        this.board.clearBoard();

        this.snake = new Snake(100, 100);
        this.board = new Board(this.snake);
        this.board.drawSnake();
        this.board.createNewFood();
    }

    resetScore() {
        this.score = 0;
        this.scoreBoard.textContent = `Score: ${this.score}`;
    }
}

export default Game;
