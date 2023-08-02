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


createGrid(5);

const btn = document.querySelector('.btn');
btn.addEventListener("click", promptMe);

function promptMe( ){
    var gridSize = prompt("Please provide number:");
    container.innerHTML=" ";
    createGrid(gridSize);
}

function colorChange(box){
    this.classList.add('hovered');
};


