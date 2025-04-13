let size = 16;

const gridSize = document.querySelector(".gridSizeButton");
let screen = document.querySelector(".screen");

gridSize.addEventListener('click', () => {
    size = prompt("Enter the new size of the grid: ");
    screen.innerHTML = '';
    makeGrid(size);
});

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid black";
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = "#444444";
            })
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

makeGrid(size);