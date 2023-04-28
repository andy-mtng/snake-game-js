import Snake from './snake.js';

class Board {
    constructor(snake) {
        this.snake = snake;
        this.canvas = document.getElementById("game-board");
        this.ctx = this.canvas.getContext("2d");
        this.blockSize = 20;
    }

    drawSnake() {
        console.log("drawSnake");
        const snakeBody = this.snake.getSnakeBody();
        console.log(snakeBody.length);
        console.log(snakeBody);
        this.ctx.fillStyle = "red";
        for (let segment of snakeBody) {
            console.log("for loop");
            this.ctx.fillRect(segment.x, segment.y, this.blockSize, this.blockSize);
        }
    }

    drawFood() {

    }

    clearBoard() {

    }
}

export default Board;