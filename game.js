import Board from './board.js';
import Snake from './snake.js';

class Game {
    constructor() {
        this.setupEventListeners();
        this.snake = new Snake(100, 100);
        this.board = new Board();
        this.continueGame = true;
    }

    playGame() {
        while(this.continueGame) {

        }
    }

    setupEventListeners() {
        document.addEventListener('keydown', handleKeyboardEvents);
    }

    handleKeyboardEvents(event) {
        let code = event.code;
        // Prevent user from moving the browser window with the arrow keys or space
        if (["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(code) > -1) {
            event.preventDefault();
        }
    
        this.snake.move(code);
    }

}

export default Game;
