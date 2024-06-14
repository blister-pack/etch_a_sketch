const container = document.querySelector(".container");

for (let index = 0; index < 16; index++) {
    // 16*16 grid creation
    const lineDiv = document.createElement("div");
    for (let index = 0; index < 16; index++) {
        container.appendChild(lineDiv);
    }
}