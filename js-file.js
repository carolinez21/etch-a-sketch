const container = document.querySelector('.container');
const button = document.querySelector('#btn');

//when hover, change to pink
function changeColor(e){
    this.style.backgroundColor = "pink";
}

//when hover, change to a random color
function changeRandomColor(e){
    let r = Math.floor(Math.random()*255) + 1;
    let g = Math.floor(Math.random()*255) + 1;
    let b = Math.floor(Math.random()*255) + 1;
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//when hover, decrease the transparency
function decreaseTransparency(e){
    let color = window.getComputedStyle(this).backgroundColor;
    color = color.slice(color.indexOf('(')+1, color.indexOf(')'));
    let colorArr = color.split(',');
    let j = colorArr.length;
    while(j--){
        colorArr[j] = Number(colorArr[j]);
    }
    let alpha = colorArr[3];
    alpha += .1;
    this.style.backgroundColor = `rgba(0,0,0, ${alpha})`;
}

function drawGrid(numSquares){
    container.style.gridTemplateColumns = `repeat(${numSquares}, ${750/numSquares}px)`;
    let totalSquares = numSquares*numSquares;
    for(let i = 1; i <= totalSquares; i++){
        const square = document.createElement('div');
        square.classList.add('grid-element');
        container.appendChild(square);
        square.addEventListener('mouseenter', 
        changeColor
        //changeRandomColor
        //decreaseTransparency
        )
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