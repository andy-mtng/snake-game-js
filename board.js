import Food from './food.js'

class Board {
    constructor(snake) {
        this.snake = snake;
        this.food = new Food();
        this.canvas = document.getElementById("game-board");
        this.ctx = this.canvas.getContext("2d");
        this.blockSize = 20;
    }

    drawSnake() {
        const snakeBody = this.snake.getSnakeBody();
        this.ctx.fillStyle = "white";
        for (let segment of snakeBody) {
            this.ctx.fillRect(segment.x, segment.y, this.blockSize, this.blockSize);
        }
    }

    drawFood() {
        console.log("drawFood()");
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(
            this.food.getX(), 
            this.food.getY(), 
            this.blockSize, 
            this.blockSize);
    }

    clearSnake() {
        const snakeBody = this.snake.getSnakeBody();
        for (let segment of snakeBody) {
            this.ctx.clearRect(segment.x, segment.y, this.blockSize, this.blockSize);
        }
    }

    clearFood() {
        this.ctx.clearRect(this.food.getX(), this.food.getY(), this.blockSize, this.blockSize);
    }

    clearBoard() {
        this.clearSnake();
        this.clearFood();
    }

    createNewFood() {
        this.food = new Food();
        this.drawFood();
    }

    getFood() {
        return this.food;
    }
}

export default Board;