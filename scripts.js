const container = document.getElementById("container");
let numDivs = 16; // Initialize with default value

//Hovers effect (works on black color only)//
function makeDivs(numDivs) {
    for (let d = 0; d < numDivs * numDivs; d++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        adjustGridSize(numDivs);
        container.appendChild(cell);
        cell.addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });
    }
}

makeDivs(numDivs);
//Reset Divs to white colored background//
function resetDivs() {
    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}

const resetBtn = document.querySelector(".resetBtn");
//Reset Divs button//
resetBtn.addEventListener("click", resetDivs);

const newGridBtn = document.querySelector(".newGrid");
//User Input for New Grid Box//
newGridBtn.addEventListener("click", () => {
    const newSize = prompt("Enter a number of squares per side (maximum 100):");
    if (newSize <= 100) {
        clearGrid();
        numDivs = newSize;
        makeDivs(numDivs);
        adjustGridSize(numDivs);
    } else {
        alert("Please enter a value less than or equal to 100.");
    }
})

//Clear Grid//
function clearGrid() {
    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((cell) => {
        cell.style.backgroundColor = "white";
        cell.remove();
    })
}

function adjustGridSize(newSize) {
    const cellSize = 600 / newSize;

    const cellElement = document.querySelectorAll(".cell");
    cellElement.forEach((cell) => {
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
    });
}