// variables
var numOfSquares = 6;
var colors = generateRandColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randGuess();
var guess = document.querySelector("#guess");
var message = document.querySelector("#message")
var resetB = document.querySelector("#reset");
// var easy = document.querySelector("#easy")
// var hard = document.querySelector("#hard")
var mode = document.querySelectorAll(".mode");

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    // add click listners
    squares[i].addEventListener("click", function () {
        var clicked = this.style.backgroundColor
        if (clicked === pickedColor) {
            message.textContent = "Correct!"
            reset.textContent = "Play Again?";
            changeColor(pickedColor);
            document.querySelector("h1").style.backgroundColor = pickedColor;
            if (pickedColor === "rgb(255, 255, 255)") {
                document.querySelector("h1").style.color = "rgb(0, 0, 0)";
            }
        } else {
            this.style.backgroundColor = document.body.style.backgroundColor
            message.textContent = "Wrong. Try Again!"
        }
    })
}

for (let i = 0; i < mode.length; i++) {
    mode[i].addEventListener ("click", function() {
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
        reset();
    })
}

function reset(){
    colors = generateRandColor(numOfSquares);
    pickedColor = randGuess();
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    document.querySelector("h1").style.backgroundColor = "lightseagreen";
    guess.textContent = pickedColor;
    resetB.textContent = "New Game?";
    message.textContent = "";
}

guess.textContent = pickedColor;
// event

resetB.addEventListener("click", function() {
    reset();
})

// function

function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        
    }
}

function randGuess() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandColor(leng) {
    var arr = [];

    for (let i = 0; i < leng; i++) {
        arr.push(randColor());
    }

    return arr;
}

function randColor() {
    var randRed = Math.floor(Math.random() * 256);
    var randGreen = Math.floor(Math.random() * 256);
    var randBlue = Math.floor(Math.random() * 256);

    var randRGB = "rgb(" + randRed + ", " + randGreen + ", " + randBlue + ")";

    return randRGB;
}