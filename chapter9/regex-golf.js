// REGEX GOLF EXERCISE
console.log("\n\ REGEX GOLF EXERCISE");

verify(/ca[r|t]/, ["my car", "bad cats"], ["camper", "high art"]);

verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

verify(
    /ferr[et|y|ari]/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

function verify(regexp, yes, no) {
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}