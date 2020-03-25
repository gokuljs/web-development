// checking of specific todos by clicking 

//$("li").click(function() {

// if li is black then turn it grey 
//else if li is grey turn it black 
// dont compare the color directly 
// use rgb colors to compare


// this below code done in much eaasier using css
// this below method is the jquery method of achieving the color change in li form black to grey viceversa
//     if ($(this).css("color") === "rgb(128, 128, 128)") { // while comapring with correct rgb color follow the correct spaces in rgb
//         $(this).css({
//             color: "black",
//             textDecoration: "none",
//         });
//     } else {

//         $(this).css({
//             color: "grey",
//             textDecoration: "line-through",

//         });
//     }


// });


/// using css

$("li").click(function() {
    $(this).toggleClass("completed"); // completed is the class created in css file 

});


// click on x to delete todo

$("span").click(function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove;
    }); // normally $this.remove will remove the current element by adding parent to it it will remove the parent element 
    event.stopPropagation(); // this is used to stop eventbubbling 
    // not event bubbling is an phenomenon  that one or more events fire at same time 



});