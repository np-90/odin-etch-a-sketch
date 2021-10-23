function drawGrid(gridSize) {
    while (rowCount < gridSize) {
        const row = document.createElement('div');
        row.classList.add('row');
        while (boxCount < gridSize) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
            boxCount++
        }
        container.appendChild(row);
        rowCount++
        boxCount = 0
    };
    rowCount = 0
    createEvent();
}

function createEvent() {
    const boxes = document.querySelectorAll('.box')     // create Node List containing all boxes
    boxes.forEach((box => {     // loop through boxes
        box.addEventListener('mouseover', function() {      // add event listener
            box.style.backgroundColor = colorGen();
        });
    }));
}

function resetGrid() { // reset the grid and asks the user for a new grid size
    const rows = document.querySelectorAll('.row')      // create a Node List containing all 8 rows
    rows.forEach((row => {      // loop through each row within rows
        container.removeChild(row);     // remove each row from the container
        }))
    let newGridSize = prompt('What grid size would you like to play with next? (1 - 99)');        // ask the user for new gridSize
    while (newGridSize >= 100 || newGridSize <= 0) {
        newGridSize = prompt('Please select a number between 1 and 99!')
    }
    drawGrid(newGridSize)       // draw new grid using newGridSize
};

function colorGen() {       // return random RGB color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

const container = document.querySelector('#container'); // add container to variable
const reset = document.querySelector('#reset'); // add reset button to reset variable
let rowCount = 0
let boxCount = 0

drawGrid(16)

reset.addEventListener('click', resetGrid);