class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.snakeBody = [];
        this.initalizeSnakeBody();
        this.blockSize = 20;
        this.movementDirection = "right";
    }

    initalizeSnakeBody() {
        this.snakeBody.push({x: this.x, y: this.y});
    }

    updateMovementDirection(code) {
        if (code === "ArrowUp") {
            this.movementDirection = "up";
        } else if (code === "ArrowDown") {
            this.movementDirection = "down";
        } else if (code === "ArrowLeft") {
            this.movementDirection = "left";
        } else {
            this.movementDirection = "right";
        }
    }

    move() {
        // lastX = snakeBody[snakeBody.length - 1].x; 
        // lastY = snakeBody[snakeBody.length - 1].y; 
    
        // for (let i = snakeBody.length - 1; i >= 1; i--) {
        //     snakeBody[i].x = snakeBody[i - 1].x;
        //     snakeBody[i].y = snakeBody[i - 1].y;
        // }
    
        if (this.movementDirection == "right") {
            this.snakeBody[0].x += this.blockSize;
        } else if (this.movementDirection == "left") {
            this.snakeBody[0].x -= this.blockSize;
        } else if (this.movementDirection == "up") {
            this.snakeBody[0].y -= this.blockSize;
        } else {
            this.snakeBody[0].y += this.blockSize;
        }
    }

    grow() {

    }

    checkBorderHit() {
        const canvas = document.getElementById('game-board');
        const width = canvas.width;
        const height = canvas.height;
        // Snake hit the left or top border of the game 
        if (
            this.snakeBody[0].x === 0 - this.blockSize || 
            this.snakeBody[0].y === 0 - this.blockSize) {
            alert("Border hit");
        // Snake hit the right or bottom border of the game
        } else if (
            this.snakeBody[0].x === width || 
            this.snakeBody[0].y === height) {
            alert("Border hit");
        }
    }

    getSnakeBody() {
        return this.snakeBody;
    }
}

export default Snake;