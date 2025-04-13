let size = 16;

const gridSize = document.querySelector(".gridSizeButton");
gridSize.addEventListener('click', () => {
    
});

function makeGrid(size) {
    let screen = document.querySelector(".screen");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "2px solid black";
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}



makeGrid(size);