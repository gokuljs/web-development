var todos = ["buy new turtle"]; // empty array
var input = prompt("wat would you like to do");

while (input != "quit") {
    if (input === "list") {
        console.log(todos)
    } else if (input === "new") {
        var newtodo = prompt("Enter new todo");
        todos.push(newtodo);
    }
    var input = prompt("wat would you like to do");


}
alert("you quit enjoy");