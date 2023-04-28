class Food {
    constructor() {
        this.x;
        this.y;
        this.blockSize = 20;
        this.findFoodPosition();
    }

    findFoodPosition() {
        const xPositions = [];
        const yPositions = [];
        const canvas = document.getElementById('game-board');
        const width = canvas.width;
        const height = canvas.height;

        for (let i = 0; i <= (width - this.blockSize); i += this.blockSize) {
            xPositions.push(i);
        }
    
        for (let i = 0; i <= (height - this.blockSize); i += this.blockSize) {
            yPositions.push(i);
        }

        // Generate random number between 0 and 680 (at 20px increments)
        const foodX = xPositions[Math.floor(Math.random() * xPositions.length)]
        // Generate random number between 0 and 480 (at 20px increments)
        const foodY = yPositions[Math.floor(Math.random() * yPositions.length)]

        this.x = foodX;
        this.y = foodY;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

}

export default Food;