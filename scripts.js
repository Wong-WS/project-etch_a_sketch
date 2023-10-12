const container = document.getElementById("container");
//Hovers effect (works on black color only)//
function makeDivs(numDivs) {
    for (let d = 0; d < numDivs; d++){
        let cells = document.createElement("div");
        container.appendChild(cells)
        cells.addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });
    }
}

makeDivs(256);


const divs = document.querySelectorAll("div");
//Reset Divs to white colored background//
function resetDivs() {
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
}

const resetBtn = document.querySelector(".resetBtn");
//Reset Divs button//
resetBtn.addEventListener("click", resetDivs);

const newGrid = document.querySelector(".newGrid");

// function newGrid() {
    
// }
