const container = document.querySelector('.container');

function createGrid(size){
for(let i =0; i < size * size; i++){
    
        let row = document.createElement('div');
        row.className="row box";
        container.appendChild(row);
        let rowSize = 920 / size;
        row.style.height = `${rowSize}px`;
        row.style.width = `${rowSize}px`;
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


