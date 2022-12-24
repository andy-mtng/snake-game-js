document.addEventListener('keydown', handleKeyboardEvents);
window.setInterval(moveSnake, 150);

const snake = document.querySelector(".snake");
const food = document.querySelector(".food");

console.log(snake);
console.log(food);

const gameboardHeight = 500;
const gameboardWidth = 700;
const movementDistance = 20; 
const playerBlockSize = 20;

let marginLeft = 200;
let marginTop = 100;

let foodMarginLeft = 500;
let foodMarginTop = 200;

let movementDirection = "right";


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
    if (movementDirection == "right") {
        marginLeft += movementDistance;
        snake.style.marginLeft = marginLeft + "px";
    } else if (movementDirection == "left") {
        marginLeft -= movementDistance;
        snake.style.marginLeft = marginLeft + "px";
    } else if (movementDirection == "up") {
        marginTop -= movementDistance;
        snake.style.marginTop = marginTop + "px";
    } else {
        marginTop += movementDistance;
        snake.style.marginTop = marginTop + "px";   
    }
    detectBorderHit();
    detectFoodEaten();
}


function detectBorderHit() {
    // Snake hit the left or top border of the game 
    if (marginLeft === -movementDistance || marginTop === -movementDistance) {
        alert("Border hit");
        resetSnakePosition();
    // Snake hit the right or bottom border of the game
    } else if (marginLeft === gameboardWidth || marginTop === gameboardHeight) {
        alert("Border hit");
        resetSnakePosition();
    }
}


function detectFoodEaten() {
    if (marginLeft === foodMarginLeft && marginTop === foodMarginTop) {
        alert("Food eaten.");
        createNewFood();
    }
}


function createNewFood() {
    const possMarginLeft = [];
    const possMarginTop = [];

    for (let i = 0; i <= (gameboardWidth - playerBlockSize); i += 20) {
        possMarginLeft.push(i);
    }

    for (let i = 0; i <= (gameboardHeight - playerBlockSize); i += 20) {
        possMarginTop.push(i);
    }

    // Generate random number between 0 and 680 (at 20px increments)
    foodMarginLeft = possMarginLeft[Math.floor(Math.random() * possMarginLeft.length)]
    // Generate random number between 0 and 480 (at 20px increments)
    foodMarginTop = possMarginTop[Math.floor(Math.random() * possMarginTop.length)]
    console.log(foodMarginLeft, foodMarginTop);

    food.style.marginLeft = foodMarginLeft + "px";
    food.style.marginTop = foodMarginTop + "px";
    console.log(food);
}


function resetSnakePosition() {
    marginLeft = 200;
    marginTop = 100;

    snake.style.marginLeft = marginLeft + "px";
    snake.style.marginTop = marginTop + "px";
}

 