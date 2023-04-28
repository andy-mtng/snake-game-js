class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.snakeBody = [];
        this.initalizeSnakeBody();
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

    }

    grow() {

    }

    getSnakeBody() {
        return this.snakeBody;
    }
}

export default Snake;