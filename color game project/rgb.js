var colors = generateRandomColors(6);

// spaces between the numbers are important
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var test1 = document.getElementById("test1")
test1.textContent = pickedcolor;
var messagedisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
for (var i = 0; i < squares.length; i++) {
    // add intial colors to all squares 
    squares[i].style.backgroundColor = colors[i];
    // backgroundColor work for firefox
    // add click listener to squares
    squares[i].addEventListener("click", function() {

        // compare color to the picked color 
        var clicked = this.style.backgroundColor;
        if (clicked === pickedcolor) {
            messagedisplay.textContent = "correct"
            changecolors(clicked);
            h1.style.backgroundColor = clicked;


        } else {
            this.style.backgroundColor = "#232323"
            messagedisplay.textContent = "incorrect";
        }
    });

}

function changecolors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickcolor() {
    var random = Math.floor(Math.random() * colors.length); // we are picking random color
    return colors[random];
}

// function for generating random colors 
function generateRandomColors(num) {
    // make an random color
    var arr = [];
    // repaet num times
    for (var i = 0; i < num; i++) {
        // get random colors pushed into the array 
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor() {
    // we have rgb red from 0 to 255;
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // we have rgb blue from 0 to 255;
    // we have rgb green from 0 to 255;
    return "rgb(" + red + ", " + green + ", " + blue + ")";


}