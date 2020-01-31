var movie = [{
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, {
    title: "has",
    has_watcher: true,
    rating: 6,

}, {
    title: "has",
    has_watcher: false,
    rating: 6,

}, ]

movie.forEach(function(movie1) {
    var result = "you have ";
    if (movie.has_watcher) {
        result += "watched";
    } else {
        result += "not seen";
    }
    result += "" + movie.title + "\" -";
    result += "" + movie.rating + "starts";
    console.log(result);
})