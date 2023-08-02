const container = document.querySelector('.container');

function createGrid(size){
for(let i =0; i < size; i++){
    let column = document.createElement('div');
    column.className= "column";
    for(let x = 0; x<size; x++){
        let row = document.createElement('div');
        row.className="row box";
        column.appendChild(row);
    }
    container.appendChild(column);
}

const box = document.querySelectorAll(".box");
box.forEach((elem) => {
    elem.addEventListener("mouseenter", colorChange)}
);

};


createGrid(16);

const btn = document.querySelector('.btn');
btn.addEventListener("click", promptMe);

function promptMe( ){
    var gridSize = prompt("Please provide number (limit: 100)");
    if(gridSize > 100){
    container.innerHTML=" ";
    createGrid(100);
    }
    container.innerHTML=" ";
    createGrid(gridSize);
}

function colorChange(box){
    let colorPalette = ["#7C73C0","#94ADD7","#ACFADF","#E8FFCE"];
    let randNum= Math.floor(Math.random() * 4)
    this.style.background = colorPalette[randNum];
};


