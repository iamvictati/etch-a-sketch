const gridContainer = document.querySelector("#grid-container"); 
let rowNum = 80; 
let cellNum = 80; 
let rowHeight = gridContainer.clientHeight / rowNum; 
let cellWidth = gridContainer.clientWidth / cellNum; 

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
                cell.style.backgroundColor = "pink"; 
            });
        }
    }
}
spawnGrid(rowNum); 

//TIPS BY PHOSPHOR: 
/*I also used flex wrap on mine. the workaround I used for wrap and sizes was to calculate and set the width each time I changed the dimensions.

so your issue isn't that column doesn't exist or isn't available. however, look at what column is referring to: the unattached element you just created. you then attach it to the gridContainer. then in your original snippet, you attached the row elements to the unattached element, not the DOM node.
here's another hint if that's still not clear: think about when you want to call spawnRow so that after appending the divs to the column, the whole thing gets appended to the DOM */ 
//
/*something that might make things easier is explicitly passing references to elements as arguments. that takes a lot of the guesswork out of "what was the value of this variable when I called it" and makes troubleshooting easier.*/

//TIPS BY SOFFY 
/*I don't know if this helps, but when I did the project, I used percentage dimensions, since I knew that each square's size was just (100/the number of squares in a side)%. then it was just a matter of using flex wrap, since the container's size doesn't change */

//Check aspect-ratio property 

