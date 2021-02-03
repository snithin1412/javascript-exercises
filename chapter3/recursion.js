// RECURSION EXERCISE
console.log("\n\ RECURSION EXERCISE");

function isEven(input) {
    if (input >= 0) {
        if (input === 0) return true;
        else if (input === 1) return false;
        else {
            let newNumber = input - 2;
            return isEven(newNumber);
        }
    }
    else return "negative number";
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));