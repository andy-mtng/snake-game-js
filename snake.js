class Snake {
    constructor(x, y) {
        this.initalX = x;
        this.initalY = y;
        this.lastX;
        this.lastY;
        this.snakeBody = [];
        this.initalizeSnakeBody();
        this.blockSize = 20;
        this.movementDirection = "right";
    }

    initalizeSnakeBody() {
        this.snakeBody.push({x: this.initalX, y: this.initalY});
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
        this.lastX = this.snakeBody[this.snakeBody.length - 1].x; 
        this.lastY = this.snakeBody[this.snakeBody.length - 1].y; 
    
        for (let i = this.snakeBody.length - 1; i >= 1; i--) {
            this.snakeBody[i].x = this.snakeBody[i - 1].x;
            this.snakeBody[i].y = this.snakeBody[i - 1].y;
        }
    
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
        console.log("grow()");
        this.snakeBody.push({x: this.lastX, y: this.lastY});
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
            return true;
        // Snake hit the right or bottom border of the game
        } else if (
            this.snakeBody[0].x === width || 
            this.snakeBody[0].y === height) {
            alert("Border hit");
            return true;
        }
        return false;
    }

    detectFoodEaten(food) {
        if (this.snakeBody[0].x === food.getX() && this.snakeBody[0].y === food.getY()) {
            // Food is eaten
            this.grow();
            return true;
        }
        return false;
    }

    checkSelfHit() {
        for (let i = 1; i < this.snakeBody.length; i++) {
            if ((
                this.snakeBody[0].x === this.snakeBody[i].x) && 
                (this.snakeBody[0].y === this.snakeBody[i].y)) {
                alert("Hit self");
                return true;
            }
        }
        return false;
    }

    getSnakeBody() {
        return this.snakeBody;
    }
}

export default Snake;