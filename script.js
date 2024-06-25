const container = document.querySelector(".container");
const sizeChangeButton = document.querySelector("button.sizeChange");

sizeChangeButton.addEventListener("onclick", changeNumberOfPixels);

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

const pixels = document.querySelectorAll(".container div div");

pixels.forEach((pixel) => {pixel.addEventListener("mouseenter", changeBackgroundColor)});

function changeBackgroundColor(event) {
    // this function changes the bg color of each cell
    // it is triggered by hovering the cursor over the cell
    let target = event.target;
    target.style = "background-color: black;";
}

function changeNumberOfPixels(pixelNumber = 16) {
    // this function changes the number of pixels on the etch-a-sketch
    // the minimum is one and the maximum is 100

    // remove children
    // replace with new grid
    
    
    for (let index = 0; index < pixelNumber; index++) {
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
}

const containersToRemove = document.querySelectorAll(".container div")
console.log(containersToRemove);
containersToRemove.forEach((cont) => { cont.removeChild("div") })

//doesn't work

