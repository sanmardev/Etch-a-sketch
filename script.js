let div = document.querySelector(".container")
div.addEventListener('mouseover', colorSquare);

let slider = document.querySelector("input")
slider.addEventListener('click', slideRange);

function slideRange() {

    let slideValue = slider.value
    if (slideValue == 1) {
        slideValue = 256
    } else if (slideValue == 2) {
        slideValue = 1024
    } else if (slideValue == 3) {
        slideValue = 4096
    } else {
        console.log("incorrect");
    }
    return slideValue
}

for (i = 0; i < slideRange(); i++) {
    let square = document.createElement("div")
    square.style.border = "1px solid black";

    slideRangeFunc = slideRange();

    if (slideRangeFunc == 256) {
        let optionOne = document.querySelector(".container");
        optionOne.style.display = "grid";
        optionOne.style.gridTemplateColumns = "repeat(16, auto [col-end])";
        //label indicating the number of squares selected
        let labelOne = document.querySelector(".label");
        labelOne.textContent = "16x16"
    } else if (slideRangeFunc == 1024) {
        let optionTwo = document.querySelector(".container");
        optionTwo.style.display = "grid";
        optionTwo.style.gridTemplateColumns = "repeat(32, auto [col-end])";
        //label indicating the number of squares selected
        let labelOne = document.querySelector(".label");
        labelOne.textContent = "32x32"
    } else if (slideRangeFunc == 4096) {
        let optionThree = document.querySelector(".container");
        optionThree.style.display = "grid";
        optionThree.style.gridTemplateColumns = "repeat(64, auto [col-end])";
        //label indicating the number of squares selected
        let labelOne = document.querySelector(".label");
        labelOne.textContent = "64x64"
    } else {
        console.log("There was an error");
    }
    div.appendChild(square);
}

function colorSquare(e) {
    let oneSquare = e.target
    oneSquare.style.background = "black";
}

let color = document.querySelector(".rgb")
color.addEventListener("click", colorChange)

function colorChange() {
    let div = document.querySelector(".container")
    div.addEventListener('mouseover', (e) => {
        let oneSquare = e.target;
        

        let arrayColor = ["blue", "red", "orange", "pink", "purple", "yellow", "green", "grey"];
        let randomColor = Math.floor(Math.random() * arrayColor.length);

        let nuevo = arrayColor[randomColor]
        oneSquare.style.background = nuevo;


    })
}