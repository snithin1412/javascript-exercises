// FIZZBUZZ EXERCISE
console.log("\n\ FIZZBUZZ EXERCISE");

for( let i=1; i<=100; i++ ) {
    word = "";
    if ( i%3 == 0 && i%5 == 0 ) word = "FizzBuzz";
    else if ( i%3 == 0 ) word = "Fizz";
    else if ( i%5 == 0 ) word = "Buzz";
    console.log(word || i);
}