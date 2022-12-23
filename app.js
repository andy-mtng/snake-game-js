document.addEventListener('keydown', handleKeyboardEvents);
// window.setInterval(moveSnake, 150);

const snake = document.querySelector(".snake");
const gameboardHeight = 500;
const gameboardWidth = 700;
const movementDistance = 20; 
const singleSnakeSize = 20;
let marginLeft = 0;
let marginTop = 0;
let movementDirection = "right";


function handleKeyboardEvents(event) {
    let code = event.code;
    console.log("code = ", code);

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
        console.log(marginLeft + "px");
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
    detectBorderHit()
}


function detectBorderHit() {
    if ((marginLeft === (-movementDistance || gameboardWidth + movementDistance)) || 
        (marginTop === (-movementDistance || gameboardHeight + movementDistance))) {
            alert("Border hit");
        } 
}

