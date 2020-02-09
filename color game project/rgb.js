var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

// spaces between the numbers are important
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var test1 = document.getElementById("test1")
test1.textContent = pickedcolor;
var messagedisplay = document.getElementById("message");
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
    var random = Math.floor(Math.random() * colors.length + 1); // we are picking random color 
    return colors[random];
}