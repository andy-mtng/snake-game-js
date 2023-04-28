import Board from './board.js';
import Snake from './snake.js';

class Game {
    constructor() {
        this.setupBrowser();
        this.snake = new Snake(100, 100);
        this.board = new Board(this.snake);
        this.continueGame = true;
        this.board.drawFood();
    }

    setupBrowser() {
        document.addEventListener('keydown', this.handleKeyboardEvents.bind(this));
        setInterval(() => {
            this.board.clearSnake();
            this.snake.move();
            this.snake.detectFoodEaten(this.board.getFood());
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

    checkForLoss() {
        this.snake.checkBorderHit()
    }
}

export default Game;
