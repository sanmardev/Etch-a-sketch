//We select the div container that will have all the divs that later will become the grid
let div = document.querySelector(".container")
//When the user passes the mouse over the container we call the colorSquare function 
div.addEventListener('mouseover', colorSquare);

//We select the input slider and when is clicked we trigger the slideRange function
let slider = document.querySelector("input")
slider.addEventListener('click', slideRange);

function slideRange() {
    //We get the input value and we assign a new number
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

//For loop to create the entire grid layout
for (i = 0; i < slideRange(); i++) {
    let square = document.createElement("div")
    square.style.border = "1px solid black";

    slideRangeFunc = slideRange();

    //Depending on what the user selected we create a different grid layout
    if (slideRangeFunc == 256) {
        let optionOne = document.querySelector(".container");
        optionOne.style.display = "grid";
        optionOne.style.gridTemplateColumns = "repeat(16, auto [col-end])";
        //abel indicating the number of squares selected
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
    div.appendChild(square); //We add all of the new divs created (square) to the main div (.container)
}

function colorSquare(e) {
    let oneSquare = e.target
    oneSquare.style.background = "black";
}

//We select the button and we trigger the function when clicked
let color = document.querySelector(".rgb")
color.addEventListener("click", colorChange)

function colorChange() {
    //We select the div and give to the target (the squares) random colors.
    let div = document.querySelector(".container")
    div.addEventListener('mouseover', (e) => {
        let oneSquare = e.target; //This is for targeting the squares individually

        let arrayColor = ["blue", "red", "orange", "pink", "purple", "yellow", "green", "grey"];
        let randomColor = Math.floor(Math.random() * arrayColor.length);
        //We select the color randomly and we change the background, same as colorSquare function
        let nuevo = arrayColor[randomColor];
        oneSquare.style.background = nuevo;

    })
}