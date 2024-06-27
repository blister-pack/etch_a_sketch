const container = document.querySelector(".container");
const sizeChangeButton = document.querySelector("button.sizeChange");
console.log(sizeChangeButton);

sizeChangeButton.addEventListener("click", () => {
    removeGrid();
    changeNumberOfPixels(parseInt(prompt("How many pixels per side?")));
});


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

    if (pixelNumber < 1) {
        return alert("Your number is too low, try again")
    } else if (pixelNumber > 100) {
        return alert("Your number is way too high, go lower than 100!")
    }
    
    
    for (let index = 0; index < pixelNumber; index++) {
        // 16*16 grid creation
        // each of these divs is the start of a column
        // they encapsulate each column
        const columnDiv = document.createElement("div");
        container.appendChild(columnDiv);
        
        for (let index = 0; index < pixelNumber; index++) {
            const lineDiv = document.createElement("div");
            columnDiv.appendChild(lineDiv);
        }
    }
    
    const pixels = document.querySelectorAll(".container div div");
    pixels.forEach((pixel) => {pixel.addEventListener("mouseenter", changeBackgroundColor)});

}


function removeGrid() {
    // the collection of children to remove must first be turned into an array
    // that way I can use the forEach function that allows me to go through any
    // length of an Array to remove it. yay
    let childrenToRemove = Array.from(document.querySelector(".container").children);
    childrenToRemove.forEach((child) => { child.remove() });
}

