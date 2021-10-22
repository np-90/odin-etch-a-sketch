const container = document.querySelector('#container'); 
const reset = document.querySelector('button');
let rowCount = 0
let boxCount = 0

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
const boxes = document.querySelectorAll('.box')
boxes.forEach((box => {
    box.addEventListener('mouseover', function() {
        box.classList.add('red');
    });
}));
}

drawGrid(16)

function resetGrid() {
    const rows = document.querySelectorAll('.row')
    rows.forEach((row => {
        container.removeChild(row);
        }))
    let x = prompt('How many grids would you like to play with?');
    drawGrid(x)
    };

reset.addEventListener('click', resetGrid);