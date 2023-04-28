import Board from './board.js';
import Snake from './snake.js';

class Game {
    constructor() {
        this.setupBrowser();
        this.snake = new Snake(100, 100);
        this.board = new Board(this.snake);
        this.continueGame = true;
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
            this.checkForLoss();
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

    checkForLoss() {
        this.snake.checkBorderHit();
        this.snake.checkSelfHit();
    }
}

export default Game;
