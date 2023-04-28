import Board from './board.js';
import Snake from './snake.js';

class Game {
    constructor() {
        this.setupEventListeners();
        this.snake = new Snake(100, 100);
        console.log('New snake', this.snake);
        this.board = new Board(this.snake);
        this.continueGame = true;
    }

    playGame() {
        // while(this.continueGame) {
        //     this.board.drawSnake;
        // }
        console.log("playGame");
        // for (let i = 0; i < 9999; i++) {
        //     this.board.drawSnake();
        // }
    }

    setupEventListeners() {
        document.addEventListener('keydown', this.handleKeyboardEvents.bind(this));
    }

    handleKeyboardEvents(event) {
        let code = event.code;
        // Prevent user from moving the browser window with the arrow keys or space
        if (["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(code) > -1) {
            event.preventDefault();
        }
        this.snake.updateMovementDirection(code);

    }

    // update(code) {
    //     this.snake.updateMovementDirection(code);
    //     this.snake.move();
    //     this.board.drawSnake();
    // }

}

export default Game;
