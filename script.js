const sketchScreen = document.querySelector(".sketch-screen");
const gridData = document.querySelector(".grid-data");
const restartButton = document.querySelector(".restart-button");
const gridForm = document.querySelector(".grid-form");
const gridFormInput = document.querySelector(".grid-form-input");

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let userNumberSquares = 0;

function adjustContainerDimensions() {
    let widthAdjustedToScreen = `${window.innerHeight}px`;
    sketchScreen.style.width = widthAdjustedToScreen;
}

function createNewSquare(fixedWidth) {
    const square = document.createElement("div");
    square.style.width = fixedWidth;
    square.style.height = fixedWidth;
    //square.style.border = "1px solid black";
    square.setAttribute("class", "editable-square");
    sketchScreen.appendChild(square);
}

function applyColorChangeBehavior() {
    const squaresCreated = document.querySelectorAll(".editable-square");
    squaresCreated.forEach(square => {
        square.addEventListener("mouseenter", function (e) {
            e.target.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
            //e.target.style.border = "none";
        }, { once: true })
    });
}

function fillSquareContainer() {
    adjustContainerDimensions();
    let numberOfSquares = userNumberSquares === 0 ? 32 : userNumberSquares;
    let squareWidth = `${sketchScreen.offsetWidth / numberOfSquares}px`;
    for (let index = 0; index < numberOfSquares; index++) {
        for (let index = 0; index < numberOfSquares; index++) {
            createNewSquare(squareWidth);
        }
    }
    applyColorChangeBehavior();
    const gridSizeInfo = `The current dimensions of this grid are ${numberOfSquares} x ${numberOfSquares}`;
    gridData.textContent = gridSizeInfo;
}

function handleRestartGrid() {
    gridData.style.display = "none";
    restartButton.style.display = "none";
    gridForm.style.display = "block";
}

function handleGridNumberSubmit(e) {
    e.preventDefault();
    userNumberSquares = gridFormInput.value;
    gridFormInput.value = "";
    gridForm.style.display = "none";
    gridData.style.display = "block";
    restartButton.style.display = "block";
    while (sketchScreen.firstChild) {
        sketchScreen.removeChild(sketchScreen.firstChild);
    }
    fillSquareContainer();
}

document.addEventListener("DOMContentLoaded", fillSquareContainer);
restartButton.addEventListener("click", handleRestartGrid);
gridForm.addEventListener("submit", handleGridNumberSubmit);