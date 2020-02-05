var p1 = document.querySelector("#player1");
var p2 = document.getElementById("player2");
var h1 = document.querySelector("h1");
var p1score = 0;

p1.addEventListener("click", function() {
    p1score++; //p1score clicked;
    h1.textContent = p1score;

});