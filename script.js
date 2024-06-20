const container = document.querySelector(".container");

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

const containerlol = document.querySelector(".container div");
const pixels = document.querySelectorAll(".container div div");

pixels.forEach((e) => {e.addEventListener("mouseenter", changeBackgroundColor)});

function changeBackgroundColor(event) {
    // this function changes the bg color of each cell
    // it is triggered by hovering the cursor over the cell
    let target = event.target;
    target.style = "background-color: black;";

}