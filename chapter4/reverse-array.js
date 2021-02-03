// REVERSE ARRAY
console.log("\n\ REVERSE AN ARRAY");

function reverseArray(array) {
    let revArray = [];
    for (let i=0; i<array.length; i++) {
        revArray.unshift(array[i]);
    }
    return revArray;
}

function reverseArrayInPlace(array) {
    for(let i=0; i<array.length/2; i++) {
        let value = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = value
    }
    return array;
}

console.log(reverseArray(["A","B","C","D"]));
let arrayValue = [1,2,3,4,5]
console.log(reverseArrayInPlace(arrayValue));