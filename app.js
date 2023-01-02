document.addEventListener('keydown', handleKeyboardEvents);
window.setInterval(moveSnake, 150);

// const snake = document.querySelector(".snake");
const food = document.querySelector(".food");
const gameContainer = document.querySelector(".game-container");

const gameboardHeight = 500;
const gameboardWidth = 700;
const blockSize = 20;

let marginLeft = 200;
let marginTop = 100;
let lastMarginLeft = null;
let lastMarginTop = null;

let foodMarginLeft = 500;
let foodMarginTop = 200;

let movementDirection = "right";
const snakeBody = [];
initalize();


function initalize() {
    console.log('initalized');
    snakeBody.push({marginLeft: 200, marginTop: 100});
    // const snakePart = document.createElement("div");
    // snakePart.style.width = blockSize + "px";
    // snakePart.style.height = blockSize + "px";
    // snakePart.style.backgroundColor = "green";
    // snakePart.style.position = "absolute";
    // snakePart.style.marginLeft = snakeBody[0].marginLeft + "px";
    // snakePart.style.marginTop = snakeBody[0].marginTop + "px";
    // gameContainer.appendChild(snakePart);
}


function handleKeyboardEvents(event) {
    let code = event.code;
    // Prevent user from moving the browser window with the arrow keys or space
    if (["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(code) > -1) {
        event.preventDefault();
    }

    if (code === "ArrowUp") {
        movementDirection = "up";
    } else if (code === "ArrowDown") {
        movementDirection = "down";
    } else if (code === "ArrowLeft") {
        movementDirection = "left";
    } else {
        movementDirection = "right";
    }
}


function moveSnake() {
    lastMarginLeft = snakeBody[snakeBody.length - 1].marginLeft; 
    lastMarginTop = snakeBody[snakeBody.length - 1].marginTop; 

    for (let i = snakeBody.length - 1; i >= 1; i--) {
        console.log("for loop");
        snakeBody[i].marginLeft = snakeBody[i - 1].marginLeft;
        snakeBody[i].marginTop = snakeBody[i - 1].marginTop;
    }

    if (movementDirection == "right") {
        snakeBody[0].marginLeft += blockSize;
        // snake.style.marginLeft = marginLeft + "px";
    } else if (movementDirection == "left") {
        snakeBody[0].marginLeft -= blockSize;
        // snake.style.marginLeft = marginLeft + "px";
    } else if (movementDirection == "up") {
        snakeBody[0].marginTop -= blockSize;
        // snake.style.marginTop = marginTop + "px";
    } else {
        snakeBody[0].marginTop += blockSize;
        // snake.style.marginTop = marginTop + "px";   
    }
    console.log(snakeBody[0].marginLeft, snakeBody[0].marginTop);
    draw();
    detectBorderHit();
    detectFoodEaten();
}


function draw() {
    clearDomElements();
    drawSnake();
    drawFood();
}


function drawFood() {
    const food = document.createElement("div");
    food.style.width = blockSize + "px";
    food.style.height = blockSize + "px";
    food.style.backgroundColor = "red";
    food.style.marginLeft = foodMarginLeft + "px";
    food.style.marginTop = foodMarginTop + "px";
    gameContainer.appendChild(food);
}


function drawSnake() {
    for (let snakePart of snakeBody) {
        console.log("Drew one part");
        const drawnSnakePart = document.createElement("div");
        drawnSnakePart.style.width = blockSize + "px";
        drawnSnakePart.style.height = blockSize + "px";
        drawnSnakePart.style.backgroundColor = "green";
        drawnSnakePart.style.position = "absolute";
        drawnSnakePart.style.marginLeft = snakePart.marginLeft + "px";
        drawnSnakePart.style.marginTop = snakePart.marginTop + "px";
        gameContainer.appendChild(drawnSnakePart);
    }
}


function clearDomElements() {
    let first = gameContainer.firstElementChild;
    while (first) {
        first.remove();
        first = gameContainer.firstElementChild;
    }
}


function detectBorderHit() {
    // Snake hit the left or top border of the game 
    if (snakeBody[0].marginLeft === -blockSize || snakeBody[0].marginTop === -blockSize) {
        alert("Border hit");
        // resetSnakePosition();
    // Snake hit the right or bottom border of the game
    } else if (snakeBody[0].marginLeft === gameboardWidth || snakeBody[0].marginTop === gameboardHeight) {
        alert("Border hit");
        // resetSnakePosition();
    }
}


function detectFoodEaten() {
    if (snakeBody[0].marginLeft === foodMarginLeft && snakeBody[0].marginTop === foodMarginTop) {
        alert("Food eaten.");
        createNewFood();
    }
}


function createNewFood() {
    const possMarginLeft = [];
    const possMarginTop = [];

    for (let i = 0; i <= (gameboardWidth - blockSize); i += 20) {
        possMarginLeft.push(i);
    }

    for (let i = 0; i <= (gameboardHeight - blockSize); i += 20) {
        possMarginTop.push(i);
    }

    // Generate random number between 0 and 680 (at 20px increments)
    foodMarginLeft = possMarginLeft[Math.floor(Math.random() * possMarginLeft.length)]
    // Generate random number between 0 and 480 (at 20px increments)
    foodMarginTop = possMarginTop[Math.floor(Math.random() * possMarginTop.length)]
    console.log(foodMarginLeft, foodMarginTop);


}


// function resetSnakePosition() {
//     marginLeft = 200;
//     marginTop = 100;

//     snake.style.marginLeft = marginLeft + "px";
//     snake.style.marginTop = marginTop + "px";
// }

 