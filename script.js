const gridContainer = document.querySelector("#grid-container"); 
let column;
let row;

let rowNum = 16; 
let colNum = 16;

const grid = rowNum * colNum; 
function spawnGrid(rowNum, colNum) {

    // for (let i = 0; i < grid; i++) {
    //     let spawn = document.createElement("div"); 
    //     spawn.style.backgroundColor = "white"; 
    //     spawn.style.border = "1px solid hotpink"; 
    //     spawn.style.width = "40px";
    //     spawn.style.height = "30px"; 
    //     gridContainer.appendChild(spawn); 
    // } 

    for (let i = 0; i < grid; i++) {
        spawnCol(colNum);
        spawnRow(rowNum);
    }
}
spawnGrid(rowNum, colNum);
console.log(grid);

function spawnCol(colNum) {

    for (let i = 0; i < colNum; i++) {
        let column = document.createElement("div");
        column.style.backgroundColor = "white";
        column.classList.add("column");
        gridContainer.appendChild(column); 
    }
}
console.log(colNum);

function spawnRow(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.style.backgroundColor = "white";
        row.classList.add("row");
        column.appendChild(row); 
    }
}
console.log(rowNum); 
