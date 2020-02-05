console.log("connected");
var button = document.querySelector("button");
var body = document.querySelector("body");
button.addEventListener("click", function() {
    if (body.style.background === "orange") {
        body.style.background = "white";
    } else if (body.style.background = "white") {

        body.style.background = "orange";

    }



});