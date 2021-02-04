// YOUR OWN LOOP EXERCISE
console.log("\n\ YOUR OWN LOOP EXERCISE");

function loop(initialValue, condition, updateInitialValue, output) {
    for (let i = initialValue; condition(i); i = updateInitialValue(i)) {
        output(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
