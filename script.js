const container = document.querySelector(".container");
const sizeChangeButton = document.querySelector("button.sizeChange");
const colorChange = document.querySelector(".changeColor select");
let paintColor = "black";

sizeChangeButton.addEventListener("click", () => {
    removeGrid();
    changeNumberOfPixels(parseInt(prompt("How many pixels per side?")));
});

function changeNumberOfPixels(pixelNumber = 16) {
    // this function changes the number of pixels on the etch-a-sketch
    // the minimum is 1 and the maximum is 100

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
            lineDiv.classList.add("pixel");
            columnDiv.appendChild(lineDiv);
        }
    }

    container.addEventListener("mouseenter", changeBackgroundColor, true);
    // https://stackoverflow.com/questions/50177348/mouseenter-delegation-using-vanilla-javascript
    // this way it works on the capturing phase - true as third argument
    // otherwise the whole container would turn black
    // does this also work without the .pixel class? since it's on capture, does it start lower?
}

function changeBackgroundColor(event) {
    // this function changes the bg color of each cell
    // it is triggered by hovering the cursor over the cell
    let target = event.target;
    // console.log(target.classList);
    
    if (target.classList.contains("pixel")) {
        target.style = `background-color: ${paintColor};`;
    }
}

function removeGrid() {
    // the collection of children to remove must first be turned into an array
    // that way I can use the forEach function that allows me to go through any
    // length of an Array to remove it. yay
    let childrenToRemove = Array.from(document.querySelector(".container").children);
    childrenToRemove.forEach((child) => { child.remove() });
}

function getPaintColor() {
    // this function returns the color to paint the squares in
    paintColor = document.querySelector(".changeColor select").value;
}

changeNumberOfPixels();