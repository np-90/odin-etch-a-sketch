const container = document.querySelector('#container');
let rowCount = 0
let boxCount = 0
let gridSize = 4

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

const boxes = document.querySelectorAll('.box')
boxes.forEach((box => {
    box.addEventListener('click', function() {
        box.classList.add('red');
    });
}));

