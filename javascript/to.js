var todos = ["buy new turtle"]; // empty array
var input = prompt("wat would you like to do");

while (input != "quit") {
    if (input === "list") {
        todos.forEach(function(i) {
            console.log(i);
        })
    } else if (input === "new") {
        addtodo();
    } else if (input == "delete") {
        deltodo();
    }
    var input = prompt("wat would you like to do");


}
alert("you quit enjoy");

function addtodo() {
    var newtodo = prompt("Enter new todo");
    todos.push(newtodo);
}

function deltodo() {
    // index of todo to be deleted
    //delete that todo
    var index = prompt("enter index of todo to delete")
        // splice() is used to remove an particular element from an array 
    todos.splice(index, 1); // so when user types some index index is passed and remove only one item
}