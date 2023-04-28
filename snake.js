class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.snakeBody = [];
        this.movementDirection = "right";
    }

    move(code) {
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

    grow() {

    }
}

export default Snake;