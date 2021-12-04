const container = document.querySelector('.container');
const button = document.querySelector('#btn');

function drawGrid(numSquares){
    container.style.gridTemplateColumns = `repeat(${numSquares}, ${800/numSquares}px)`;
    let totalSquares = numSquares*numSquares;
    for(let i = 1; i <= totalSquares; i++){
        const square = document.createElement('div');
        square.classList.add('grid-element');
        container.appendChild(square);
        square.addEventListener('mouseenter', e => {
            square.style.backgroundColor = "pink";
        })
    }
}
drawGrid(16);


function removeAllChildNodes(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function createGrid(e) {
    removeAllChildNodes(container);
    let numSquares = prompt("Enter the number of squares you'd like per side of the grid (no more than 100)", "");
    while(numSquares > 100){
        numSquares = prompt("Sorry, please enter a number less than 100", "");
    }
    drawGrid(numSquares);
}

button.addEventListener('click', createGrid);