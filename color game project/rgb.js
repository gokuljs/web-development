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

for (var i = 0; i < squares.length; i++) {
    // add intial colors to all squares 
    squares[i].style.backgroundColor = colors[i];
    // backgroundColor work for firefox

}