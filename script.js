const container = document.querySelector(".container");
const pixel = document.querySelector(".container div div")

for (let index = 0; index < 16; index++) {
    // 16*16 grid creation
    // each of these divs is the start of a column
    // they encapsulate each column
    const columnDiv = document.createElement("div");
    container.appendChild(columnDiv);
    
    for (let index = 0; index < 16; index++) {
        const lineDiv = document.createElement("div");
        columnDiv.appendChild(lineDiv);
    }
}

pixel.addEventListener("hover", changeBackgroundColor);

function changeBackgroundColor(event) {
    // this function changes the bg color of each cell
    // it is triggered by hovering the cursor over the cell
    let target = event.target
}