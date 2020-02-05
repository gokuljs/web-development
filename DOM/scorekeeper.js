var p1 = document.querySelector("#player1");
var p2 = document.getElementById("player2");
var dis1 = document.querySelector("#p1display");
var dis2 = document.querySelector("#p2display");
var reset = document.querySelector("#reset");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winning = 5;

p1.addEventListener("click", function() {
    if (!gameover) {
        p1score++; //p1score clicked;
        if (p1score === winning) {
            console.log("you won");
        }
        dis1.textContent = p1score;
    }

});

p2.addEventListener("click", function() {
    if (!gameover) {

        p2score++;
        if (p2score === winning) {
            console.log("you won");
        }

        dis2.textContent = p2score;
    }
});

reset.addEventListener("click", function() {
    p2score = 0;
    p1score = 0;
    dis2.textContent = p2score;
    dis1.textContent = p1score;

});