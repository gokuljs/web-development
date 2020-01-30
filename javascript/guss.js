var secret = 4;
var guess = prompt("enter your number");
if (secret === Number(guess)) {
    alert("you got it right");
} else if (Number(guess) > secret) {
    alert("got a greater number");
} else {
    alert("got a smaller number ");
}