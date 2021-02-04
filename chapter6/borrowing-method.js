// BORROWING METHOD EXERCISE
console.log("\n\ BORROWING METHOD EXERCISE");

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call

console.log(Object.prototype.hasOwnProperty.call(map, "one"));