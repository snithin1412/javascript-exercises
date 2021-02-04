// EVERYTHING EXERCISE
console.log("\n\ EVERYTHING EXERCISE");

function every(array, test) {
    let filteredArray = array.filter(test);
    if (array.length === filteredArray.length) return true;
    else return false;
}

function some(array, test) {
    let filteredArray = array.filter(test);
    if (array.length === filteredArray.length || filteredArray.length > 0) return true;
    else return false;
}
console.log("Every exercise");
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log("Some exercise");
console.log(some([1, 3, 5], n => n < 10));
console.log(some([2, 4, 16], n => n < 10));
console.log(some([10, 11, 12], n => n < 10));