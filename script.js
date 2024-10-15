const gridContainer = document.querySelector("#grid-container"); 
let rowNum = 16; 
let colNum = 16;

function spawnGrid(rowNum, colNum) {

    const grid = rowNum * colNum; 
    let containerWidth = gridContainer.clientWidth; 
    let containerHeight = gridContainer.clientHeight; 
    let divWidth = containerWidth / colNum;
    let divHeight = containerHeight / rowNum; 

    for (let i = 0; i < grid; i++) {
        let spawn = document.createElement("div"); 
        spawn.style.backgroundColor = "white"; 
        spawn.style.border = "1px solid hotpink"; 
        spawn.style.width = "20px";
        spawn.style.height = "20px"; 
        gridContainer.appendChild(spawn); 
    } 
}
spawnGrid(rowNum, colNum);
console.log(grid);