// BEAN COUNTING EXERCISE
console.log("\n\ BEAN COUNTING EXERCISE");

function countBs(str) {
    let count = 0;
    for (let i=0; i<str.length; i++) {
        if ("B" === str[i]) {
            count +=1 ;
        }
    }
    return count;
}

function countChar (str, word) {
    let count = 0;
    for (let i=0; i<str.length; i++) {
        if (word === str[i]) {
            count +=1 ;
        }
    }
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));