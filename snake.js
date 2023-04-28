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
        console.log("My values:", this.x, this.y);
        console.log("initalizeSnakeBody");
        this.snakeBody.push({x: this.x, y: this.y});
    }

    updateMovementDirection(code) {
        console.log(code);
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
    
        if (movementDirection == "right") {
            snakeBody[0].x += blockSize;
        } else if (movementDirection == "left") {
            snakeBody[0].x -= blockSize;
        } else if (movementDirection == "up") {
            snakeBody[0].y -= blockSize;
        } else {
            snakeBody[0].y += blockSize;
        }
    }

    grow() {

    }

    getSnakeBody() {
        return this.snakeBody;
    }
}

export default Snake;