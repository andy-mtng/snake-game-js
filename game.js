import Board from './board.js';
import Snake from './snake.js';

class Game {
    constructor() {
        this.intervalSpeed = 60;
        this.intervalId;
        this.isPaused = false;
        this.setupBrowser();
        this.snake = new Snake(100, 100);
        this.board = new Board(this.snake);
        this.board.drawFood();
        this.score = 0;
        this.scoreBoard = document.querySelector('#score-board');
        this.startInterval();
    }

    setupBrowser() {
        document.addEventListener('keydown', this.handleKeyboardEvents.bind(this));
    }

    startInterval() {
        this.intervalId = setInterval(() => {
            this.board.clearSnake();
            this.snake.move();
            if (this.snake.detectFoodEaten(this.board.getFood())) {
                this.increaseScore();
                this.board.createNewFood();
            }
            if (this.isLoss()) {
                this.pause();
                this.displayLossScreen();
            }
            this.board.drawSnake();
        }, this.intervalSpeed);
    }
      
    pause() {
        // Stop the interval
        clearInterval(this.intervalId);
        this.isPaused = true;
    }

    resume() {
        // Start the interval again
        this.startInterval();
        this.isPaused = false;
    }

    handleKeyboardEvents(event) {
        let code = event.code;
        // Prevent user from moving the browser window with the arrow keys or space
        if (["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(code) > -1) {
            event.preventDefault();
        }
        this.snake.updateMovementDirection(code);
    }

    displayLossScreen() {
        console.log("displayLossScreen()");
        const gameContainer = document.querySelector('#game-container');
        const lossScreen = document.createElement('div');
        const okButton = document.createElement('button');

        lossScreen.textContent = `You lose! Score: ${this.score}`;
        lossScreen.classList.add('loss-screen');
        okButton.textContent = 'OK';
        okButton.classList.add('ok-button');
        lossScreen.appendChild(okButton);
        gameContainer.appendChild(lossScreen);
        okButton.addEventListener('click', () => {
            alert('button clicked');
            lossScreen.remove();
            this.reset();
        });
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

        this.resume();
        
        // this.intervalSpeed = 60;
        // this.updateIntervalSpeed(this.intervalSpeed);
    }

    resetScore() {
        this.score = 0;
        this.scoreBoard.textContent = `Score: ${this.score}`;
    }

    // updateIntervalSpeed(speed) {
    //     clearInterval(this.intervalId);
    //     this.intervalSpeed = speed;
    //     this.intervalId = setInterval(() => {
    //         this.board.clearSnake();
    //         this.snake.move();
    //         if (this.snake.detectFoodEaten(this.board.getFood())) {
    //             this.increaseScore();
    //             this.board.createNewFood();
    //         }
    //         if (this.isLoss()) {
    //             this.displayLossScreen();
    //         }
    //         this.board.drawSnake();
    //     }, this.intervalSpeed);
    // }
}

export default Game;
