function printreverse(arr) {
    for (var i = arr.length - 1; i > -1; i--) {
        console.log(arr[i]);
    }
}


var arr = [1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9];
var a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
printreverse(arr);
console.log(isuniform(a));

function isuniform(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[0] !== arr1[i]) {
            return false;

        }

    }
    return true;



}
var arr3 = [2, 3, 4, 5, 6, 7, 8, 9];

max(arr3);
console.log("max elementh is " + max(arr3));



function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return (max);

}