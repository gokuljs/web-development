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
var test1 = document.querySelector("#test1");
var colorpicked = pickcolor();
test1.textContent = colorpicked;
var messsagedisplay = document.querySelector("#message");
for (var i = 0; i < squares.length; i++) {
    // add intial colors to all squares 
    squares[i].style.backgroundColor = colors[i];
    // backgroundColor work for firefox

    // add an event handler to all the squares
    squares[i].addEventListener("click", function() {
        // grab color of the clicked square 
        // compare the color to picked color 
        var clicked = this.style.backgroundColor;

        if (clicked === colorpicked) {
            messsagedisplay.textContent = "correct"
            changecolors(clicked);

        } else {
            this.style.backgroundColor = "#232323"
            messsagedisplay.textContent = "Try again"
        }
    });
}

function changecolors(color) {
    // loop all squares
    //change each color to match given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }

}