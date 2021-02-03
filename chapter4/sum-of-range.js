// SUM OF RANGE EXERCISE
console.log("\n\ SUM OF RANGE EXERCISE");

function range(start, end, step) {
    let array = [];
    let stepValue;

    if (end > start) {
        stepValue = step || 1;
        for (let i=start; i<=end; i=i+stepValue) {
            array.push(i);
        }
    }
    else {
        stepValue = step || -1;
        for (let i=start; i>=end; i=i+stepValue) {
            array.push(i);
        }
    }
    return array;
    
}

function sum(array) {
    let total = 0;
    for (let arrayItem of array) {
        total = total + arrayItem;
    }
    return total;
}

console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));