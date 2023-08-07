const container = document.querySelector('.container');

function createGrid(size){
for(let i =0; i < size * size; i++){
    
        let box = document.createElement('div');
        box.className="box";
        container.appendChild(box);
        let boxSizeWidth = 955 / size;
        let boxSizeHeight = 600 / size;
        box.style.height = `${boxSizeHeight}px`;
        box.style.width = `${boxSizeWidth}px`;
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


