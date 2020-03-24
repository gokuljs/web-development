$("#fadeout").on('click', function() {
    $("div").fadeOut(1000);
});

$("#s").on('click', function() {
    $('div').slideUp();

});


$("#l").on('click', function() {
    $('div').slideDown();


}); // slide down works if the display is none in css