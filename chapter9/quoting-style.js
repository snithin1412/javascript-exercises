// QUOTING STYLE EXERCISE
console.log("\n\ QUOTING STYLE EXERCISE");

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/\W'|'\W|^'|&'/g, "\""));