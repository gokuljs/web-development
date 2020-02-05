var p1 = document.querySelector("#player1");
var p2 = document.getElementById("player2");
var dis1 = document.querySelector("#p1display");
var dis2 = document.querySelector("#p2display");
var reset = document.querySelector("#reset");
var numinput = document.querySelector("input");
var p3 = document.querySelector("#p3"); // or if remove the id tag ang p space span tag means the tag present inside the paragraph tag
var p1score = 0;
var p2score = 0;
var gameover = false;
var winning = 5;

p1.addEventListener("click", function() {
    if (!gameover) {
        p1score++; //p1score clicked;
        if (p1score === winning) {
            gameover = true;
        }
        dis1.textContent = p1score;
    }

});

p2.addEventListener("click", function() {
    if (!gameover) {

        p2score++;
        if (p2score === winning) {
            gameover = true;
        }

        dis2.textContent = p2score;
    }
});

reset.addEventListener("click", function() {
    reset1();

});

function reset1() {

    p2score = 0;
    p1score = 0;
    dis2.textContent = p2score;
    dis1.textContent = p1score;
    gameover = false;
}

numinput.addEventListener("change", function() {

    // change is an other kind of an event the takes place when any kind of change takes place

    p3.textContent = numinput.value; // it gives the string of a value 
    winning = Number(numinput.value);
    reset1();


});