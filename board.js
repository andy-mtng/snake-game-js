import Snake from './snake.js';

class Board {
    constructor(snake) {
        this.snake = snake;
        this.canvas = document.getElementById("game-board");
        this.ctx = this.canvas.getContext("2d");
        this.blockSize = 20;
    }

    drawSnake() {
        const snakeBody = this.snake.getSnakeBody();
        this.ctx.fillStyle = "red";
        for (let segment of snakeBody) {
            this.ctx.fillRect(segment.x, segment.y, this.blockSize, this.blockSize);
        }
    }

    drawFood() {

    }

    clearSnake() {
        const snakeBody = this.snake.getSnakeBody();
        for (let segment of snakeBody) {
            this.ctx.clearRect(segment.x, segment.y, this.blockSize, this.blockSize);
        }
    }
}

export default Board;