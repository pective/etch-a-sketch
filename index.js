let size = 16;

const gridSize = document.querySelector(".gridSizeButton");
const randomColor = document.querySelector(".randomColorButton");
const ereaser = document.querySelector(".ereaserButton");
let screen = document.querySelector(".screen");

gridSize.addEventListener('click', () => {
    size = prompt("Enter the new size of the grid: ");
    screen.innerHTML = '';
    makeGrid(size);
});

let randomColorMode = false;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

ereaser.addEventListener('click')

randomColor.addEventListener('click', () => {
    if (randomColorMode === false) {
        randomColorMode = true;
        randomColor.style.backgroundColor = "#0a459e"
    } else {
        randomColorMode = false;
        randomColor.style.backgroundColor = "#444444"
    }
})

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid black";
            row.addEventListener('mouseover', () => {
                if( randomColorMode === true ) {
                    row.style.backgroundColor = getRandomColor();
                } else row.style.backgroundColor = "#444444";
            })
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

makeGrid(size);