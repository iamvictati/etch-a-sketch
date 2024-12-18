const gridContainer = document.querySelector("#grid-container"); 
const gridButton = document.querySelector("#grid-button");
const penButton = document.querySelector("#pen-button"); 
const colorArray = ["turquoise", "yellow", "hotpink", "lightseagreen", "lightpink"];
let rowNum = 16; 
let cellNum = rowNum; 
let rowHeight = gridContainer.clientHeight / rowNum; 
let cellWidth = gridContainer.clientWidth / cellNum; 
let penColor = penButton.value; 

penButton.addEventListener("change", (event) => { 
    penColor = event.target.value; 
});

function spawnGrid(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        const row = document.createElement("div"); 
        row.classList.add("row"); 
        row.style.height = `${rowHeight + "px"}`; 
        gridContainer.appendChild(row);
        
        for (let i = 0; i < cellNum; i++) {
            const cell = document.createElement("div"); 
            cell.classList.add("cell");
            cell.style.width = `${cellWidth + "px"}`;
            row.appendChild(cell);

            cell.addEventListener("mouseover", (event) => {
                if (penColor === "turquoise" & cell.style.backgroundColor !== "turquoise") { 
                    cell.style.backgroundColor = 'turquoise';
                } else if (penColor === "yellow" & cell.style.backgroundColor !== "yellow") {
                    cell.style.backgroundColor = "yellow"; 
                } else if (penColor === "hotpink" & cell.style.backgroundColor !== "hotpink") {
                    cell.style.backgroundColor = "hotpink"; 
                } else if (penColor === "lightpink" & cell.style.backgroundColor !== "lightpink") {
                    cell.style.backgroundColor = "lightpink";
                } else if (penColor === "seagreen" & cell.style.backgroundColor !== "seagreen") {
                    cell.style.backgroundColor = "lightseagreen"; 
                } else if (penColor === "mixed" 
                    & cell.style.backgroundColor !== "turquoise"
                    & cell.style.backgroundColor !== "yellow" 
                    & cell.style.backgroundColor !== "hotpink" 
                    & cell.style.backgroundColor !== "lightpink" 
                    & cell.style.backgroundColor !== "lightseagreen") {
                    cell.style.backgroundColor =  colorArray[Math.floor(Math.random() * colorArray.length)]; 
                };
            });
        }
    }
}
spawnGrid(rowNum); 

function selectGrid() {
    let gridModal = document.createElement('div'); 
    gridModal.classList.add('grid-modal'); 
    gridModal.setAttribute('id', 'grid-modal'); 
    let closeButton = document.createElement('button');
    closeButton.classList.add('button'); 
    closeButton.setAttribute('id', 'close-button'); 
    closeButton.textContent = 'X'; 
    gridModal.appendChild(closeButton); 
    let text = document.createElement('p');
    text.classList.add('p');
    text.style.color = 'lightcyan'; 
    text.textContent = 'Please write a grid size up to 80';
    gridModal.appendChild(text); 
    let gridInput = document.createElement('input');
    gridInput.classList.add('button'); 
    gridInput.setAttribute('id', 'grid-input'); 
    gridModal.appendChild(gridInput); 
    let caption = document.createElement('figcaption');
    caption.textContent = 'Press Enter'; 
    caption.style.fontSize = '12px';
    gridModal.appendChild(caption);
    document.body.appendChild(gridModal); 

    closeButton.addEventListener('click', (event) => {
        document.querySelector('.grid-modal').style.display = 'none'; 
        document.body.removeChild(gridModal);
    }); 

    gridInput.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            rowNum = gridInput.value; 
            cellNum = gridInput.value; 
            newGrid(rowNum); 
            document.querySelector('.grid-modal').style.display = 'none'; 
            document.body.removeChild(gridModal); 
        }
    });
}

function  newGrid() {
    if (rowNum >= 1 & rowNum <= 80 ) {
        gridContainer.replaceChildren(); 
        spawnGrid(rowNum); 
    } else {
        alert('Your number is over the limit'); 
    } 
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell'); 
    cells.forEach(cell => {
        cell.style.backgroundColor = 'aliceblue'; 
    });
}

// [💜] Eliminate bug with modal function after a second selectiong of grid number 
// [💜] Create the pen color select function or event Listeners 
// [ ] Create opacity effect 
// [💜] Fix bug that appears after trying to hit the x in gridModal