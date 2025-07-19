const sketchScreen = document.querySelector(".sketch-screen");
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function adjustContainerDimensions() {
    let widthAdjustedToScreen = `${window.innerHeight}px`;
    sketchScreen.style.width = widthAdjustedToScreen;
}

function createNewSquare(fixedWidth) {
    const square = document.createElement("div");
    square.style.width = fixedWidth;
    square.style.height = fixedWidth;
    square.style.border = "1px solid black";
    square.setAttribute("class", "editable-square");
    sketchScreen.appendChild(square);
}

function applyColorChangeBehavior() {
    const squaresCreated = document.querySelectorAll(".editable-square");
    squaresCreated.forEach(square => {
        square.addEventListener("mouseenter", function (e) {
            e.target.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
        }, { once: true })
    });
}

function fillSquareContainer() {
    adjustContainerDimensions();
    let numberOfSquares = 64;
    let squareWidth = `${sketchScreen.offsetWidth / numberOfSquares}px`;
    for (let index = 0; index < numberOfSquares; index++) {
        for (let index = 0; index < numberOfSquares; index++) {
            createNewSquare(squareWidth);
        }
    }
    applyColorChangeBehavior();
}
fillSquareContainer();